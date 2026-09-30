import Link from "next/link";
import Image from "next/image";

export default function ServiceAreaPage() {
  const cities = [
    "Omaha",
    "La Vista", 
    "Bellevue",
    "Papillion"
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-8">
              <p className="text-sm font-medium tracking-wide uppercase" style={{ color: 'var(--color-secondary-600)' }}>
                SERVICE AREA
              </p>
              <h1 className="text-5xl lg:text-7xl font-semibold tracking-tight text-gray-900 leading-[1.1]">
                WHERE WE<br />
                <span style={{ color: 'var(--color-primary-600)' }}>SERVE YOU.</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl">
                Proudly serving the Omaha metropolitan area and surrounding communities in Douglas and Sarpy Counties.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="relative aspect-square">
                <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-32 h-32 mx-auto rounded-full border-4 flex items-center justify-center"
                      style={{ borderColor: 'var(--color-primary-600)', backgroundColor: 'var(--color-primary-50)' }}>
                      <span className="text-4xl">📍</span>
                    </div>
                    <p className="text-lg text-gray-600">Omaha Metro Area</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cities Section */}
      <section className="py-24 lg:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900">
                OMAHA METRO AREA
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We provide comprehensive non-emergency medical transportation services throughout the Omaha metropolitan area, ensuring accessibility and reliability for all our passengers.
              </p>
              <div className="space-y-4">
                <h3 className="text-xl font-medium text-gray-900">Cities We Serve:</h3>
                <ul className="space-y-3">
                  {cities.map((city, index) => (
                    <li key={index} className="flex items-center gap-3 text-lg text-gray-700">
                      <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: 'var(--color-secondary-500)' }}></span>
                      {city}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="relative aspect-[4/5]">
              <div className="absolute inset-0 bg-gray-200">
                <Image
                  src="/picture4.jpeg"
                  alt="Omaha metropolitan area service coverage"
                  fill
                  sizes="(max-width: 768px) 100vw, 41vw"
                  className="object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Counties Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900">
              DOUGLAS & SARPY COUNTIES
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
              Serving surrounding communities across Douglas and Sarpy Counties with the same commitment to safety, accessibility, and compassionate care that defines our service.
            </p>
            <div className="pt-8">
              <p className="text-lg text-gray-600">
                From downtown Omaha to the suburbs of La Vista, Bellevue, and Papillion, we're dedicated to ensuring that every individual has access to reliable transportation for their medical appointments and healthcare needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Details */}
      <section className="py-24 lg:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-medium text-gray-900">Our Coverage Includes:</h3>
              <ul className="space-y-3">
                {[
                  "Medical appointments and procedures",
                  "Dialysis treatments",
                  "Physical therapy sessions",
                  "Hospital discharges",
                  "Specialist consultations",
                  "Rehabilitation centers",
                  "Assisted living facilities",
                  "Nursing homes"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full mt-2.5 flex-shrink-0" style={{ backgroundColor: 'var(--color-secondary-500)' }}></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-medium text-gray-900">Transportation To:</h3>
              <ul className="space-y-3">
                {[
                  "Hospitals and medical centers",
                  "Clinics and healthcare facilities",
                  "Specialist offices",
                  "Therapy centers",
                  "Diagnostic imaging centers",
                  "Laboratories",
                  "Pharmacies",
                  "Other healthcare providers"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full mt-2.5 flex-shrink-0" style={{ backgroundColor: 'var(--color-secondary-500)' }}></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 mb-6">
            IN OUR SERVICE AREA?<br />
            <span style={{ color: 'var(--color-primary-600)' }}>LET'S GET YOU THERE.</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us to schedule your ride or learn more about our transportation services in the Omaha metro area.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white transition-colors hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              style={{
                backgroundColor: 'var(--color-primary-600)',
                outlineColor: 'var(--color-primary-600)'
              }}
            >
              Request a Ride
            </Link>
            <a
              href="tel:4242981507"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-gray-900 border-2 border-gray-300 transition-colors hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Call Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
