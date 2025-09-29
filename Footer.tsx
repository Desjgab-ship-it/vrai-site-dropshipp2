import { Link } from "wouter";
import { useState } from "react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) return;
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        alert(data.message);
        setEmail("");
      } else {
        alert(data.message || "Error subscribing. Please try again.");
      }
    } catch (error) {
      console.error("Error subscribing to newsletter:", error);
      alert("Error subscribing. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <footer className="footer-dark py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Column 1: Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">YourBrand</h3>
            <p className="text-gray-400 text-sm">
              Creating premium products that enhance lives through innovative design and exceptional quality.
            </p>
          </div>
          
          {/* Column 2: Main Menu */}
          <div>
            <h4 className="font-semibold mb-4">MAIN MENU</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link href="/faq" className="text-gray-400 hover:text-white">FAQ</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact Us</Link></li>
              <li><Link href="/suivi" className="text-gray-400 hover:text-white">Track Your Order</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Shop</a></li>
            </ul>
          </div>
          
          {/* Column 3: Policies */}
          <div>
            <h4 className="font-semibold mb-4">OUR POLICIES</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-400 hover:text-white">Terms of Service</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Shipping Policy</a></li>
            </ul>
          </div>
          
          {/* Column 4: Subscribe */}
          <div>
            <h4 className="font-semibold mb-4">SUBSCRIBE</h4>
            <p className="text-gray-400 text-sm mb-4">Get updates on new products and exclusive offers</p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                style={{ borderRadius: 'var(--radius-input)' }}
                data-testid="input-newsletter"
              />
              <button 
                type="submit"
                disabled={isSubmitting}
                className="btn w-full text-sm" 
                data-testid="button-subscribe"
              >
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </button>
            </form>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400 text-sm">
            © 2024 YourBrand. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
