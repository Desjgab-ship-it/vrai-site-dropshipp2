import { Link } from "wouter";
import { ArrowLeft, CheckCircle, Cog, Shield, Award, Zap } from "lucide-react";

export default function LearnMore() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200">
        <div className="container py-4">
          <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors" data-testid="link-back-home">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-900 mb-6" data-testid="heading-main">
              Advanced Engineering Excellence
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Discover the cutting-edge technology, precision craftsmanship, and innovative design principles that make our product the industry standard for professional excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Engineering Process Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid-2-col gap-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8" data-testid="heading-process">
                Precision Engineering Process
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Cog className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Advanced Materials Research</h3>
                    <p className="text-gray-700">Our engineering team conducts extensive materials research to identify and source the highest-grade components that deliver exceptional durability and performance under demanding conditions.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Shield className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Rigorous Testing Protocols</h3>
                    <p className="text-gray-700">Every component undergoes comprehensive stress testing, durability assessments, and performance validation to ensure it meets our stringent quality standards before production.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Award className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Precision Manufacturing</h3>
                    <p className="text-gray-700">State-of-the-art manufacturing facilities utilize advanced automation and quality control systems to ensure consistent precision and eliminate defects throughout production.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <img 
                src="https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Advanced engineering and precision manufacturing" 
                className="rounded-lg shadow-lg w-full h-[500px] object-cover"
                data-testid="img-engineering-process"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6" data-testid="heading-specifications">
              Technical Specifications
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our product incorporates cutting-edge technology and premium materials to deliver unmatched performance and reliability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg" data-testid="spec-card-1">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Performance Standards</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Industry-leading efficiency ratings
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Temperature resistance: -40°C to 85°C
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Operational lifespan: 10+ years
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg" data-testid="spec-card-2">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Safety & Compliance</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  ISO 9001:2015 certified
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  CE marking compliance
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  RoHS environmental standards
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg" data-testid="spec-card-3">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Build Quality</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Premium-grade materials only
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Precision-machined components
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  Zero-defect manufacturing
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid-2-col gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Innovation laboratory and advanced technology research" 
                className="rounded-lg shadow-lg w-full h-[400px] object-cover"
                data-testid="img-innovation"
              />
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-gray-900 mb-6" data-testid="heading-innovation">
                Breakthrough Innovation
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Our dedicated research and development team continuously pushes the boundaries of what's possible, incorporating the latest technological advances to deliver solutions that exceed industry standards.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-800">Patent-pending technology integration</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-800">Advanced materials science applications</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-800">Smart engineering design principles</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-800">Sustainability-focused development</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6" data-testid="heading-cta">
            Experience Advanced Engineering
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Ready to elevate your professional standards with our precision-engineered solution?
          </p>
          <Link 
            href="/" 
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            data-testid="button-get-started"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}