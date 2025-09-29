import { TrustBadges } from "../components/TrustBadges";

export default function FAQ() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="container text-center">
          <h1 className="text-header mb-6">Frequently Asked Questions</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our premium product and services
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <details className="border-b border-gray-200" data-testid="faq-detail-1">
              <summary className="py-5 cursor-pointer font-semibold flex justify-between items-center">
                <span>What makes this product different from others?</span>
                <span className="text-xl">+</span>
              </summary>
              <div className="pb-6 text-gray-600">
                Our product stands out through its premium materials, advanced engineering, and rigorous quality control. We've incorporated cutting-edge technology and sustainable manufacturing practices to create something truly exceptional that delivers superior performance and durability.
              </div>
            </details>

            <details className="border-b border-gray-200" data-testid="faq-detail-2">
              <summary className="py-5 cursor-pointer font-semibold flex justify-between items-center">
                <span>How long does shipping take?</span>
                <span className="text-xl">+</span>
              </summary>
              <div className="pb-6 text-gray-600">
                We offer fast worldwide shipping with tracking. Standard delivery typically takes 3-7 business days within the continental US, and 7-14 business days for international orders. You'll receive a tracking number once your order ships.
              </div>
            </details>

            <details className="border-b border-gray-200" data-testid="faq-detail-3">
              <summary className="py-5 cursor-pointer font-semibold flex justify-between items-center">
                <span>Is this product suitable for professional use?</span>
                <span className="text-xl">+</span>
              </summary>
              <div className="pb-6 text-gray-600">
                Absolutely! Our product is designed with professionals in mind and meets the demanding requirements of commercial use. Many businesses and professionals rely on our product for their daily operations due to its reliability and superior performance.
              </div>
            </details>

            <details className="border-b border-gray-200" data-testid="faq-detail-4">
              <summary className="py-5 cursor-pointer font-semibold flex justify-between items-center">
                <span>What payment methods do you accept?</span>
                <span className="text-xl">+</span>
              </summary>
              <div className="pb-6 text-gray-600">
                We accept all major credit cards, PayPal, Apple Pay, and Google Pay through our secure Stripe payment processor. All transactions are protected with bank-level security and encryption.
              </div>
            </details>

            <details className="border-b border-gray-200" data-testid="faq-detail-5">
              <summary className="py-5 cursor-pointer font-semibold flex justify-between items-center">
                <span>How can I track my order?</span>
                <span className="text-xl">+</span>
              </summary>
              <div className="pb-6 text-gray-600">
                Once your order ships, you'll receive an email with a tracking number and link. You can also visit our order tracking page and enter your order number to get real-time updates on your shipment's progress.
              </div>
            </details>


            <details className="border-b border-gray-200" data-testid="faq-detail-7">
              <summary className="py-5 cursor-pointer font-semibold flex justify-between items-center">
                <span>Do you offer technical support?</span>
                <span className="text-xl">+</span>
              </summary>
              <div className="pb-6 text-gray-600">
                Yes! Our technical support team is available 24/7 to help you get the most out of your purchase. You can reach us via email, phone, or live chat for immediate assistance.
              </div>
            </details>

            <details className="border-b border-gray-200" data-testid="faq-detail-8">
              <summary className="py-5 cursor-pointer font-semibold flex justify-between items-center">
                <span>Is there a warranty included?</span>
                <span className="text-xl">+</span>
              </summary>
              <div className="pb-6 text-gray-600">
                Yes, all our products come with comprehensive coverage against manufacturing defects. Please contact our support team if you experience any issues with your purchase.
              </div>
            </details>

            <details className="border-b border-gray-200" data-testid="faq-detail-9">
              <summary className="py-5 cursor-pointer font-semibold flex justify-between items-center">
                <span>Can I purchase in bulk for my business?</span>
                <span className="text-xl">+</span>
              </summary>
              <div className="pb-6 text-gray-600">
                Absolutely! We offer special pricing for bulk orders and business customers. Please contact our sales team to discuss volume discounts and customization options for your organization.
              </div>
            </details>

            <details className="border-b border-gray-200" data-testid="faq-detail-10">
              <summary className="py-5 cursor-pointer font-semibold flex justify-between items-center">
                <span>How do I contact customer support?</span>
                <span className="text-xl">+</span>
              </summary>
              <div className="pb-6 text-gray-600">
                You can reach our customer support team through multiple channels: email us at support@yourbrand.com, use our live chat feature, or call our toll-free number. We're here to help 24/7.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Still have questions section */}
      <section className="py-20 section-dark">
        <div className="container text-center">
          <h2 className="text-header mb-6">Still Have Questions?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Our customer support team is here to help you with any additional questions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:support@yourbrand.com" 
              className="btn"
              data-testid="button-email-support"
            >
              Email Support
            </a>
            <a 
              href="/contact" 
              className="btn bg-transparent border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black"
              data-testid="button-contact-us"
            >
              Contact Us
            </a>
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
