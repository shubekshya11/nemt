export default function TermsPage() {
  return (
    <div className="flex flex-col">
      <section className="py-12 md:py-16 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 mb-8">
            Terms of Service
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600 mb-6">
              By accessing or using Guideway Medical Transportation services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Services</h2>
            <p className="text-gray-600 mb-6">
              Guideway provides non-emergency medical transportation services in the Omaha metropolitan area, including Omaha, La Vista, Bellevue, Papillion, and surrounding communities in Douglas and Sarpy Counties. Our services include wheelchair-accessible transportation and ambulatory transportation for medical appointments and other destinations.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Booking and Scheduling</h2>
            <p className="text-gray-600 mb-6">
              Transportation services must be scheduled in advance. We recommend booking at least 24-48 hours before your appointment. Same-day service may be available subject to availability. Cancellations should be made at least 2 hours before the scheduled pickup time to avoid cancellation fees.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Payment</h2>
            <p className="text-gray-600 mb-6">
              Payment for services is due at the time of service. We accept various payment methods. Rates will be communicated at the time of booking. Additional charges may apply for wait time, no-shows, or cancellations made less than 2 hours before the scheduled pickup.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Passenger Responsibilities</h2>
            <p className="text-gray-600 mb-6">
              Passengers must be ready at the scheduled pickup time. For wheelchair transportation, passengers must have their wheelchair in good working condition. Passengers are responsible for ensuring they have all necessary items for their appointment (medications, medical records, etc.).
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Safety and Conduct</h2>
            <p className="text-gray-600 mb-6">
              For the safety of all passengers and drivers, we reserve the right to refuse service to anyone who behaves in a threatening or disruptive manner. Smoking, vaping, and the consumption of alcohol or illegal substances are prohibited in our vehicles.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Limitation of Liability</h2>
            <p className="text-gray-600 mb-6">
              Guideway Medical Transportation shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use or inability to use our services. We are not responsible for delays caused by traffic, weather conditions, or circumstances beyond our control.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Changes to Terms</h2>
            <p className="text-gray-600 mb-6">
              We reserve the right to modify these terms at any time. Continued use of our services after changes constitutes acceptance of the modified terms.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">9. Contact Information</h2>
            <p className="text-gray-600 mb-6">
              For questions about these Terms of Service, please contact us at:
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
