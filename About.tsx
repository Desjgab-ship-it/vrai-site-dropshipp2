import { TrustBadges } from "../components/TrustBadges";

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="container text-center">
          <h1 className="text-header mb-6">About Us</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the story behind our commitment to quality and innovation
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=400" 
            alt="Modern office environment showcasing innovation" 
            className="rounded-lg shadow-lg w-full mb-12"
            data-testid="img-about-banner"
          />
          
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg">
              <h2 className="text-2xl font-semibold mb-6">Our Vision</h2>
              <p className="mb-6">
                At YourBrand, we're passionate about creating premium products that enhance the lives of our customers. Founded with a vision to combine cutting-edge technology with exceptional craftsmanship, we've spent years perfecting our approach to deliver products that exceed expectations.
              </p>
              <p className="mb-6">
                Our commitment to quality begins with sourcing the finest materials from trusted suppliers around the world. Every component is carefully selected and rigorously tested to ensure it meets our exacting standards. Our team of skilled engineers and designers work tirelessly to innovate and improve, pushing the boundaries of what's possible.
              </p>
              <p className="mb-6">
                We believe that great products should not only perform exceptionally but also contribute positively to our environment. That's why we've integrated sustainable manufacturing practices throughout our production process, ensuring that every product we create reflects our commitment to both quality and environmental responsibility.
              </p>
              <p>
                Today, we're proud to serve thousands of satisfied customers worldwide, and we continue to grow while maintaining the personal touch and attention to detail that has made us who we are. Thank you for being part of our journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 section-dark">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-header mb-6">Our Values</h2>
            <p className="text-lg max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center" data-testid="value-quality">
              <div className="w-16 h-16 bg-yellow-500 text-black rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality First</h3>
              <p className="text-gray-300">
                We never compromise on quality. Every product meets our rigorous standards before reaching our customers.
              </p>
            </div>

            <div className="text-center" data-testid="value-innovation">
              <div className="w-16 h-16 bg-yellow-500 text-black rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-gray-300">
                We continuously push boundaries to create products that set new standards in the industry.
              </p>
            </div>

            <div className="text-center" data-testid="value-sustainability">
              <div className="w-16 h-16 bg-yellow-500 text-black rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Sustainability</h3>
              <p className="text-gray-300">
                Environmental responsibility is at the core of our manufacturing and business practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-header mb-6">Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the passionate professionals behind our success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center" data-testid="team-member-1">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150" 
                alt="Team member" 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">John Smith</h3>
              <p className="text-gray-600 mb-2">Founder & CEO</p>
              <p className="text-sm text-gray-500">
                Visionary leader with 15+ years of industry experience
              </p>
            </div>

            <div className="text-center" data-testid="team-member-2">
              <img 
                src="https://images.unsplash.com/photo-1494790108755-2616b332c3cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150" 
                alt="Team member" 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Sarah Johnson</h3>
              <p className="text-gray-600 mb-2">Head of Design</p>
              <p className="text-sm text-gray-500">
                Award-winning designer focused on user experience
              </p>
            </div>

            <div className="text-center" data-testid="team-member-3">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150" 
                alt="Team member" 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Michael Chen</h3>
              <p className="text-gray-600 mb-2">Chief Technology Officer</p>
              <p className="text-sm text-gray-500">
                Technology innovator driving our engineering excellence
              </p>
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
