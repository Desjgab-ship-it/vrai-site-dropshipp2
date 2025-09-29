import { TrustBadges } from "../components/TrustBadges";

export default function Features() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="container text-center">
          <h1 className="text-header mb-6">Product Features</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the advanced features that make our product the perfect choice for professionals and enthusiasts alike
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="review-card" data-testid="feature-card-1">
              <div className="w-12 h-12 mb-4 text-yellow-500">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Premium Quality</h3>
              <p className="text-gray-600">Built with the finest materials and attention to detail for long-lasting performance.</p>
            </div>

            <div className="review-card" data-testid="feature-card-2">
              <div className="w-12 h-12 mb-4 text-yellow-500">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Fast Performance</h3>
              <p className="text-gray-600">Optimized for speed and efficiency to help you get more done in less time.</p>
            </div>

            <div className="review-card" data-testid="feature-card-3">
              <div className="w-12 h-12 mb-4 text-yellow-500">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Award Winning</h3>
              <p className="text-gray-600">Recognized by industry experts for innovation and excellence in design.</p>
            </div>

            <div className="review-card" data-testid="feature-card-4">
              <div className="w-12 h-12 mb-4 text-yellow-500">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">User Friendly</h3>
              <p className="text-gray-600">Intuitive design that's easy to use for beginners and powerful for experts.</p>
            </div>

            <div className="review-card" data-testid="feature-card-5">
              <div className="w-12 h-12 mb-4 text-yellow-500">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Reliable Support</h3>
              <p className="text-gray-600">24/7 customer support to help you make the most of your purchase.</p>
            </div>

            <div className="review-card" data-testid="feature-card-6">
              <div className="w-12 h-12 mb-4 text-yellow-500">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1L9 9l-8 3 8 3 3 8 3-8 8-3-8-3-3-8z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovative Design</h3>
              <p className="text-gray-600">Cutting-edge technology meets elegant design for an unmatched experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 section-dark">
        <div className="container text-center">
          <h2 className="text-header mb-6">Ready to Experience Excellence?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have made the smart choice
          </p>
          <button className="btn-buy btn text-lg px-8 py-4" data-price="__KEEP__" data-testid="button-cta-features">
            Get Started Today
          </button>
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
