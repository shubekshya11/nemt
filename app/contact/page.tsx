"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { SectionHeading } from "@/components/ui/SectionHeading";

const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional().refine((val) => !val || /^\d{10}$/.test(val.replace(/\D/g, "")), {
    message: "Invalid phone number format"
  }),
  message: z.string().min(1, "Message is required")
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("There was an error submitting your message. Please try again.");
    }
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col">
        <section className="py-12 md:py-16 bg-white">
          <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 mb-6">
              Thank You!
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Your message has been sent successfully. We'll get back to you soon.
            </p>
            <Button href="/">Return Home</Button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-7xl font-semibold tracking-tight text-gray-900 leading-[1.1]">
                Contact Us
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Questions about a ride, coverage or service areas? Send us a note or call. We read every message.
              </p>
            </div>
            <div className="h-full min-h-[150px] lg:min-h-[200px]">
              <Photo 
                src="/picture1.jpeg" 
                alt="Friendly dispatch team" 
                ratio="aspect-[16/9]" 
                priority 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Get In Touch Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            title="Get In Touch"
            intro="Let's answer your queries"
            className="mb-12"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Contact Details */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'var(--color-primary-600)' }}>
                  <span className="text-white font-bold text-sm">Ph</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Phone number</h3>
                  <a href="tel:4242981507" className="text-xl text-gray-600 hover:text-gray-900 transition-colors">
                    (424) 298-1507
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'var(--color-primary-600)' }}>
                  <span className="text-white font-bold text-sm">@</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Email address</h3>
                  <a href="mailto:guidewaynemt@gmail.com" className="text-xl text-gray-600 hover:text-gray-900 transition-colors">
                    guidewaynemt@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'var(--color-primary-600)' }}>
                  <span className="text-white font-bold text-sm">Pin</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Location</h3>
                  <address className="text-xl text-gray-600 not-italic">
                    LaVista, Nebraska
                  </address>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <h3 className="text-2xl font-medium text-gray-900 mb-6">Send Message</h3>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium text-gray-900">
                      First Name *
                    </label>
                    <input
                      id="firstName"
                      {...register("firstName")}
                      className="w-full px-4 py-3 border border-gray-300 focus:outline focus:outline-2 focus:outline-offset-2 rounded-md"
                      style={{ outlineColor: 'var(--color-primary-600)' }}
                      placeholder="John"
                    />
                    {errors.firstName && (
                      <p className="text-sm text-red-600">{errors.firstName.message}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium text-gray-900">
                      Last Name *
                    </label>
                    <input
                      id="lastName"
                      {...register("lastName")}
                      className="w-full px-4 py-3 border border-gray-300 focus:outline focus:outline-2 focus:outline-offset-2 rounded-md"
                      style={{ outlineColor: 'var(--color-primary-600)' }}
                      placeholder="Doe"
                    />
                    {errors.lastName && (
                      <p className="text-sm text-red-600">{errors.lastName.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-900">
                      Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      {...register("email")}
                      className="w-full px-4 py-3 border border-gray-300 focus:outline focus:outline-2 focus:outline-offset-2 rounded-md"
                      style={{ outlineColor: 'var(--color-primary-600)' }}
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="text-sm text-red-600">{errors.email.message}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-gray-900">
                      Phone No.
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      {...register("phone")}
                      className="w-full px-4 py-3 border border-gray-300 focus:outline focus:outline-2 focus:outline-offset-2 rounded-md"
                      style={{ outlineColor: 'var(--color-primary-600)' }}
                      placeholder="(424) 298-1507"
                    />
                    {errors.phone && (
                      <p className="text-sm text-red-600">{errors.phone.message}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-900">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    {...register("message")}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 focus:outline focus:outline-2 focus:outline-offset-2 rounded-md resize-none"
                    style={{ outlineColor: 'var(--color-primary-600)' }}
                    placeholder="Tell us about your transportation needs..."
                  />
                  {errors.message && (
                    <p className="text-sm text-red-600">{errors.message.message}</p>
                  )}
                </div>

                <Button type="submit" disabled={isSubmitting} variant="gold">
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="h-[300px] md:h-[400px] bg-gray-100 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">🗺️</div>
              <p className="text-xl text-gray-600">Google Maps Placeholder</p>
              <p className="text-sm text-gray-500 mt-2">Ready for Google Maps embed</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
