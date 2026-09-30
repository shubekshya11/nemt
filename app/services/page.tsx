import Link from "next/link";
import Image from "next/image";

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-4xl space-y-8">
            <p className="text-sm font-medium tracking-wide uppercase" style={{ color: 'var(--color-secondary-600)' }}>
              SERVICES
            </p>
            <h1 className="text-5xl lg:text-7xl font-semibold tracking-tight text-gray-900 leading-[1.1]">
              Transportation built around<br />
              <span style={{ color: 'var(--color-primary-600)' }}>your mobility needs.</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
              Whether you use a wheelchair or need additional assistance getting to your appointment, we provide comfortable, dependable non-emergency transportation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="#wheelchair"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white transition-colors hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                style={{
                  backgroundColor: 'var(--color-primary-600)',
                  outlineColor: 'var(--color-primary-600)'
                }}
              >
                Explore Wheelchair
              </Link>
              <Link
                href="#ambulatory"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-gray-900 border-2 border-gray-300 transition-colors hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Explore Ambulatory
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Wheelchair Transportation Section */}
      <section id="wheelchair" className="py-24 lg:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 leading-[1.1]">
                  Safe journeys.<br />
                  <span style={{ color: 'var(--color-primary-600)' }}>Accessible by design.</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Designed for passengers who need to remain in their wheelchair throughout the journey.
                </p>
              </div>

              <div className="space-y-8">
                <h3 className="text-xl font-medium text-gray-900">WHAT TO EXPECT</h3>
                <div className="space-y-4">
                  {[
                    "Wheelchair-accessible vehicle",
                    "Secure wheelchair positioning", 
                    "Comfortable, respectful journey",
                    "Safe arrival at your destination"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <span className="text-2xl font-semibold" style={{ color: 'var(--color-primary-600)' }}>
                        0{index + 1}
                      </span>
                      <p className="text-gray-700 pt-1">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-8">
                <h3 className="text-xl font-medium text-gray-900">WHO THIS SERVICE IS FOR</h3>
                <p className="text-gray-600 mb-4">Passengers who:</p>
                <ul className="space-y-3">
                  {[
                    "Use a manual wheelchair",
                    "Use a power wheelchair",
                    "Need to remain in their wheelchair",
                    "Need accessible transportation to appointments"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full mt-2.5 flex-shrink-0" style={{ backgroundColor: 'var(--color-secondary-500)' }}></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white transition-colors hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                style={{
                  backgroundColor: 'var(--color-primary-600)',
                  outlineColor: 'var(--color-primary-600)'
                }}
              >
                Request Transportation
              </Link>
            </div>

            <div className="relative aspect-[4/5]">
              <div className="absolute inset-0 bg-gray-200">
                <Image
                  src="/picture1.jpeg"
                  alt="Wheelchair-accessible transportation vehicle"
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

      {/* Ambulatory Transportation Section */}
      <section id="ambulatory" className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div className="relative aspect-[4/5]">
              <div className="absolute inset-0 bg-gray-200">
                <Image
                  src="/picture2.jpeg"
                  alt="Ambulatory transportation with passenger and driver"
                  fill
                  sizes="(max-width: 768px) 100vw, 41vw"
                  className="object-cover"
                  loading="eager"
                />
              </div>
            </div>

            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 leading-[1.1]">
                  Support when you need it.<br />
                  <span style={{ color: 'var(--color-primary-600)' }}>Independence when you can.</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  For passengers who can walk or transfer into a vehicle but may need additional assistance getting to and from their appointment.
                </p>
              </div>

              <div className="space-y-8">
                <h3 className="text-xl font-medium text-gray-900">WHAT TO EXPECT</h3>
                <div className="space-y-4">
                  {[
                    "Scheduled pickup",
                    "Assistance when needed",
                    "Comfortable transportation",
                    "Safe arrival at your destination"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <span className="text-2xl font-semibold" style={{ color: 'var(--color-primary-600)' }}>
                        0{index + 1}
                      </span>
                      <p className="text-gray-700 pt-1">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-8">
                <h3 className="text-xl font-medium text-gray-900">WHO THIS SERVICE IS FOR</h3>
                <p className="text-gray-600 mb-4">Passengers who:</p>
                <ul className="space-y-3">
                  {[
                    "Walk independently",
                    "Use a cane or walker",
                    "Can transfer into a vehicle",
                    "Need additional support getting to appointments"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full mt-2.5 flex-shrink-0" style={{ backgroundColor: 'var(--color-secondary-500)' }}></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white transition-colors hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                style={{
                  backgroundColor: 'var(--color-primary-600)',
                  outlineColor: 'var(--color-primary-600)'
                }}
              >
                Request Transportation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Not Sure Section */}
      <section className="py-24 lg:py-32 bg-gray-50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 mb-6">
            NOT SURE WHICH SERVICE YOU NEED?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Every passenger has different mobility needs. Tell us about your transportation needs and we'll help you determine which service is appropriate.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white transition-colors hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            style={{
              backgroundColor: 'var(--color-primary-600)',
              outlineColor: 'var(--color-primary-600)'
            }}
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="space-y-8">
              <p className="text-sm font-medium tracking-wide uppercase" style={{ color: 'var(--color-secondary-600)' }}>
                SERVICE AREA
              </p>
              <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900">
                SERVING THE OMAHA<br />
                <span style={{ color: 'var(--color-primary-600)' }}>METROPOLITAN AREA</span>
              </h2>
              <p className="text-xl text-gray-600">
                Omaha · La Vista · Bellevue · Papillion<br />
                and surrounding communities
              </p>
              <Link
                href="/service-area"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white transition-colors hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                style={{
                  backgroundColor: 'var(--color-primary-600)',
                  outlineColor: 'var(--color-primary-600)'
                }}
              >
                Check Our Service Area
              </Link>
            </div>

            <div className="relative aspect-square">
              <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-32 h-32 mx-auto rounded-full border-4 flex items-center justify-center"
                    style={{ borderColor: 'var(--color-primary-600)', backgroundColor: 'var(--color-primary-50)' }}>
                    <span className="text-4xl">📍</span>
                  </div>
                  <p className="text-lg text-gray-600">Omaha Metro Service Area</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 lg:py-32 bg-gray-50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 mb-6">
            READY FOR YOUR NEXT RIDE?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Reliable transportation for the journeys that matter.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white transition-colors hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            style={{
              backgroundColor: 'var(--color-primary-600)',
              outlineColor: 'var(--color-primary-600)'
            }}
          >
            Request Transportation
          </Link>
        </div>
      </section>
    </div>
  );
}
