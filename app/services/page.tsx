import { Button } from "@/components/ui/Button";
import { PhotoGrid } from "@/components/ui/PhotoGrid";
import { Photo } from "@/components/ui/Photo";

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Intro Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-7xl font-semibold tracking-tight text-gray-900 leading-[1.1]">
                Services
              </h1>
              <h2 className="text-3xl lg:text-4xl font-medium" style={{ color: 'var(--color-primary-600)' }}>
                Transportation that comes to your door
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Safe, on-time rides to medical appointments for people who need more than a regular car. Choose the kind of ride that fits your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="#wheelchair">Explore Wheelchair Rides</Button>
                <Button href="#ambulatory" variant="secondary">Ambulatory Rides</Button>
              </div>
            </div>
            <div className="h-full min-h-[150px] lg:min-h-[200px]">
              <Photo 
                src="/picture4.jpeg" 
                alt="Guideway vehicle at a clinic entrance" 
                ratio="aspect-[16/9]" 
                priority 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Wheelchair Section */}
      <section id="wheelchair" className="py-24 lg:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900">
                Wheelchair Transportation
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our wheelchair rides use vehicles with a ramp and secured seating, so you can travel safely in your own chair. Our trained staffs help you board, make sure you're secure before we leave, and help you off at your destination. Whether you're going to a doctor's office, a clinic or a hospital, we'll get you there and take care of the details along the way.
              </p>
              <Button href="#ready">Request a Wheelchair Ride</Button>
            </div>
            <div className="h-full min-h-[200px]">
              <PhotoGrid
                layout="stacked"
                images={[
                  { src: "/picture1.jpeg", alt: "Wheelchair lift", size: "large" },
                  { src: "/picture2.jpeg", alt: "Wheelchair securement system", size: "small" },
                  { src: "/picture3.jpeg", alt: "Accessible interior", size: "small" },
                  { src: "/picture4.jpeg", alt: "Comfortable transportation", size: "small" }
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Ambulatory Section (Mirrored) */}
      <section id="ambulatory" className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="h-full min-h-[200px]">
              <PhotoGrid
                layout="mirrored"
                images={[
                  { src: "/picture1.jpeg", alt: "Door-to-door assistance", size: "small" },
                  { src: "/picture2.jpeg", alt: "Comfortable seating", size: "small" },
                  { src: "/picture3.jpeg", alt: "Professional driver", size: "large" },
                  { src: "/picture4.jpeg", alt: "Safe transportation", size: "small" }
                ]}
              />
            </div>
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900">
                Ambulatory Transportation
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Ambulatory rides are for people who can walk but need a steady arm, a little extra time or just a dependable ride. We meet you at the door, help you into the vehicle and see you safely to your destination. If getting in and out of a regular car is hard, or you'd rather not travel alone, this service is for you.
              </p>
              <Button href="#ready">Request an Ambulatory Ride</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section id="ready" className="py-24 lg:py-32" style={{ backgroundColor: 'var(--color-primary-600)' }}>
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-8">
            Ready for your ride?
          </h2>
          <Button 
            href="/contact"
            variant="gold"
          >
            Request Transport
          </Button>
        </div>
      </section>
    </div>
  );
}
