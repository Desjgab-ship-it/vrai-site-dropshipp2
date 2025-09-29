import { X } from "lucide-react";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  return (
    <>
      <div 
        className={`drawer-overlay ${isOpen ? 'active' : ''}`}
        onClick={onClose}
        data-testid="cart-overlay"
      />
      <div 
        className={`drawer cart-drawer ${isOpen ? 'active' : ''}`}
        aria-hidden={!isOpen}
        data-testid="cart-drawer"
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-bold">Cart</h2>
            <button 
              onClick={onClose}
              className="p-2"
              data-testid="cart-close"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="text-center py-12">
            <p className="text-gray-500 mb-4" data-testid="cart-empty">Cart is empty</p>
            <div className="border rounded-lg p-4 mb-6">
              <h3 className="font-semibold mb-2">Coupons</h3>
              <input 
                type="text" 
                placeholder="Enter coupon code" 
                className="w-full border rounded px-3 py-2 text-sm"
                data-testid="input-coupon"
              />
              <button className="btn w-full mt-2 text-sm" data-testid="button-apply-coupon">
                Apply
              </button>
            </div>
            <div className="bg-gray-100 rounded-lg p-3">
              <div className="flex justify-between text-sm mb-1">
                <span>Free shipping at:</span>
                <span className="font-semibold">$50</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-yellow-400 h-2 rounded-full" style={{ width: '30%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
