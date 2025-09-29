import { Star, CheckCircle, Shield, RotateCcw } from "lucide-react";

export function TrustBadges() {
  const badges = [
    {
      icon: Star,
      title: "Satisfied Customers",
      description: "Join thousands who love our premium product and exceptional service."
    },
    {
      icon: CheckCircle,
      title: "24/7 Customer Support",
      description: "Get help whenever you need it with our dedicated support team."
    },
    {
      icon: Shield,
      title: "Secure Payments (Stripe)",
      description: "Your payment information is protected with bank-level security."
    },
    {
      icon: RotateCcw,
      title: "Tracked Worldwide Shipping",
      description: "Fast, reliable delivery with real-time tracking to your doorstep."
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {badges.map((badge, index) => (
        <div key={index} className="trust-badge" data-testid={`trust-badge-${index}`}>
          <div className="w-12 h-12 mx-auto mb-4 text-yellow-500">
            <badge.icon className="w-full h-full" />
          </div>
          <h3 className="font-semibold mb-2">{badge.title}</h3>
          <p className="text-sm text-gray-600">{badge.description}</p>
        </div>
      ))}
    </div>
  );
}
