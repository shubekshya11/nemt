import Link from "next/link";
import Image from "next/image";

export default function ServicesPage() {
  const services = [
    {
      number: "01",
      title: "Wheelchair Transportation",
      description: "Accessible transportation for wheelchair users with vehicles equipped with wheelchair lifts and securements.",
      details: [
        "Wheelchair-accessible vehicles with lifts",
        "Proper wheelchair securement systems",
        "Trained drivers in wheelchair assistance",
        "Comfortable and safe transport"
      ],
      image: "/6.jpeg"
    },
    {
      number: "02", 
      title: "Ambulatory Transportation",
      description: "Comfortable transportation for passengers who can walk but may need assistance getting to and from vehicles.",
      details: [
        "Comfortable seating arrangements",
        "Assistance with boarding and exiting",
        "Door-to-door service",
        "Timely pickup and drop-off"
      ],
      image: "/picture2.jpeg"
    },
    {
      number: "03",
      title: "Stretcher Transportation", 
      description: "Specialized transportation for passengers requiring stretcher support during medical transport.",
      details: [
        "Stretcher-equipped vehicles",
        "Medical-grade securement systems",
        "Trained medical transport staff",
        "Continuous monitoring during transport"
      ],
      image: "/picture3.jpeg"
    },
    {
      number: "04",
      title: "Medical Appointments",
      description: "Reliable transportation to and from healthcare appointments, treatments, and procedures.",
      details: [
        "Appointment scheduling coordination",
        "Wait-time accommodation",
        "Multiple stop capability",
        "Return trip scheduling"
      ],
      image: "/picture4.jpeg"
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-8">
              <p className="text-sm font-medium tracking-wide uppercase" style={{ color: 'var(--color-secondary-600)' }}>
                OUR SERVICES
              </p>
              <h1 className="text-5xl lg:text-7xl font-semibold tracking-tight text-gray-900 leading-[1.1]">
                TRANSPORTATION<br />
                <span style={{ color: 'var(--color-primary-600)' }}>FOR EVERY NEED.</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl">
                Comprehensive non-emergency medical transportation services designed for accessibility, comfort, and reliability.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/picture1.jpeg"
                  alt="Accessible medical transportation services"
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

      {/* Services Detail Section */}
      <section className="py-24 lg:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                <div className={`order-2 lg:order-${index % 2 === 0 ? '1' : '2'}`}>
                  <div className="space-y-6">
                    <div className="flex items-start gap-6">
                      <span className="text-5xl lg:text-6xl font-semibold" style={{ color: 'var(--color-primary-600)' }}>
                        {service.number}
                      </span>
                      <div className="flex-1">
                        <h2 className="text-3xl lg:text-4xl font-medium text-gray-900 mb-4">
                          {service.title}
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                          {service.description}
                        </p>
                        <ul className="space-y-3">
                          {service.details.map((detail, i) => (
                            <li key={i} className="flex items-start gap-3 text-gray-700">
                              <span className="w-1.5 h-1.5 rounded-full mt-2.5 flex-shrink-0" style={{ backgroundColor: 'var(--color-secondary-500)' }}></span>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`order-1 lg:order-${index % 2 === 0 ? '2' : '1'}`}>
                  <div className="relative aspect-[4/5]">
                    <div className="absolute inset-0 bg-gray-200">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 41vw"
                        className="object-cover"
                        loading="eager"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 mb-6">
            NEED TRANSPORTATION?<br />
            <span style={{ color: 'var(--color-primary-600)' }}>WE'RE HERE TO HELP.</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today to schedule your ride or learn more about our services.
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
