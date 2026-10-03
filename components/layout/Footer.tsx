import Link from "next/link";

const footerNavigation = {
  company: [
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold leading-6 text-gray-900">
              Guideway Medical Transportation
            </h3>
            <p className="text-sm leading-6 text-gray-600">
              Professional non-emergency medical transportation services
              committed to safe, reliable, and accessible transportation for
              individuals with mobility needs.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold leading-6 text-gray-900">
              Contact
            </h3>
            <ul role="list" className="mt-4 space-y-3">
              <li>
                <a href="mailto:guidewaynemt@gmail.com" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                  guidewaynemt@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:4242981507" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                  (424) 298-1507
                </a>
              </li>
              <li>
                <address className="text-sm leading-6 text-gray-600 not-italic">
                  LaVista, Nebraska
                </address>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold leading-6 text-gray-900">
              Company
            </h3>
            <ul role="list" className="mt-4 space-y-3">
              {footerNavigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-sm font-semibold leading-6 text-gray-900">
              Legal
            </h3>
            <ul role="list" className="mt-4 space-y-3">
              {footerNavigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between">
          <p className="text-sm leading-5 text-gray-500">
            &copy; {new Date().getFullYear()} Guideway Medical Transportation. All rights reserved.
          </p>
          <p className="mt-4 text-sm leading-5 text-gray-500 md:mt-0">
            Serving the Omaha Metro Area
          </p>
        </div>
      </div>
    </footer>
  );
}
