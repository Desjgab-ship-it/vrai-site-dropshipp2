import { apiRequest } from "@/lib/queryClient";
import { useState, useEffect } from "react";
import { fetchRuntimeConfig } from "../lib/config";
import { useCurrency } from "../context/CurrencyContext";

export function StickyBottomBar() {
  const { selectedCurrency } = useCurrency();
  const [checkoutEnabled, setCheckoutEnabled] = useState(false);

  useEffect(() => {
    fetchRuntimeConfig().then(config => {
      setCheckoutEnabled(config.ENABLE_CHECKOUT);
    });
  }, []);

  const handleBuyClick = async () => {
    try {
      const response = await apiRequest("POST", "/api/create-checkout-session", {
        customerEmail: "", // Optional - Stripe will collect this
        customerName: "",   // Optional - Stripe will collect this
        currency: selectedCurrency.code // Pass selected currency
      });
      
      const data = await response.json();
      
      if (data.url) {
        // Redirect to Stripe Checkout
        window.location.href = data.url;
      }
    } catch (error) {
      console.error("Error creating checkout session:", error);
      alert("Unable to process payment. Please try again.");
    }
  };

  return (
    <div className="sticky-bottom">
      <div className="container flex items-center justify-between">
        <span className="text-sm text-gray-700">Limited time offer - Free worldwide shipping!</span>
        <button 
          id="buy2" 
          className="btn text-sm px-6 py-2" 
          data-price="__KEEP__"
          onClick={checkoutEnabled ? handleBuyClick : undefined}
          disabled={!checkoutEnabled}
          aria-disabled={!checkoutEnabled}
          title={checkoutEnabled ? "Buy now" : "Coming soon"}
          data-testid="button-buy-secondary"
        >
          Buy
        </button>
      </div>
    </div>
  );
}
