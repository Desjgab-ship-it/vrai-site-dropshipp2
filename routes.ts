import type { Express } from "express";
import { createServer, type Server } from "http";
import Stripe from "stripe";
import { storage } from "./storage";
import { z } from "zod";
import { currencyCodeSchema, convertPrice, getCurrency } from "../shared/currency";

if (!process.env.STRIPE_SECRET_KEY) {
  console.warn('Warning: STRIPE_SECRET_KEY not found in environment variables');
}

const stripe = process.env.STRIPE_SECRET_KEY ? new Stripe(process.env.STRIPE_SECRET_KEY) : null;

export async function registerRoutes(app: Express): Promise<Server> {
  // Schema for checkout session validation with strict currency enum
  const createCheckoutSchema = z.object({
    customerEmail: z.string().email().optional().or(z.literal("")),
    customerName: z.string().optional(),
    currency: currencyCodeSchema.default('USD')
  });

  // Stripe checkout session creation for hosted checkout
  app.post("/api/create-checkout-session", async (req, res) => {
    try {
      // Mock mode for testing - check first to allow testing without Stripe keys
      if (process.env.MOCK_MODE === "true") {
        return res.json({
          sessionId: "mock",
          url: "/success?session_id=mock"
        });
      }

      if (!stripe) {
        return res.status(500).json({ 
          message: "Stripe is not configured. Please add STRIPE_SECRET_KEY to environment variables." 
        });
      }

      // Validate request body
      const validation = createCheckoutSchema.safeParse(req.body);
      if (!validation.success) {
        return res.status(400).json({ 
          message: "Invalid request data",
          errors: validation.error.errors
        });
      }

      const { customerEmail, customerName, currency } = validation.data;
      
      // Use APP_BASE_URL from environment
      const baseUrl = process.env.APP_BASE_URL || process.env.BASE_URL || 'http://localhost:5000';
      
      // Build session data with required fields
      const sessionData: any = {
        payment_method_types: ['card'],
        mode: 'payment',
        success_url: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${baseUrl}/`,
        shipping_address_collection: {
          allowed_countries: ["US", "CA", "FR", "GB", "DE", "AU", "JP"]
        },
        metadata: {
          customerName: customerName || '',
          productName: 'Premium Product'
        }
      };

      // Add automatic tax if enabled
      if (process.env.ENABLE_TAX === "true") {
        sessionData.automatic_tax = { enabled: true };
      }

      // Use PRICE_ID if provided, otherwise fallback to unit_amount
      if (process.env.PRICE_ID) {
        sessionData.line_items = [
          {
            price: process.env.PRICE_ID,
            quantity: 1
          }
        ];
      } else {
        // Fallback to existing currency conversion logic
        const USD_PRICE_CENTS = 2999; // $29.99 USD base price in cents
        
        const currencyInfo = getCurrency(currency);
        if (!currencyInfo) {
          return res.status(400).json({ 
            message: `Unsupported currency: ${currency}` 
          });
        }
        
        const convertedPrice = convertPrice(USD_PRICE_CENTS, currency);
        
        sessionData.line_items = [
          {
            price_data: {
              currency: currency.toLowerCase(),
              product_data: {
                name: 'Premium Product',
                description: 'Revolutionary premium product for modern professionals',
              },
              unit_amount: convertedPrice,
            },
            quantity: 1,
          }
        ];
      }

      // Only add customer_email if it's provided and valid
      if (customerEmail && customerEmail.includes('@') && customerEmail.length > 5) {
        sessionData.customer_email = customerEmail;
      }
      
      const session = await stripe.checkout.sessions.create(sessionData);

      // Create a pending order in database (use converted price or base price)
      const orderAmount = process.env.PRICE_ID ? 2999 : convertPrice(2999, currency);
      await storage.createOrder({
        stripeSessionId: session.id,
        customerEmail: customerEmail || 'guest@example.com',
        customerName: customerName || 'Guest Customer',
        amount: orderAmount,
        currency: currency.toLowerCase(),
        status: 'pending',
        productName: 'Premium Product'
      });
      
      res.json({ sessionId: session.id, url: session.url });
    } catch (error: any) {
      console.error("Error creating checkout session:", error);
      res.status(500).json({ 
        message: "Error creating checkout session: " + error.message 
      });
    }
  });

  // Explicitly return 404 for removed legacy payment intent endpoint - security vulnerability (client-controlled amounts)
  app.post("/api/create-payment-intent", async (req, res) => {
    res.status(404).json({ 
      message: "This endpoint has been removed for security reasons. Use /api/create-checkout-session instead." 
    });
  });

  // Schema for payment verification
  const verifyPaymentSchema = z.object({
    sessionId: z.string().min(1, "Session ID is required")
  });

  // Verify payment and get order details
  app.post("/api/verify-payment", async (req, res) => {
    try {
      if (!stripe) {
        return res.status(500).json({ 
          message: "Stripe is not configured." 
        });
      }

      const validation = verifyPaymentSchema.safeParse(req.body);
      if (!validation.success) {
        return res.status(400).json({ 
          message: "Invalid request data",
          errors: validation.error.errors
        });
      }

      const { sessionId } = validation.data;

      // Retrieve the checkout session from Stripe
      const session = await stripe.checkout.sessions.retrieve(sessionId);
      
      if (session.payment_status === 'paid') {
        // Update order status in database
        const order = await storage.getOrderByStripeSessionId(sessionId);
        if (order) {
          await storage.updateOrderStatus(order.id, 'completed');
          
          res.json({
            orderId: order.id,
            amount: order.amount,
            customerEmail: order.customerEmail,
            productName: order.productName,
            status: 'completed'
          });
        } else {
          res.status(404).json({ message: "Order not found" });
        }
      } else {
        res.status(400).json({ message: "Payment not completed" });
      }
    } catch (error: any) {
      console.error("Error verifying payment:", error);
      res.status(500).json({ 
        message: "Error verifying payment: " + error.message 
      });
    }
  });

  // Schema for contact form validation
  const contactSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Valid email is required"),
    subject: z.string().optional(),
    message: z.string().min(1, "Message is required")
  });

  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validation = contactSchema.safeParse(req.body);
      if (!validation.success) {
        return res.status(400).json({ 
          message: "Invalid contact form data",
          errors: validation.error.errors
        });
      }

      const { name, email, subject, message } = validation.data;

      // Save contact form submission to database
      await storage.createContact({
        name,
        email,
        subject: subject || '',
        message
      });

      console.log("Contact form submission saved:", {
        name,
        email,
        subject,
        timestamp: new Date().toISOString()
      });

      res.json({ 
        success: true, 
        message: "Thank you for your message! We'll get back to you soon." 
      });
    } catch (error: any) {
      console.error("Error processing contact form:", error);
      res.status(500).json({ 
        message: "Error processing your message. Please try again." 
      });
    }
  });

  // Schema for newsletter subscription validation
  const subscribeSchema = z.object({
    email: z.string().email("Valid email is required")
  });

  // Newsletter subscription
  app.post("/api/subscribe", async (req, res) => {
    try {
      const validation = subscribeSchema.safeParse(req.body);
      if (!validation.success) {
        return res.status(400).json({ 
          message: "Invalid email address",
          errors: validation.error.errors
        });
      }

      const { email } = validation.data;

      // Check if email already exists
      const existing = await storage.getNewsletterByEmail(email);
      if (existing) {
        return res.json({ 
          success: true, 
          message: "You're already subscribed to our newsletter!" 
        });
      }

      // Save newsletter subscription to database
      await storage.createNewsletterSubscription({ email });

      console.log("Newsletter subscription saved:", {
        email,
        timestamp: new Date().toISOString()
      });

      res.json({ 
        success: true, 
        message: "Successfully subscribed to newsletter!" 
      });
    } catch (error: any) {
      console.error("Error processing newsletter subscription:", error);
      res.status(500).json({ 
        message: "Error subscribing to newsletter. Please try again." 
      });
    }
  });

  // Order tracking (placeholder)
  app.post("/api/track-order", async (req, res) => {
    try {
      const { trackingNumber } = req.body;
      
      if (!trackingNumber) {
        return res.status(400).json({ message: "Tracking number is required" });
      }

      // TODO: Implement actual order tracking
      console.log("Order tracking request:", {
        trackingNumber,
        timestamp: new Date().toISOString()
      });

      // Placeholder response
      res.json({
        success: true,
        tracking: {
          number: trackingNumber,
          status: "In Transit",
          location: "Distribution Center",
          estimatedDelivery: "2-3 business days"
        }
      });
    } catch (error: any) {
      console.error("Error tracking order:", error);
      res.status(500).json({ 
        message: "Error tracking order. Please try again." 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
