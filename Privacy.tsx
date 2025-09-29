export default function Privacy() {
  return (
    <div className="py-20">
      <div className="container max-w-4xl mx-auto">
        <h1 className="text-header mb-8">Privacy Policy</h1>
        <div className="prose prose-lg max-w-none">
          <p className="mb-4">
            <strong>Last updated:</strong> {new Date().toLocaleDateString()}
          </p>
          
          <h2 className="text-2xl font-semibold mb-4 mt-8">Information We Collect</h2>
          <p className="mb-4">
            We collect information you provide directly to us, such as when you create an account, make a purchase, 
            subscribe to our newsletter, or contact us for support. This may include your name, email address, 
            phone number, mailing address, and payment information.
          </p>
          
          <h2 className="text-2xl font-semibold mb-4 mt-8">How We Use Your Information</h2>
          <p className="mb-4">
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Provide, maintain, and improve our services</li>
            <li>Process transactions and send related information</li>
            <li>Send promotional communications (with your consent)</li>
            <li>Respond to your comments and questions</li>
            <li>Monitor and analyze trends and usage</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mb-4 mt-8">Information Sharing</h2>
          <p className="mb-4">
            We do not sell, trade, or otherwise transfer your personal information to third parties without your 
            consent, except as described in this policy. We may share your information with:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Service providers who assist us in operating our website and conducting business</li>
            <li>Third parties when required by law or to protect our rights</li>
            <li>Business partners in connection with a merger, acquisition, or sale of assets</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mb-4 mt-8">Data Security</h2>
          <p className="mb-4">
            We implement appropriate security measures to protect your personal information against unauthorized 
            access, alteration, disclosure, or destruction. However, no method of transmission over the internet 
            is 100% secure.
          </p>
          
          <h2 className="text-2xl font-semibold mb-4 mt-8">Your Rights</h2>
          <p className="mb-4">
            You have the right to:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Access and update your personal information</li>
            <li>Request deletion of your personal information</li>
            <li>Opt out of promotional communications</li>
            <li>Request a copy of your personal information</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mb-4 mt-8">Cookies</h2>
          <p className="mb-4">
            We use cookies and similar technologies to enhance your browsing experience, analyze site traffic, 
            and understand where our visitors are coming from. You can control cookies through your browser settings.
          </p>
          
          <h2 className="text-2xl font-semibold mb-4 mt-8">Changes to This Policy</h2>
          <p className="mb-4">
            We may update this privacy policy from time to time. We will notify you of any significant changes 
            by posting the new policy on this page and updating the "Last updated" date.
          </p>
          
          <h2 className="text-2xl font-semibold mb-4 mt-8">Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:{' '}
            <a 
              href="mailto:privacy@yourbrand.com" 
              className="text-yellow-600 hover:underline"
              data-testid="link-privacy-email"
            >
              privacy@yourbrand.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
