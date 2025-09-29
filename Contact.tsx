import { useState } from "react";
import { TrustBadges } from "../components/TrustBadges";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        alert(data.message);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        alert(data.message || "Error sending message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      alert("Error sending message. Please try again.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="container text-center">
          <h1 className="text-header mb-6">Contact Us</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Have questions or need support? We're here to help. Reach out to our friendly team.
          </p>
          <p className="text-lg">
            <a 
              href="mailto:support@yourbrand.com" 
              className="text-yellow-600 hover:underline font-semibold"
              data-testid="link-email"
            >
              support@yourbrand.com
            </a>
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="review-card">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-2">
                      Name *
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      required 
                      className="w-full px-4 py-3 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      style={{ borderRadius: 'var(--radius-input)' }}
                      data-testid="input-name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2">
                      Email *
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      required 
                      className="w-full px-4 py-3 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      style={{ borderRadius: 'var(--radius-input)' }}
                      data-testid="input-email"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold mb-2">
                    Subject
                  </label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    style={{ borderRadius: 'var(--radius-input)' }}
                    data-testid="input-subject"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2">
                    Message *
                  </label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={6} 
                    value={formData.message}
                    onChange={handleChange}
                    required 
                    className="w-full px-4 py-3 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-500 resize-vertical"
                    style={{ borderRadius: 'var(--radius-input)' }}
                    data-testid="textarea-message"
                  />
                </div>
                
                <button 
                  type="submit" 
                  className="btn w-full"
                  data-testid="button-submit"
                >
                  Submit Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 section-dark">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-header mb-6">Get in Touch</h2>
            <p className="text-lg max-w-2xl mx-auto">
              We're here to help and answer any questions you might have
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            <div data-testid="contact-email">
              <div className="w-16 h-16 bg-yellow-500 text-black rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Email Support</h3>
              <p className="text-gray-300 mb-2">24/7 email support</p>
              <a 
                href="mailto:support@yourbrand.com" 
                className="text-yellow-500 hover:text-yellow-400"
              >
                support@yourbrand.com
              </a>
            </div>

            <div data-testid="contact-chat">
              <div className="w-16 h-16 bg-yellow-500 text-black rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Live Chat</h3>
              <p className="text-gray-300 mb-2">Real-time assistance</p>
              <button className="text-yellow-500 hover:text-yellow-400">
                Start Live Chat
              </button>
            </div>

            <div data-testid="contact-phone">
              <div className="w-16 h-16 bg-yellow-500 text-black rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Phone Support</h3>
              <p className="text-gray-300 mb-2">Mon-Fri, 9am-6pm EST</p>
              <a 
                href="tel:+1-800-123-4567" 
                className="text-yellow-500 hover:text-yellow-400"
              >
                +1 (800) 123-4567
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="py-20 bg-gray-50">
        <div className="container text-center">
          <h2 className="text-header mb-6">Before You Contact Us</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            You might find the answer you're looking for in our FAQ section
          </p>
          <a 
            href="/faq" 
            className="btn"
            data-testid="button-faq"
          >
            View FAQ
          </a>
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
