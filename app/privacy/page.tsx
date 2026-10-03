export default function PrivacyPage() {
  return (
    <div className="flex flex-col">
      <section className="py-12 md:py-16 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 mb-8">
            Privacy Policy
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Information We Collect</h2>
            <p className="text-gray-600 mb-6">
              Guideway Medical Transportation collects information you provide directly to us, including:
            </p>
            <ul className="text-gray-600 mb-6 list-disc pl-6">
              <li>Name and contact information (phone number, email address)</li>
              <li>Medical appointment details (location, time, healthcare provider)</li>
              <li>Transportation requirements (wheelchair accessibility, special needs)</li>
              <li>Payment information</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-600 mb-6">
              We use the information we collect to:
            </p>
            <ul className="text-gray-600 mb-6 list-disc pl-6">
              <li>Schedule and provide transportation services</li>
              <li>Communicate with you about your rides</li>
              <li>Process payments</li>
              <li>Improve our services</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Information Sharing</h2>
            <p className="text-gray-600 mb-6">
              We do not sell, rent, or trade your personal information. We may share your information only as necessary:
            </p>
            <ul className="text-gray-600 mb-6 list-disc pl-6">
              <li>With healthcare providers to coordinate your transportation</li>
              <li>With payment processors to process transactions</li>
              <li>When required by law or court order</li>
              <li>To protect our rights, property, or safety</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Data Security</h2>
            <p className="text-gray-600 mb-6">
              We implement reasonable security measures to protect your personal information from unauthorized access, alteration, or disclosure. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. HIPAA Compliance</h2>
            <p className="text-gray-600 mb-6">
              As a non-emergency medical transportation provider, we are committed to protecting your health information in accordance with applicable healthcare privacy laws. We only collect the minimum information necessary to provide our services and maintain appropriate safeguards.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Your Rights</h2>
            <p className="text-gray-600 mb-6">
              You have the right to:
            </p>
            <ul className="text-gray-600 mb-6 list-disc pl-6">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt out of non-essential communications</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Cookies and Tracking</h2>
            <p className="text-gray-600 mb-6">
              Our website may use cookies to enhance your experience. You can control cookie settings through your browser preferences. We do not use tracking technologies for advertising purposes.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Children's Privacy</h2>
            <p className="text-gray-600 mb-6">
              Our services are not intended for children under 18. We do not knowingly collect personal information from minors.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">9. Changes to This Policy</h2>
            <p className="text-gray-600 mb-6">
              We may update this privacy policy from time to time. We will notify you of significant changes by posting the new policy on our website and updating the "Last updated" date.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">10. Contact Information</h2>
            <p className="text-gray-600 mb-6">
              For questions about this privacy policy or your personal information, please contact us at:
            </p>
            <ul className="text-gray-600 mb-6 list-disc pl-6">
              <li>Phone: (424) 298-1507</li>
              <li>Email: guidewaynemt@gmail.com</li>
              <li>Location: LaVista, Nebraska</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
