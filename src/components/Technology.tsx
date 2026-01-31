import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Cloud,
  Database,
  FileCode,
  Workflow,
  Shield,
  Smartphone,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const technologies = [
  {
    icon: Cloud,
    title: "Cloud Accounting",
    description: "Real-time cloud-based accounting systems for seamless financial management.",
  },
  {
    icon: Database,
    title: "ERP Solutions",
    description: "End-to-end ERP implementation for streamlined business operations.",
  },
  {
    icon: FileCode,
    title: "E-Invoicing",
    description: "FTA-compliant e-invoicing implementation and ongoing advisory.",
  },
  {
    icon: Workflow,
    title: "Process Automation",
    description: "Automated workflows reducing manual intervention and errors.",
  },
  {
    icon: Shield,
    title: "Secure Portals",
    description: "Role-based access with encrypted document storage and audit trails.",
  },
  {
    icon: Smartphone,
    title: "Mobile Access",
    description: "24/7 access to your documents and reports from any device.",
  },
];

const benefits = [
  "Zero paperwork - 100% digital documentation",
  "Real-time visibility into all engagements",
  "Automated deadline tracking and reminders",
  "Secure document exchange via portal",
  "Integration with major ERP systems",
  "FTA-compliant e-invoicing ready",
];

export default function Technology() {
  return (
    <section className="py-24 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4 bg-accent/10 py-2 px-2 border rounded-full border-transparent">
            Auditclue Technology
          </span>
          <h2 className="heading-section text-navy mb-6">
            Powered by Innovation
          </h2>
          <p className="text-muted-foreground text-lg">
            We leverage cutting-edge technology to transform traditional audit
            and compliance processes into streamlined, digital experiences.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Technologies Grid */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-5"
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-5 border border-border/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-teal-light flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                  <tech.icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-navy mb-2">{tech.title}</h3>
                <p className="text-sm text-muted-foreground">{tech.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-navy rounded-3xl p-8 md:p-10"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Why Go Digital with Auditclue?
            </h3>
            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-white/90">{benefit}</span>
                </motion.li>
              ))}
            </ul>
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-teal-dark text-white w-full btn-premium"
            >
              <Link to="/technology" className="flex items-center justify-center gap-2">
                Explore Our Technology
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
