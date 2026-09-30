"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will contact you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-8">
              <p className="text-sm font-medium tracking-wide uppercase" style={{ color: 'var(--color-secondary-600)' }}>
                CONTACT US
              </p>
              <h1 className="text-5xl lg:text-7xl font-semibold tracking-tight text-gray-900 leading-[1.1]">
                GET IN<br />
                <span style={{ color: 'var(--color-primary-600)' }}>TOUCH.</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl">
                Ready to schedule your ride or have questions about our services? We're here to help.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/picture1.jpeg"
                  alt="Contact Guideway Medical Transportation"
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

      {/* Contact Information Section */}
      <section className="py-24 lg:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <div className="space-y-12">
              <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900">
                CONTACT INFORMATION
              </h2>
              
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-medium text-gray-900">Phone</h3>
                  <a 
                    href="tel:4242981507" 
                    className="text-2xl text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    (424) 298-1507
                  </a>
                  <p className="text-gray-600">
                    Call us directly to schedule your ride or ask questions about our services.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-medium text-gray-900">Email</h3>
                  <a 
                    href="mailto:guidewaynemt@gmail.com" 
                    className="text-2xl text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    guidewaynemt@gmail.com
                  </a>
                  <p className="text-gray-600">
                    Send us an email and we'll get back to you as soon as possible.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-medium text-gray-900">Address</h3>
                  <address className="text-2xl text-gray-600 not-italic">
                    LaVista, Nebraska
                  </address>
                  <p className="text-gray-600">
                    Serving the Omaha metropolitan area and surrounding communities.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative aspect-[4/5]">
              <div className="absolute inset-0 bg-gray-200">
                <Image
                  src="/picture2.jpeg"
                  alt="Guideway Medical Transportation location"
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

      {/* Contact Form Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 mb-4">
              SEND US A MESSAGE
            </h2>
            <p className="text-xl text-gray-600">
              Fill out the form below and we'll get back to you soon.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-900">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 focus:outline focus:outline-2 focus:outline-offset-2 rounded-md"
                  style={{ outlineColor: 'var(--color-primary-600)' }}
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-900">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 focus:outline focus:outline-2 focus:outline-offset-2 rounded-md"
                  style={{ outlineColor: 'var(--color-primary-600)' }}
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium text-gray-900">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 focus:outline focus:outline-2 focus:outline-offset-2 rounded-md"
                style={{ outlineColor: 'var(--color-primary-600)' }}
                placeholder="(424) 298-1507"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-gray-900">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 focus:outline focus:outline-2 focus:outline-offset-2 rounded-md resize-none"
                style={{ outlineColor: 'var(--color-primary-600)' }}
                placeholder="Tell us about your transportation needs..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 text-base font-medium text-white transition-colors hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 rounded-md"
              style={{
                backgroundColor: 'var(--color-primary-600)',
                outlineColor: 'var(--color-primary-600)'
              }}
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Quick Contact Section */}
      <section className="py-24 lg:py-32 bg-gray-50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 mb-6">
            PREFER TO CALL?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Our team is available to answer your questions and help you schedule your ride.
          </p>
          <a
            href="tel:4242981507"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white transition-colors hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 rounded-md"
            style={{
              backgroundColor: 'var(--color-primary-600)',
              outlineColor: 'var(--color-primary-600)'
            }}
          >
            Call (424) 298-1507
          </a>
        </div>
      </section>
    </div>
  );
}
