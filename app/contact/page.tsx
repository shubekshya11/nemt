"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FaPhone, FaEnvelope, FaLocationDot } from "react-icons/fa6";
import dynamic from "next/dynamic";

const ServiceAreaMap = dynamic(() => import("@/components/ServiceAreaMap"), {
  ssr: false,
  loading: () => <div className="h-[350px] w-full animate-pulse rounded-2xl bg-gray-100" />,
});

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
      {/* Get In Touch Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            title="Contact Us"
            intro="Have questions about our services? We're here to help. Reach out to us and we'll respond as soon as we can."
            className="mb-12"
          />

          <div className="space-y-12">
            {/* Contact Details - Horizontal */}
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'var(--color-primary-600)' }}>
                  <FaPhone className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Phone</h3>
                  <a href="tel:4242981507" className="text-base text-gray-600 hover:text-gray-900 transition-colors">
                    (424) 298-1507
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'var(--color-primary-600)' }}>
                  <FaEnvelope className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Email</h3>
                  <a href="mailto:guidewaynemt@gmail.com" className="text-base text-gray-600 hover:text-gray-900 transition-colors">
                    guidewaynemt@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'var(--color-primary-600)' }}>
                  <FaLocationDot className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Location</h3>
                  <address className="text-base text-gray-600 not-italic">
                    LaVista, Nebraska
                  </address>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-medium text-gray-900 mb-6">Send us a message</h3>
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
                      placeholder="Your Name"
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
                      placeholder="Your Last Name"
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
                      placeholder="abc@example.com"
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
                      placeholder=""
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
      <section className="py-12 md:py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            title="Service Area"
            intro="We serve Omaha, La Vista, Bellevue, Papillion and the surrounding communities in Douglas and Sarpy Counties."
            className="mb-12"
          />
          <ServiceAreaMap />
        </div>
      </section>
    </div>
  );
}
