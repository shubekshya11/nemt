import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Photo } from "@/components/ui/Photo";

export default function AboutPage() {
  const whoWeServe = [
    { icon: "👨‍⚕️", title: "Patients", description: "Adults who need accessible rides to appointments." },
    { icon: "👨‍👩‍👧‍👦", title: "Families", description: "Relatives who want to know their loved one arrived safely." },
    { icon: "🏥", title: "Clinics", description: "Healthcare facilities that book rides for patients." },
    { icon: "🤝", title: "Care Providers", description: "Agencies and aides coordinating daily transport." }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-24 lg:py-32 bg-white">
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
            <div className="h-full min-h-[150px] lg:min-h-[200px]">
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
      <section className="py-24 lg:py-32 bg-gray-50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 mb-8">
            Why Choose Us?
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            A missed appointment is often just a missed ride, and we built Guideway to fix that. Our vehicles have a wheelchair ramp, so riders who use a wheelchair don't have to transfer or struggle to get on board. Our drivers are trained to assist riders, and we take our time. You can book through our app or by calling us directly, whichever is easier for you or your family. We're a local company serving the Omaha metro, so when you call, you reach people who know the area you're traveling in.
          </p>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section className="py-24 lg:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 mb-12">
            Who We Serve
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whoWeServe.map((item, index) => (
              <Card
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
