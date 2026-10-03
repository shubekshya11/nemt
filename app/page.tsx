import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center py-12 md:py-16">
            {/* Left Content */}
            <div className="lg:col-span-5 space-y-6 lg:space-y-8 order-2 lg:order-1">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 leading-[1.1]">
                  YOUR JOURNEY.<br />
                  <span style={{ color: 'var(--color-primary-600)' }}>OUR CARE.</span>
                </h1>
                <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-md">
                  Reliable, accessible transportation for the moments that matter.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white transition-colors hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                  style={{
                    backgroundColor: 'var(--color-primary-600)',
                    outlineColor: 'var(--color-primary-600)'
                  }}
                >
                  Request Transportation
                </Link>
                <a
                  href="tel:4242981507"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-gray-900 border-2 border-gray-300 transition-colors hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  Call Us
                </a>
              </div>

              <div className="pt-4">
                <p className="text-xs font-medium tracking-wide uppercase" style={{ color: 'var(--color-secondary-600)' }}>
                  Serving the Omaha Metro Area
                </p>
              </div>
            </div>

            {/* Right Image - Editorial Crop */}
            <div className="lg:col-span-7 order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative aspect-[4/3] w-full max-w-lg lg:max-w-xl">
                <Image
                  src="/first.jpeg"
                  alt="Accessible medical transportation vehicle"
                  fill
                  sizes="(max-width: 768px) 100vw, 32rem"
                  className="object-cover"
                  priority
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Statement Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-gray-900 leading-[1.15]">
              GETTING THERE SHOULD<br />
              <span style={{ color: 'var(--color-primary-600)' }}>BE THE EASY PART.</span>
            </h2>
            <p className="text-base lg:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Guideway Medical Transportation provides dependable non-emergency transportation for individuals who need safe, accessible and comfortable journeys to medical appointments and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section - Editorial Layout */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left - Service List */}
            <div className="space-y-0">
              <p className="text-xs font-medium tracking-wide uppercase mb-8" style={{ color: 'var(--color-secondary-600)' }}>
                OUR SERVICES
              </p>

              {[
                {
                  number: "01",
                  title: "Wheelchair Transportation",
                  description: "Accessible transportation for wheelchair users."
                },
                {
                  number: "02",
                  title: "Ambulatory Transportation",
                  description: "Comfortable transportation for passengers who can walk."
                }
              ].map((service, index) => (
                <div key={index} className="border-t border-gray-200 py-5">
                  <div className="flex items-start gap-4">
                    <span className="text-2xl lg:text-3xl font-semibold" style={{ color: 'var(--color-primary-600)' }}>
                      {service.number}
                    </span>
                    <div className="flex-1">
                      <h3 className="text-lg lg:text-xl font-medium text-gray-900 mb-1">
                        {service.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right - Large Image */}
            <div className="relative aspect-[4/3] w-full max-w-lg mx-auto lg:mx-0 lg:sticky lg:top-24">
              <div className="absolute inset-0 bg-gray-200">
                <Image
                  src="/2.jpeg"
                  alt="Accessible transportation services"
                  fill
                  sizes="(max-width: 768px) 100vw, 28rem"
                  className="object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left - Image */}
            <div className="relative aspect-[4/3] w-full max-w-lg mx-auto lg:mx-0 lg:sticky lg:top-24">
              <div className="absolute inset-0 bg-gray-200">
                <Image
                  src="/3.jpeg"
                  alt="Professional driver providing transportation service"
                  fill
                  sizes="(max-width: 768px) 100vw, 28rem"
                  className="object-cover"
                  loading="eager"
                />
              </div>
            </div>

            {/* Right - Process List */}
            <div className="space-y-0">
              <p className="text-xs font-medium tracking-wide uppercase mb-8" style={{ color: 'var(--color-secondary-600)' }}>
                YOUR RIDE
              </p>

              {[
                {
                  number: "01",
                  title: "REQUEST",
                  description: "Tell us when and where you need transportation."
                },
                {
                  number: "02",
                  title: "CONFIRM",
                  description: "We'll confirm your trip and accessibility needs."
                },
                {
                  number: "03",
                  title: "PREPARE",
                  description: "We'll make sure everything is ready for your journey."
                },
                {
                  number: "04",
                  title: "RIDE",
                  description: "Your driver arrives and gets you there safely."
                }
              ].map((step, index) => (
                <div key={index} className="border-t border-gray-200 py-5">
                  <div className="flex items-start gap-4">
                    <span className="text-2xl lg:text-3xl font-semibold" style={{ color: 'var(--color-primary-600)' }}>
                      {step.number}
                    </span>
                    <div className="flex-1">
                      <h3 className="text-lg lg:text-xl font-medium text-gray-900 mb-1">
                        {step.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Accessibility Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Large Image */}
            <div className="relative aspect-[4/3] w-full max-w-lg mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-gray-200">
                <Image
                  src="/picture4.jpeg"
                  alt="Wheelchair user being assisted into accessible vehicle"
                  fill
                  sizes="(max-width: 768px) 100vw, 28rem"
                  className="object-cover"
                  loading="eager"
                />
              </div>
            </div>

            {/* Right - Content */}
            <div className="space-y-5">
              <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-gray-900 leading-[1.15]">
                DESIGNED AROUND<br />
                <span style={{ color: 'var(--color-primary-600)' }}>YOUR NEEDS.</span>
              </h2>
              <div className="space-y-4">
                <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                  Every passenger deserves a journey that feels safe, comfortable and respectful.
                </p>
                <p className="text-base text-gray-600 leading-relaxed">
                  Accessibility isn't an extra. It's part of the way we serve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left - Content */}
            <div className="space-y-8">
              <div className="space-y-3">
                <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-gray-900">
                  WHERE WE GO
                </h2>
                <p className="text-2xl lg:text-3xl font-semibold" style={{ color: 'var(--color-primary-600)' }}>
                  OMAHA METRO AREA
                </p>
              </div>

              <div className="space-y-4">
                <ul className="space-y-3">
                  {['Omaha', 'La Vista', 'Bellevue', 'Papillion'].map((city, index) => (
                    <li key={index} className="text-base text-gray-700 flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--color-secondary-500)' }}></span>
                      {city}
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-gray-600 pt-2">
                  Serving surrounding communities across Douglas and Sarpy Counties.
                </p>
              </div>
            </div>

            {/* Right - Map Visual */}
            <div className="relative aspect-square max-w-md mx-auto lg:mx-0 bg-gray-100">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-3">
                  <div className="w-24 h-24 mx-auto rounded-full border-4 flex items-center justify-center"
                    style={{ borderColor: 'var(--color-primary-600)', backgroundColor: 'var(--color-primary-50)' }}>
                    <span className="text-3xl">📍</span>
                  </div>
                  <p className="text-base text-gray-600">Omaha Metro Service Area</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Statement Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-gray-900 leading-[1.25]">
              SAFE TRANSPORTATION.<br />
              THOUGHTFUL SERVICE.<br />
              <span style={{ color: 'var(--color-primary-600)' }}>A JOURNEY WITH DIGNITY.</span>
            </h2>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Content */}
            <div className="space-y-5">
              <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-gray-900 leading-[1.15]">
                READY WHEN<br />
                <span style={{ color: 'var(--color-primary-600)' }}>YOU ARE.</span>
              </h2>
              <p className="text-lg text-gray-600">
                Need transportation for your next appointment?
              </p>
              <div className="space-y-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white transition-colors hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                  style={{
                    backgroundColor: 'var(--color-primary-600)',
                    outlineColor: 'var(--color-primary-600)'
                  }}
                >
                  REQUEST A RIDE
                </Link>
                <div className="space-y-1">
                  <a href="tel:4242981507" className="block text-base text-gray-900 hover:text-gray-600 transition-colors">
                    (424) 298-1507
                  </a>
                  <a href="mailto:guidewaynemt@gmail.com" className="block text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    guidewaynemt@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Right - Image */}
            <div className="relative aspect-[4/3] w-full max-w-lg mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-gray-200">
                <Image
                  src="/4.jpeg"
                  alt="Medical transportation vehicle ready for service"
                  fill
                  sizes="(max-width: 768px) 100vw, 28rem"
                  className="object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
