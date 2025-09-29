import { TrustBadges } from "../components/TrustBadges";

export default function Reviews() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="container text-center">
          <h1 className="text-header mb-6">Customer Reviews</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Read what our 5,000+ satisfied customers have to say about their experience
          </p>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Review 1 */}
            <div className="review-card" data-testid="review-detailed-1">
              <div className="flex mb-3">
                <span className="text-yellow-500">★★★★★</span>
              </div>
              <h3 className="font-semibold mb-2">"Absolutely Amazing!"</h3>
              <p className="mb-4">"This product has completely transformed my workflow. The quality is outstanding, and the customer service team was incredibly helpful throughout the entire process."</p>
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=48&h=48" 
                  alt="Customer avatar" 
                  className="w-12 h-12 rounded-full mr-3"
                />
                <div>
                  <p className="font-semibold">Michael Chen</p>
                  <p className="text-sm text-gray-600">Software Engineer</p>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="review-card" data-testid="review-detailed-2">
              <div className="flex mb-3">
                <span className="text-yellow-500">★★★★★</span>
              </div>
              <h3 className="font-semibold mb-2">"Worth Every Penny"</h3>
              <p className="mb-4">"I was hesitant at first, but this purchase exceeded all my expectations. The build quality is exceptional, and it performs exactly as advertised. Highly recommend!"</p>
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1494790108755-2616b332c3cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=48&h=48" 
                  alt="Customer avatar" 
                  className="w-12 h-12 rounded-full mr-3"
                />
                <div>
                  <p className="font-semibold">Sarah Johnson</p>
                  <p className="text-sm text-gray-600">Marketing Director</p>
                </div>
              </div>
            </div>

            {/* Review 3 */}
            <div className="review-card" data-testid="review-detailed-3">
              <div className="flex mb-3">
                <span className="text-yellow-500">★★★★★</span>
              </div>
              <h3 className="font-semibold mb-2">"Professional Grade"</h3>
              <p className="mb-4">"As a professional, I need tools I can rely on. This product delivers consistently excellent performance and the attention to detail is remarkable."</p>
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=48&h=48" 
                  alt="Customer avatar" 
                  className="w-12 h-12 rounded-full mr-3"
                />
                <div>
                  <p className="font-semibold">David Wilson</p>
                  <p className="text-sm text-gray-600">Architect</p>
                </div>
              </div>
            </div>

            {/* Review 4 */}
            <div className="review-card" data-testid="review-detailed-4">
              <div className="flex mb-3">
                <span className="text-yellow-500">★★★★★</span>
              </div>
              <h3 className="font-semibold mb-2">"Game Changer"</h3>
              <p className="mb-4">"This has revolutionized my daily routine. The premium materials and innovative design make it a joy to use every day. Couldn't be happier!"</p>
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=48&h=48" 
                  alt="Customer avatar" 
                  className="w-12 h-12 rounded-full mr-3"
                />
                <div>
                  <p className="font-semibold">Emma Rodriguez</p>
                  <p className="text-sm text-gray-600">Graphic Designer</p>
                </div>
              </div>
            </div>

            {/* Review 5 */}
            <div className="review-card" data-testid="review-detailed-5">
              <div className="flex mb-3">
                <span className="text-yellow-500">★★★★★</span>
              </div>
              <h3 className="font-semibold mb-2">"Exceptional Service"</h3>
              <p className="mb-4">"Not only is the product fantastic, but the customer service experience was outstanding. Fast shipping, perfect packaging, and excellent communication."</p>
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=48&h=48" 
                  alt="Customer avatar" 
                  className="w-12 h-12 rounded-full mr-3"
                />
                <div>
                  <p className="font-semibold">James Parker</p>
                  <p className="text-sm text-gray-600">Business Owner</p>
                </div>
              </div>
            </div>

            {/* Review 6 */}
            <div className="review-card" data-testid="review-detailed-6">
              <div className="flex mb-3">
                <span className="text-yellow-500">★★★★★</span>
              </div>
              <h3 className="font-semibold mb-2">"Highly Recommended"</h3>
              <p className="mb-4">"I've recommended this to all my colleagues. The quality-to-price ratio is unbeatable, and the results speak for themselves. A must-have for professionals."</p>
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=48&h=48" 
                  alt="Customer avatar" 
                  className="w-12 h-12 rounded-full mr-3"
                />
                <div>
                  <p className="font-semibold">Lisa Chen</p>
                  <p className="text-sm text-gray-600">Consultant</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 section-dark">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-header mb-6">Trusted by Thousands</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div data-testid="stat-customers">
              <div className="text-4xl font-bold text-yellow-500 mb-2">5,000+</div>
              <p className="text-lg">Happy Customers</p>
            </div>
            <div data-testid="stat-rating">
              <div className="text-4xl font-bold text-yellow-500 mb-2">4.9★</div>
              <p className="text-lg">Average Rating</p>
            </div>
            <div data-testid="stat-countries">
              <div className="text-4xl font-bold text-yellow-500 mb-2">50+</div>
              <p className="text-lg">Countries Served</p>
            </div>
            <div data-testid="stat-reviews">
              <div className="text-4xl font-bold text-yellow-500 mb-2">98%</div>
              <p className="text-lg">Would Recommend</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container text-center">
          <h2 className="text-header mb-6">Join Our Happy Customers</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience the quality and service that thousands of customers love
          </p>
          <button className="btn-buy btn text-lg px-8 py-4" data-price="__KEEP__" data-testid="button-cta-reviews">
            Order Now
          </button>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16">
        <div className="container">
          <TrustBadges />
        </div>
      </section>
    </div>
  );
}
