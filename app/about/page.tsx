import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-8">
              <p className="text-sm font-medium tracking-wide uppercase" style={{ color: 'var(--color-secondary-600)' }}>
                ABOUT US
              </p>
              <h1 className="text-5xl lg:text-7xl font-semibold tracking-tight text-gray-900 leading-[1.1]">
                SAFE JOURNEYS.<br />
                <span style={{ color: 'var(--color-primary-600)' }}>COMPASSIONATE CARE.</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl">
                Guideway Medical Transportation is dedicated to providing safe, reliable, and accessible non-emergency transportation for individuals with disabilities and mobility needs in the Omaha metropolitan area.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/picture2.jpeg"
                  alt="Guideway Medical Transportation team"
                  fill
                  sizes="(max-width: 768px) 100vw, 41vw"
                  className="object-cover"
                  priority
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 lg:py-32 bg-gray-50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900">
              OUR MISSION
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
              To provide dependable, accessible, and compassionate transportation services that ensure every individual can access the healthcare they need with dignity and comfort.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="relative aspect-[4/5]">
              <div className="absolute inset-0 bg-gray-200">
                <Image
                  src="/picture3.jpeg"
                  alt="Providing accessible transportation services"
                  fill
                  sizes="(max-width: 768px) 100vw, 41vw"
                  className="object-cover"
                  loading="eager"
                />
              </div>
            </div>
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 leading-[1.1]">
                OUR STORY
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Guideway Medical Transportation was founded with a simple belief: getting to medical appointments shouldn't be the hard part. We understand that individuals with disabilities and mobility needs face unique challenges when it comes to transportation.
                </p>
                <p>
                  Our team is committed to removing those barriers by providing safe, reliable, and accessible transportation services. Every journey we take is an opportunity to make someone's day a little easier.
                </p>
                <p>
                  We serve the Omaha metropolitan area, including Omaha, La Vista, Bellevue, Papillion, and surrounding communities in Douglas and Sarpy Counties. Our drivers are trained to provide compassionate care while ensuring safety and comfort.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 lg:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 mb-4">
              OUR VALUES
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Safety First",
                description: "Every vehicle is regularly maintained, and every driver is trained to prioritize passenger safety above all else."
              },
              {
                title: "Compassionate Care",
                description: "We treat every passenger with dignity, respect, and the care they deserve during their journey."
              },
              {
                title: "Reliability",
                description: "When we say we'll be there, we mean it. Punctuality and dependability are at the core of our service."
              }
            ].map((value, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'var(--color-primary-50)' }}>
                  <span className="text-2xl font-semibold" style={{ color: 'var(--color-primary-600)' }}>
                    {index + 1}
                  </span>
                </div>
                <h3 className="text-2xl font-medium text-gray-900">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 mb-6">
            READY TO EXPERIENCE<br />
            <span style={{ color: 'var(--color-primary-600)' }}>THE GUIDEWAY DIFFERENCE?</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today to learn more about our services or to schedule your first ride.
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
              Contact Us
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-gray-900 border-2 border-gray-300 transition-colors hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
