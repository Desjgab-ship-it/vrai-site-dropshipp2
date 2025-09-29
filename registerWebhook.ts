import type { Express } from "express";
import express from "express";
import Stripe from "stripe";
import { storage } from "./storage";

const stripe = process.env.STRIPE_SECRET_KEY ? new Stripe(process.env.STRIPE_SECRET_KEY) : null;

export function registerWebhook(app: Express) {
  // POST /api/stripe/webhook - Handle Stripe webhooks with signature verification
  app.post("/api/stripe/webhook", 
    express.raw({ type: "application/json" }),
    async (req, res) => {
      try {
        if (!stripe) {
          return res.status(500).json({ 
            message: "Stripe is not configured" 
          });
        }

        const sig = req.headers['stripe-signature'];
        const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

        if (!sig || !webhookSecret) {
          console.log('Missing stripe signature or webhook secret');
          return res.status(400).send('Missing signature or webhook secret');
        }

        let event: Stripe.Event;

        try {
          // Verify webhook signature
          event = stripe.webhooks.constructEvent(req.body, sig, webhookSecret);
        } catch (err: any) {
          console.log(`Webhook signature verification failed:`, err.message);
          return res.status(400).send(`Webhook Error: ${err.message}`);
        }

        // Handle the event
        switch (event.type) {
          case 'checkout.session.completed':
            await handleCheckoutSessionCompleted(event.data.object as Stripe.Checkout.Session);
            break;
          default:
            console.log(`Unhandled event type ${event.type}`);
        }

        res.json({ received: true });
      } catch (error: any) {
        console.error("Webhook error:", error);
        res.status(500).json({ 
          message: "Webhook processing failed: " + error.message 
        });
      }
    }
  );
}

async function handleCheckoutSessionCompleted(session: Stripe.Checkout.Session) {
  try {
    console.log('Processing checkout.session.completed:', session.id);

    // Update order status in database
    const order = await storage.getOrderByStripeSessionId(session.id);
    if (order) {
      await storage.updateOrderStatus(order.id, 'completed');
      console.log(`Order ${order.id} marked as completed`);
    }

    // Prepare order data for external systems
    const orderData = {
      sessionId: session.id,
      customerEmail: session.customer_details?.email || session.customer_email,
      customerName: session.customer_details?.name,
      amount: session.amount_total,
      currency: session.currency,
      status: 'completed',
      orderNumber: order?.id || session.id,
      timestamp: new Date().toISOString()
    };

    // Skip external calls if in mock mode
    if (process.env.MOCK_MODE === "true") {
      console.log('MOCK_MODE: Skipping external calls. Order data:', orderData);
      return;
    }

    // Handle supplier integration
    await handleSupplierIntegration(orderData);

    // Handle Make webhook
    await handleMakeWebhook(orderData);

  } catch (error) {
    console.error('Error handling checkout.session.completed:', error);
  }
}

async function handleSupplierIntegration(orderData: any) {
  const supplierMode = process.env.SUPPLIER_MODE;

  if (supplierMode === "api") {
    const apiUrl = process.env.SUPPLIER_API_URL;
    const apiKey = process.env.SUPPLIER_API_KEY;

    if (apiUrl && apiKey) {
      try {
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
          },
          body: JSON.stringify(orderData),
        });

        if (response.ok) {
          console.log('Supplier API notification sent successfully');
        } else {
          console.error('Supplier API notification failed:', response.status, response.statusText);
        }
      } catch (error) {
        console.error('Error sending supplier API notification:', error);
      }
    } else {
      console.log('Supplier API mode enabled but missing URL or API key');
    }
  } else if (supplierMode === "email") {
    const supplierEmail = process.env.SUPPLIER_PO_EMAIL;
    
    if (supplierEmail) {
      await sendSupplierEmail(orderData, supplierEmail);
    } else {
      console.log('Supplier email mode enabled but missing SUPPLIER_PO_EMAIL');
    }
  } else if (supplierMode) {
    console.log(`Unknown supplier mode: ${supplierMode}`);
  }
  // If no supplier mode is set, safely no-op
}

async function sendSupplierEmail(orderData: any, supplierEmail: string) {
  // Check for email provider configuration
  if (process.env.SENDGRID_API_KEY) {
    await sendViaSendGrid(orderData, supplierEmail);
  } else if (process.env.MAILGUN_API_KEY && process.env.MAILGUN_DOMAIN) {
    await sendViaMailgun(orderData, supplierEmail);
  } else {
    console.log('Email mode enabled but no email provider configured (SENDGRID_API_KEY or MAILGUN_API_KEY/MAILGUN_DOMAIN)');
  }
}

async function sendViaSendGrid(orderData: any, supplierEmail: string) {
  try {
    // Placeholder for SendGrid implementation
    console.log('SendGrid email would be sent to:', supplierEmail, 'with order:', orderData.orderNumber);
    // TODO: Implement actual SendGrid email sending
  } catch (error) {
    console.error('Error sending SendGrid email:', error);
  }
}

async function sendViaMailgun(orderData: any, supplierEmail: string) {
  try {
    // Placeholder for Mailgun implementation
    console.log('Mailgun email would be sent to:', supplierEmail, 'with order:', orderData.orderNumber);
    // TODO: Implement actual Mailgun email sending
  } catch (error) {
    console.error('Error sending Mailgun email:', error);
  }
}

async function handleMakeWebhook(orderData: any) {
  const makeWebhookUrl = process.env.MAKE_WEBHOOK_URL;

  if (makeWebhookUrl) {
    try {
      const response = await fetch(makeWebhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      if (response.ok) {
        console.log('Make webhook notification sent successfully');
      } else {
        console.error('Make webhook notification failed:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error sending Make webhook notification:', error);
    }
  }
  // If no Make webhook URL is set, safely no-op
}