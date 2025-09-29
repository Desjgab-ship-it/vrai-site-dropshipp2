import { useEffect, useState } from "react";
import { Link } from "wouter";
import { apiRequest } from "@/lib/queryClient";
import { CheckCircle } from "lucide-react";

export default function Success() {
  const [orderDetails, setOrderDetails] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const sessionId = urlParams.get('session_id');
    
    if (sessionId) {
      // Verify the payment and get order details
      apiRequest("POST", "/api/verify-payment", { sessionId })
        .then((res) => res.json())
        .then((data) => {
          setOrderDetails(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error verifying payment:', error);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full" aria-label="Loading"/>
      </div>
    );
  }

  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            
            <h1 className="text-3xl font-bold mb-4">Payment Successful!</h1>
            <p className="text-lg text-gray-600 mb-6">
              Thank you for your purchase. Your order has been confirmed.
            </p>
            
            {orderDetails && (
              <div className="bg-gray-50 p-6 rounded-lg mb-6 text-left">
                <h3 className="font-semibold mb-3">Order Details:</h3>
                <div className="space-y-2">
                  <p><span className="font-medium">Order ID:</span> {orderDetails.orderId}</p>
                  <p><span className="font-medium">Amount:</span> ${(orderDetails.amount / 100).toFixed(2)}</p>
                  <p><span className="font-medium">Email:</span> {orderDetails.customerEmail}</p>
                  <p><span className="font-medium">Product:</span> {orderDetails.productName}</p>
                </div>
              </div>
            )}
            
            <div className="space-y-4">
              <p className="text-gray-600">
                You will receive an email confirmation shortly with your order details and tracking information.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/" className="btn">
                  Continue Shopping
                </Link>
                <Link href="/suivi" className="btn bg-transparent border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black">
                  Track Your Order
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}