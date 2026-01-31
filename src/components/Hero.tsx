import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Shield,
  Zap,
  Globe,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { value: "500+", label: "Clients Served" },
  { value: "15+", label: "Years Experience" },
  { value: "100%", label: "Digital Process" },
  { value: "24/7", label: "Portal Access" },
];

const features = [
  "UAE VAT & Corporate Tax Experts",
  "Fully Digital & Paperless",
  "Real-time Client Portal",
  "FTA Compliant Solutions",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-background via-background to-muted">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-mesh"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-navy/5 rounded-full blur-3xl animate-float-delayed"></div>
      
      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="section-container relative z-10 py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium"
            >
              <Shield className="w-4 h-4" />
              UAE's Trusted Digital Advisory Firm
            </motion.div>

            {/* Headline */}
            <h1 className="heading-display text-navy">
              Transform Your
              <span className="block text-gradient-accent">Compliance Journey</span>
            </h1>

            {/* Description */}
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Auditclue delivers fully digitalised audit, tax, and compliance
              advisory services. Technology-driven, time-efficient, and
              regulator-aligned solutions for businesses across the UAE.
            </p>

            {/* Features List */}
            <ul className="grid grid-cols-2 gap-3">
              {features.map((feature, index) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-2 text-sm text-foreground"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                  {feature}
                </motion.li>
              ))}
            </ul>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-teal-dark text-white btn-premium px-8 h-14 text-base"
              >
                <Link to="/contact" className="flex items-center gap-2">
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-navy/20 text-navy hover:bg-navy hover:text-white h-14 px-8 text-base"
              >
                <Link to="/services">Explore Services</Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Main Card */}
            <div className="relative">
              {/* Background Card */}
              <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 to-navy/10 rounded-3xl blur-2xl"></div>
              
              {/* Feature Cards Grid */}
              <div className="relative grid grid-cols-2 gap-4">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="col-span-2 glass-card rounded-2xl p-6 space-y-4"
                >
                  <div className="flex items-center gap-4">
                    <div className="icon-container">
                      <Globe className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy">100% Digital Operations</h3>
                      <p className="text-sm text-muted-foreground">
                        Zero paperwork, full transparency
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5 }}
                  className="glass-card rounded-2xl p-5 space-y-3"
                >
                  <div className="icon-container">
                    <Shield className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-navy text-sm">FTA Compliant</h3>
                  <p className="text-xs text-muted-foreground">
                    Full regulatory alignment
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5 }}
                  className="glass-card rounded-2xl p-5 space-y-3"
                >
                  <div className="icon-container">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-navy text-sm">Fast Turnaround</h3>
                  <p className="text-xs text-muted-foreground">
                    Efficient digital processes
                  </p>
                </motion.div>
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, type: "spring" }}
                className="absolute -bottom-6 -right-6 bg-navy text-white px-6 py-3 rounded-2xl shadow-lg flex items-center gap-3"
              >
                <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Serving UAE Since 2010</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.1 }}
              className="stat-card"
            >
              <div className="text-3xl md:text-4xl font-bold text-accent mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
