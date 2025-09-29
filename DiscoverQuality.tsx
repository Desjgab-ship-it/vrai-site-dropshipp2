import { Link } from "wouter";
import { ArrowLeft, Star, Leaf, Users, Trophy, Heart, Globe } from "lucide-react";

export default function DiscoverQuality() {
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
      <section className="py-20 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-900 mb-6" data-testid="heading-main">
              Unmatched Quality Standards
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Experience the difference that premium materials, ethical sourcing, and rigorous quality control make in delivering a product that exceeds expectations and stands the test of time.
            </p>
          </div>
        </div>
      </section>

      {/* Quality Promise Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid-2-col gap-16">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Premium materials and quality craftsmanship" 
                className="rounded-lg shadow-lg w-full h-[500px] object-cover"
                data-testid="img-quality-craftsmanship"
              />
            </div>
            
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8" data-testid="heading-promise">
                Our Quality Promise
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Star className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium Material Selection</h3>
                    <p className="text-gray-700">We source only the finest materials from certified suppliers who meet our stringent quality and ethical standards. Every component is carefully selected for durability, performance, and aesthetic excellence.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Leaf className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Sustainable Practices</h3>
                    <p className="text-gray-700">Our commitment to quality extends to environmental responsibility. We employ sustainable manufacturing processes and work with suppliers who share our dedication to protecting our planet.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Master Craftsmanship</h3>
                    <p className="text-gray-700">Our skilled artisans and engineers bring decades of experience to every product. Their expertise ensures that each item meets our exacting standards for precision and quality.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6" data-testid="heading-certifications">
              Quality Certifications & Standards
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our commitment to quality is validated by industry-leading certifications and recognition from professional organizations worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center" data-testid="cert-card-1">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Trophy className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">ISO 9001:2015</h3>
              <p className="text-gray-600 text-sm">Quality Management System certification ensuring consistent quality standards</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center" data-testid="cert-card-2">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">ISO 14001</h3>
              <p className="text-gray-600 text-sm">Environmental Management certification demonstrating our sustainability commitment</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center" data-testid="cert-card-3">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Fair Trade</h3>
              <p className="text-gray-600 text-sm">Ethical sourcing certification ensuring fair labor practices throughout our supply chain</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center" data-testid="cert-card-4">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Global Standards</h3>
              <p className="text-gray-600 text-sm">Meeting international quality and safety standards across all global markets</p>
            </div>
          </div>
        </div>
      </section>

      {/* Supply Chain Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid-2-col gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6" data-testid="heading-supply-chain">
                Ethical Supply Chain
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                We maintain close relationships with our suppliers, ensuring they meet our high standards for quality, ethics, and environmental responsibility. Our supply chain is fully transparent and regularly audited.
              </p>
              
              <div className="space-y-6">
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Supplier Partnerships</h3>
                  <p className="text-gray-700">Long-term relationships with certified suppliers who share our commitment to excellence and ethical business practices.</p>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Regular Audits</h3>
                  <p className="text-gray-700">Comprehensive quality and compliance audits ensure continuous improvement and adherence to our standards.</p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Transparency</h3>
                  <p className="text-gray-700">Full traceability from raw materials to finished product, ensuring accountability at every step of the process.</p>
                </div>
              </div>
            </div>

            <div>
              <img 
                src="https://images.unsplash.com/photo-1586244439413-bc2288941dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Ethical supply chain and manufacturing process" 
                className="rounded-lg shadow-lg w-full h-[500px] object-cover"
                data-testid="img-supply-chain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quality Control Process */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6" data-testid="heading-quality-control">
              Quality Control Process
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our multi-stage quality control process ensures that every product meets our exacting standards before reaching our customers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center" data-testid="qc-step-1">
              <div className="w-20 h-20 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Incoming Inspection</h3>
              <p className="text-gray-700">All raw materials and components undergo thorough inspection upon arrival to ensure they meet our specifications.</p>
            </div>

            <div className="text-center" data-testid="qc-step-2">
              <div className="w-20 h-20 bg-green-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">In-Process Testing</h3>
              <p className="text-gray-700">Quality checkpoints throughout the manufacturing process verify that each stage meets our quality standards.</p>
            </div>

            <div className="text-center" data-testid="qc-step-3">
              <div className="w-20 h-20 bg-purple-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Final Verification</h3>
              <p className="text-gray-700">Comprehensive final inspection ensures every finished product meets our quality promise before shipping.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6" data-testid="heading-cta">
            Experience Uncompromising Quality
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of satisfied customers who trust our commitment to quality and excellence.
          </p>
          <Link 
            href="/" 
            className="inline-block bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            data-testid="button-discover-now"
          >
            Discover Our Quality
          </Link>
        </div>
      </section>
    </div>
  );
}