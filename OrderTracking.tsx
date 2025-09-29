import { useState } from "react";
import { TrustBadges } from "../components/TrustBadges";

export default function OrderTracking() {
  const [trackingNumber, setTrackingNumber] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual tracking functionality
    alert(`Tracking ${trackingNumber} - This is a placeholder feature`);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-md mx-auto">
            <div className="review-card text-center">
              <h1 className="text-header mb-6">Track Your Order</h1>
              <p className="text-gray-600 mb-6">
                Enter your tracking number to get real-time updates on your shipment
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Enter your tracking number" 
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  style={{ borderRadius: 'var(--radius-input)' }}
                  data-testid="input-tracking"
                  required
                />
                <button 
                  type="submit"
                  className="btn w-full"
                  data-testid="button-track"
                >
                  Track Package
                </button>
              </form>
              
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">
                  Need help? Contact our support team at{' '}
                  <a 
                    href="mailto:support@yourbrand.com" 
                    className="text-yellow-600 hover:underline"
                    data-testid="link-support-email"
                  >
                    support@yourbrand.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Track Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-header mb-6">How to Track Your Order</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Follow these simple steps to track your package
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center" data-testid="tracking-step-1">
              <div className="w-16 h-16 bg-yellow-500 text-black rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">Find Your Tracking Number</h3>
              <p className="text-gray-600">
                Check your email confirmation for the tracking number sent after your order ships.
              </p>
            </div>

            <div className="text-center" data-testid="tracking-step-2">
              <div className="w-16 h-16 bg-yellow-500 text-black rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">Enter Tracking Number</h3>
              <p className="text-gray-600">
                Input your tracking number in the field above and click "Track Package".
              </p>
            </div>

            <div className="text-center" data-testid="tracking-step-3">
              <div className="w-16 h-16 bg-yellow-500 text-black rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">Get Real-Time Updates</h3>
              <p className="text-gray-600">
                View detailed tracking information including location and estimated delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Shipping Information */}
      <section className="py-20 section-dark">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-header mb-6">Shipping Information</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="review-card" data-testid="shipping-domestic">
              <h3 className="text-xl font-semibold mb-4">Domestic Shipping</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Standard delivery: 3-7 business days</li>
                <li>• Express delivery: 1-3 business days</li>
                <li>• Free shipping on orders over $50</li>
                <li>• Real-time tracking included</li>
              </ul>
            </div>

            <div className="review-card" data-testid="shipping-international">
              <h3 className="text-xl font-semibold mb-4">International Shipping</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Standard delivery: 7-14 business days</li>
                <li>• Express delivery: 3-7 business days</li>
                <li>• Customs fees may apply</li>
                <li>• Full tracking to your door</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <TrustBadges />
        </div>
      </section>
    </div>
  );
}
