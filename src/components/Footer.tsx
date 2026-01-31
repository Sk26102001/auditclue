import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Twitter,
  Facebook,
  LogIn,
  Users,
  ArrowRight,
} from "lucide-react";
import logo from "@/assets/logo.png";

const services = [
  "Audit & Assurance",
  "VAT Compliance",
  "Corporate Tax",
  "CFO Services",
  "Business Valuation",
  "ERP Implementation",
];

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Technology", href: "/technology" },
  { name: "Knowledge Hub", href: "/knowledge" },
  { name: "Contact Us", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      {/* CTA Section */}
      <div className="section-container py-16">
        <div className="bg-gradient-to-r from-accent to-teal-light rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRoLTJWMjRoLTR2MTBoLTJ2LTEyaDh2MTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
          <div className="relative z-10">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Compliance Journey?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Partner with Auditclue for fully digital, regulator-aligned solutions
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-accent px-8 py-4 rounded-xl font-semibold hover:bg-white/90 transition-all hover:gap-4"
            >
              Start Your Digital Journey
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="border-t border-white/10">
        <div className="section-container py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="space-y-6">
              <img src={logo} alt="Auditclue" className="h-20 w-auto brightness-150" />
              <p className="text-white/70 text-sm leading-relaxed">
                A fully digitalised audit, tax, and compliance advisory firm in
                the UAE, delivering technology-driven, time-efficient solutions.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-lg mb-6">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <Link
                      to="/services"
                      className="text-white/70 hover:text-accent transition-colors text-sm"
                    >
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-white/70 hover:text-accent transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-white/10 space-y-3">
                <a
                  href="#client-login"
                  className="flex items-center gap-2 text-white/70 hover:text-accent transition-colors text-sm"
                >
                  <Users className="w-4 h-4" />
                  Client Portal
                </a>
                <a
                  href="#employee-login"
                  className="flex items-center gap-2 text-white/70 hover:text-accent transition-colors text-sm"
                >
                  <LogIn className="w-4 h-4" />
                  Employee Portal
                </a>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-lg mb-6">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-white/70 text-sm">
                    Business Bay, Dubai, UAE
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-accent shrink-0" />
                  <a
                    href="tel:+971000000000"
                    className="text-white/70 hover:text-accent transition-colors text-sm"
                  >
                    +971 00 000 0000
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-accent shrink-0" />
                  <a
                    href="mailto:info@auditclue.com"
                    className="text-white/70 hover:text-accent transition-colors text-sm"
                  >
                    info@auditclue.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="section-container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Auditclue Global Advisory Services LLC. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-white/50 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/50 hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
