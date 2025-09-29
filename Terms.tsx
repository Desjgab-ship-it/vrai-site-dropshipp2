export default function Terms() {
  return (
    <div className="py-20">
      <div className="container max-w-4xl mx-auto">
        <h1 className="text-header mb-8">Terms of Service</h1>
        <div className="prose prose-lg max-w-none">
          <p className="mb-4">
            <strong>Last updated:</strong> {new Date().toLocaleDateString()}
          </p>
          
          <h2 className="text-2xl font-semibold mb-4 mt-8">Acceptance of Terms</h2>
          <p className="mb-4">
            By accessing and using our website and services, you accept and agree to be bound by the terms 
            and provisions of this agreement. If you do not agree to abide by the above, please do not use this service.
          </p>
          
          <h2 className="text-2xl font-semibold mb-4 mt-8">Use License</h2>
          <p className="mb-4">
            Permission is granted to temporarily download one copy of the materials on our website for personal, 
            non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Modify or copy the materials</li>
            <li>Use the materials for any commercial purpose or for any public display</li>
            <li>Attempt to reverse engineer any software contained on the website</li>
            <li>Remove any copyright or other proprietary notations from the materials</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mb-4 mt-8">Product Information</h2>
          <p className="mb-4">
            We strive to provide accurate product information, but we do not warrant that product descriptions, 
            pricing, or other content is accurate, complete, reliable, current, or error-free. Product 
            specifications are subject to change without notice.
          </p>
          
          <h2 className="text-2xl font-semibold mb-4 mt-8">Pricing and Payment</h2>
          <p className="mb-4">
            All prices are subject to change without notice. We reserve the right to modify or discontinue 
            products at any time. Payment processing is handled securely through our payment partners, and 
            all transactions are subject to their terms and conditions.
          </p>
          
          <h2 className="text-2xl font-semibold mb-4 mt-8">Shipping</h2>
          <p className="mb-4">
            Shipping times are estimates and not guaranteed. We are not responsible for delays caused by 
            shipping carriers or customs processes.
          </p>
          
          <h2 className="text-2xl font-semibold mb-4 mt-8">Disclaimer</h2>
          <p className="mb-4">
            The materials on our website are provided on an 'as is' basis. We make no warranties, expressed 
            or implied, and hereby disclaim and negate all other warranties including without limitation, 
            implied warranties or conditions of merchantability, fitness for a particular purpose, or 
            non-infringement of intellectual property or other violation of rights.
          </p>
          
          <h2 className="text-2xl font-semibold mb-4 mt-8">Limitations</h2>
          <p className="mb-4">
            In no event shall our company or its suppliers be liable for any damages (including, without 
            limitation, damages for loss of data or profit, or due to business interruption) arising out 
            of the use or inability to use the materials on our website, even if we or our authorized 
            representative has been notified orally or in writing of the possibility of such damage.
          </p>
          
          <h2 className="text-2xl font-semibold mb-4 mt-8">Governing Law</h2>
          <p className="mb-4">
            These terms and conditions are governed by and construed in accordance with the laws of the 
            jurisdiction in which our company is based, and you irrevocably submit to the exclusive 
            jurisdiction of the courts in that state or location.
          </p>
          
          <h2 className="text-2xl font-semibold mb-4 mt-8">Contact Information</h2>
          <p>
            Questions about the Terms of Service should be sent to us at:{' '}
            <a 
              href="mailto:legal@yourbrand.com" 
              className="text-yellow-600 hover:underline"
              data-testid="link-legal-email"
            >
              legal@yourbrand.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
