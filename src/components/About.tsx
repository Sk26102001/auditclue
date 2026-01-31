import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Target, Eye, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To transform compliance from a burden into a strategic advantage through technology-driven, fully digital solutions that empower businesses across the UAE.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To be the most trusted digital-first audit and advisory firm in the region, setting new standards for efficiency, transparency, and client experience.",
  },
  {
    icon: Heart,
    title: "Our Values",
    description:
      "Integrity, Innovation, Excellence – We combine deep regulatory expertise with cutting-edge technology to deliver uncompromising quality in everything we do.",
  },
];

export default function About() {
  return (
    <section className="py-24 bg-navy text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent/10 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4 bg-accent/10 py-2 px-2 border rounded-full border-transparent">
              About Auditclue
            </span>
            <h2 className="heading-section mb-6">
              Your Trusted Digital
              <span className="text-accent"> Advisory Partner</span>
            </h2>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              Auditclue Global Advisory Services LLC is a fully digitalised
              audit, tax, and compliance advisory firm based in the UAE. We
              combine deep regulatory expertise with advanced accounting, ERP,
              and e-invoicing technologies to deliver time-efficient,
              regulator-aligned solutions.
            </p>
            <p className="text-white/70 mb-8 leading-relaxed">
              Our paperless approach means zero email chaos, full transparency
              through our client portal, and real-time tracking of every
              engagement. Whether you're a startup or an established enterprise,
              we scale our services to match your needs.
            </p>

            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-teal-dark text-white btn-premium"
            >
              <Link to="/about" className="flex items-center gap-2">
                Learn More About Us
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>

          {/* Right Content - Values */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex gap-5">
                  <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center shrink-0 group-hover:bg-accent/30 transition-colors">
                    <value.icon className="w-7 h-7 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-white">
                      {value.title}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
