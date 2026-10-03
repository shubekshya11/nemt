import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FaWheelchair, FaPersonWalkingWithCane, FaCalendarCheck, FaBuilding } from "react-icons/fa6";

export default function AboutPage() {
  const whoWeServe = [
    {
      icon: <FaWheelchair size={36} />,
      title: "Wheelchair Riders",
      description: "Ramp-equipped vehicles and trained drivers who help you board, ride and arrive safely.",
      image: "/picture1.jpeg"
    },
    {
      icon: <FaPersonWalkingWithCane size={36} />,
      title: "Seniors",
      description: "A steady arm and a dependable ride to the doctor, with no rush at the door.",
      image: "/picture2.jpeg"
    },
    {
      icon: <FaCalendarCheck size={36} />,
      title: "Recurring Appointments",
      description: "Dialysis, physical therapy and other regular visits, on a schedule you can count on.",
      image: "/picture3.jpeg"
    },
    {
      icon: <FaBuilding size={36} />,
      title: "Facilities and Caregivers",
      description: "Nursing homes, assisted living, clinics and families who book rides for the people they care for.",
      image: "/picture4.jpeg"
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-7xl font-semibold tracking-tight text-gray-900 leading-[1.1]">
                About Guideway
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Guideway Medical Transportation was started to help people in the Omaha area get to their medical appointments. We drive wheelchair and ambulatory riders in vehicles equipped with a ramp, and our trained drivers help riders at the door, on the ride and at their destination. We serve Omaha, La Vista, Bellevue, Papillion and the surrounding communities in Douglas and Sarpy Counties.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/contact" variant="gold">Book a Ride Online</Button>
                <a href="tel:4242981507" className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-gray-900 border-2 border-gray-300 transition-colors hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 rounded-md">
                  Call (424) 298-1507
                </a>
              </div>
            </div>
            <div className="w-full max-w-xl self-center overflow-hidden rounded-2xl lg:ml-auto">
  <Photo
    src="/picture1.jpeg"
    alt="Driver helping a rider"
    ratio="aspect-[16/9]"
    priority
  />
</div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            title="Why Choose Us?"
            intro="A missed appointment is often just a missed ride, and we built Guideway to fix that. Our vehicles have a wheelchair ramp, so riders who use a wheelchair don't have to transfer or struggle to get on board. Our drivers are trained to assist riders, and we take our time. You can book through our app or by calling us directly, whichever is easier for you or your family. We're a local company serving the Omaha metro, so when you call, you reach people who know the area you're traveling in."
          />
        </div>
      </section>

      {/* Who We Serve Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 mb-4">
              Who We Serve
            </h2>
            <div className="w-16 h-1 mx-auto mb-6" style={{ backgroundColor: 'var(--color-primary-600)' }}></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Guideway provides non-emergency medical transportation in Omaha and the surrounding communities. Our vehicles have wheelchair ramps, and our drivers are trained to help every rider get to their appointment comfortably.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whoWeServe.map((item, index) => (
              <Link
                key={index}
                href="/services"
                className="group relative aspect-[4/5] sm:aspect-[3/4] rounded-lg overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                style={{ outlineColor: 'var(--color-primary-600)' }}
              >
                <div className="absolute inset-0 bg-gray-200">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute top-4 left-4 text-white" aria-hidden="true">
                  {item.icon}
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-lg mb-1">
                    {item.title}
                  </h3>
                  <p className="text-white/90 text-sm">
                    {item.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
