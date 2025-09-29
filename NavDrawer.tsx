import { X } from "lucide-react";
import { Link } from "wouter";

interface NavDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function NavDrawer({ isOpen, onClose }: NavDrawerProps) {
  return (
    <>
      <div 
        className={`drawer-overlay ${isOpen ? 'active' : ''}`}
        onClick={onClose}
        data-testid="nav-overlay"
      />
      <nav 
        className={`drawer nav-drawer ${isOpen ? 'active' : ''}`}
        aria-hidden={!isOpen}
        data-testid="nav-drawer"
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-bold">Menu</h2>
            <button 
              onClick={onClose}
              className="p-2"
              data-testid="nav-close"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <ul className="space-y-4">
            <li>
              <Link href="/" className="block py-2 text-lg hover:text-yellow-500" onClick={onClose}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/features" className="block py-2 text-lg hover:text-yellow-500" onClick={onClose}>
                Features
              </Link>
            </li>
            <li>
              <Link href="/reviews" className="block py-2 text-lg hover:text-yellow-500" onClick={onClose}>
                Reviews
              </Link>
            </li>
            <li>
              <Link href="/faq" className="block py-2 text-lg hover:text-yellow-500" onClick={onClose}>
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/about" className="block py-2 text-lg hover:text-yellow-500" onClick={onClose}>
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="block py-2 text-lg hover:text-yellow-500" onClick={onClose}>
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/suivi" className="block py-2 text-lg hover:text-yellow-500" onClick={onClose}>
                Track Your Order
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
