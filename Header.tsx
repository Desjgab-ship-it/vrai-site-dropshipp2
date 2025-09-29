import { Menu, Search, User, ShoppingCart } from "lucide-react";
import { Link } from "wouter";
import { useCurrency, supportedCurrencies } from "../context/CurrencyContext";

interface HeaderProps {
  onOpenNav: () => void;
  onOpenCart: () => void;
}

export function Header({ onOpenNav, onOpenCart }: HeaderProps) {
  const { selectedCurrency, setSelectedCurrency } = useCurrency();

  const handleCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const currencyCode = e.target.value;
    const currency = supportedCurrencies.find(c => c.code === currencyCode);
    if (currency) {
      setSelectedCurrency(currency);
    }
  };

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-gray-100 text-center py-2 text-sm">
        Global shipping • Secure payments • Free tracking
      </div>

      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container flex items-center justify-between h-16">
          {/* Left: Hamburger (Mobile) */}
          <button 
            className="mobile-only p-2" 
            aria-controls="nav-drawer" 
            aria-expanded="false"
            onClick={onOpenNav}
            data-testid="button-nav-toggle"
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Center: Brand */}
          <div className="flex-1 flex justify-center lg:justify-start">
            <Link href="/">
              <h1 className="text-2xl font-bold" data-testid="brand-title">YourBrand</h1>
            </Link>
          </div>

          {/* Right: Controls */}
          <div className="flex items-center space-x-4">
            {/* Desktop Navigation */}
            <nav className="desktop-nav hidden lg:flex items-center space-x-6">
              <Link href="/" className="text-gray-700 hover:text-gray-900">Home</Link>
              <Link href="/faq" className="text-gray-700 hover:text-gray-900">FAQ</Link>
              <Link href="/about" className="text-gray-700 hover:text-gray-900">About Us</Link>
              <Link href="/contact" className="text-gray-700 hover:text-gray-900">Contact Us</Link>
              <Link href="/suivi" className="text-gray-700 hover:text-gray-900">Track Your Order</Link>
            </nav>

            {/* Controls */}
            <div className="flex items-center space-x-2">
              <select 
                className="text-sm border rounded px-2 py-1 bg-white" 
                data-testid="select-currency"
                value={selectedCurrency.code}
                onChange={handleCurrencyChange}
              >
                {supportedCurrencies.map(currency => (
                  <option key={currency.code} value={currency.code}>
                    {currency.code}
                  </option>
                ))}
              </select>
              <button className="p-2" data-testid="button-search">
                <Search className="w-5 h-5" />
              </button>
              <button className="p-2" data-testid="button-account">
                <User className="w-5 h-5" />
              </button>
              <button className="p-2" onClick={onOpenCart} data-testid="button-cart">
                <ShoppingCart className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
