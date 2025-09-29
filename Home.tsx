import { Link } from "wouter";
import { TrustBadges } from "../components/TrustBadges";
import { apiRequest } from "@/lib/queryClient";
import { useCurrency } from "../context/CurrencyContext";
import { useState, useEffect } from "react";
import { fetchRuntimeConfig } from "../lib/config";

export default function Home() {
  const { selectedCurrency, formatPrice } = useCurrency();
  const [checkoutEnabled, setCheckoutEnabled] = useState(false);
  const [showComingSoon, setShowComingSoon] = useState(false);

  useEffect(() => {
    fetchRuntimeConfig().then(config => {
      setCheckoutEnabled(config.ENABLE_CHECKOUT);
      setShowComingSoon(config.SHOW_COMING_SOON);
    });
  }, []);
  
  const handleBuyClick = async () => {
    try {
      console.log("Starting checkout process...");
      const response = await apiRequest("POST", "/api/create-checkout-session", {
        customerEmail: "", // Optional - Stripe will collect this
        customerName: "",  // Optional - Stripe will collect this
        currency: selectedCurrency.code // Pass selected currency
      });
      
      console.log("API response received:", response.status);
      const data = await response.json();
      console.log("Response data:", data);
      
      if (data.url) {
        console.log("Redirecting to:", data.url);
        // Redirect to Stripe Checkout
        window.location.href = data.url;
      } else {
        console.error("No URL in response:", data);
        alert("Checkout session created but no redirect URL provided.");
      }
    } catch (error) {
      console.error("Error creating checkout session:", error);
      console.error("Error details:", error instanceof Error ? error.message : String(error));
      alert("Unable to process payment. Please try again.");
    }
  };
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section py-20">
        <div className="container">
          <h1 className="text-hero mb-6">
            Revolutionary Premium Product
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-shadow">
            Experience the future of innovation with our cutting-edge solution designed for modern professionals
          </p>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-500 mb-4">
              {formatPrice(2999)} {/* $29.99 USD base price */}
            </div>
            <button 
              id="buy" 
              className="btn text-lg px-8 py-4" 
              data-price="__KEEP__"
              onClick={checkoutEnabled ? handleBuyClick : undefined}
              disabled={!checkoutEnabled}
              aria-disabled={!checkoutEnabled}
              title={checkoutEnabled ? "Buy now" : "Coming soon"}
              data-testid="button-buy-primary"
            >
              Buy now
            </button>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <TrustBadges />
        </div>
      </section>

      {/* Alternating Sections */}
      {/* Light Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid-2-col">
            <div>
              <h2 className="text-header mb-6">
                Advanced Engineering
              </h2>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>Precision-crafted components for maximum durability and performance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>Innovative design that sets new industry standards for excellence</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>Cutting-edge technology integrated seamlessly into everyday use</span>
                </li>
              </ul>
              <Link 
                href="/learn-more"
                className="btn-buy btn" 
                data-price="__KEEP__" 
                data-testid="button-learn-more"
              >
                Learn More
              </Link>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Advanced engineering details" 
                className="rounded-lg shadow-lg w-full"
                data-testid="img-engineering"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Dark Section */}
      <section className="py-20 section-dark">
        <div className="container">
          <div className="grid-2-col">
            <div className="order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Modern workspace with premium products" 
                className="rounded-lg shadow-lg w-full"
                data-testid="img-workspace"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-header mb-6">
                Unmatched Quality
              </h2>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>Premium materials sourced from the world's finest suppliers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>Rigorous quality control ensures every product meets our high standards</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>Sustainable manufacturing practices that respect our environment</span>
                </li>
              </ul>
              <Link 
                href="/discover-quality"
                className="btn-buy btn" 
                data-price="__KEEP__" 
                data-testid="button-discover-quality"
              >
                Discover Quality
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-gray-50" data-testid="reviews-section">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-header mb-4">
              Loved by 5,000+ Customers
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See what our satisfied customers are saying about their experience with our premium product
            </p>
          </div>
          
          <div className="grid-2-col">
            {/* Left: Review Cards */}
            <div className="space-y-6">
              <div className="review-card" data-testid="review-card-1">
                <div className="flex mb-3">
                  <span className="text-yellow-500">★★★★★</span>
                </div>
                <p className="mb-4">"This product completely exceeded my expectations. The quality is outstanding and the customer service is top-notch. I've never been happier with a purchase!"</p>
                <div className="flex items-center">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=48&h=48" 
                    alt="Customer avatar" 
                    className="w-12 h-12 rounded-full mr-3"
                  />
                  <div>
                    <p className="font-semibold">Michael Chen</p>
                    <p className="text-sm text-gray-600">Verified Purchase</p>
                  </div>
                </div>
              </div>

              <div className="review-card" data-testid="review-card-2">
                <div className="flex mb-3">
                  <span className="text-yellow-500">★★★★★</span>
                </div>
                <p className="mb-4">"I was skeptical at first, but this product has transformed how I work. The build quality is incredible and it performs exactly as promised. Highly recommended!"</p>
                <div className="flex items-center">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108755-2616b332c3cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=48&h=48" 
                    alt="Customer avatar" 
                    className="w-12 h-12 rounded-full mr-3"
                  />
                  <div>
                    <p className="font-semibold">Sarah Johnson</p>
                    <p className="text-sm text-gray-600">Verified Purchase</p>
                  </div>
                </div>
              </div>

              <div className="review-card" data-testid="review-card-3">
                <div className="flex mb-3">
                  <span className="text-yellow-500">★★★★★</span>
                </div>
                <p className="mb-4">"Outstanding product with exceptional attention to detail. The shipping was fast and everything arrived perfectly packaged. Will definitely buy again!"</p>
                <div className="flex items-center">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=48&h=48" 
                    alt="Customer avatar" 
                    className="w-12 h-12 rounded-full mr-3"
                  />
                  <div>
                    <p className="font-semibold">David Wilson</p>
                    <p className="text-sm text-gray-600">Verified Purchase</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Product Image + Featured Review */}
            <div className="space-y-6">
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Premium product showcase" 
                className="rounded-lg shadow-lg w-full"
                data-testid="img-product-showcase"
              />
              
              <div className="review-card" data-testid="review-card-featured">
                <div className="flex items-center mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=56&h=56" 
                    alt="Featured customer avatar" 
                    className="w-14 h-14 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-semibold">Emma Rodriguez</p>
                    <div className="flex">
                      <span className="text-yellow-500">★★★★★</span>
                    </div>
                  </div>
                </div>
                <p className="mb-4">"Game-changer! This product has revolutionized my daily routine. The attention to detail and premium materials make it worth every penny."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20" data-testid="faq-section">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-header mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our premium product and services
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <details className="border-b border-gray-200" data-testid="faq-1">
              <summary className="py-5 cursor-pointer font-semibold flex justify-between items-center">
                <span>What makes this product different from others?</span>
                <span className="text-xl">+</span>
              </summary>
              <div className="pb-6 text-gray-600">
                Our product stands out through its premium materials, advanced engineering, and rigorous quality control. We've incorporated cutting-edge technology and sustainable manufacturing practices to create something truly exceptional that delivers superior performance and durability.
              </div>
            </details>

            <details className="border-b border-gray-200" data-testid="faq-2">
              <summary className="py-5 cursor-pointer font-semibold flex justify-between items-center">
                <span>How long does shipping take?</span>
                <span className="text-xl">+</span>
              </summary>
              <div className="pb-6 text-gray-600">
                We offer fast worldwide shipping with tracking. Standard delivery typically takes 3-7 business days within the continental US, and 7-14 business days for international orders. You'll receive a tracking number once your order ships.
              </div>
            </details>

            <details className="border-b border-gray-200" data-testid="faq-3">
              <summary className="py-5 cursor-pointer font-semibold flex justify-between items-center">
                <span>Is this product suitable for professional use?</span>
                <span className="text-xl">+</span>
              </summary>
              <div className="pb-6 text-gray-600">
                Absolutely! Our product is designed with professionals in mind and meets the demanding requirements of commercial use. Many businesses and professionals rely on our product for their daily operations due to its reliability and superior performance.
              </div>
            </details>

            <details className="border-b border-gray-200" data-testid="faq-4">
              <summary className="py-5 cursor-pointer font-semibold flex justify-between items-center">
                <span>What payment methods do you accept?</span>
                <span className="text-xl">+</span>
              </summary>
              <div className="pb-6 text-gray-600">
                We accept all major credit cards, PayPal, Apple Pay, and Google Pay through our secure Stripe payment processor. All transactions are protected with bank-level security and encryption.
              </div>
            </details>

            <details className="border-b border-gray-200" data-testid="faq-5">
              <summary className="py-5 cursor-pointer font-semibold flex justify-between items-center">
                <span>How can I track my order?</span>
                <span className="text-xl">+</span>
              </summary>
              <div className="pb-6 text-gray-600">
                Once your order ships, you'll receive an email with a tracking number and link. You can also visit our order tracking page and enter your order number to get real-time updates on your shipment's progress.
              </div>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
}
