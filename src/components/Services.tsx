import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FileCheck,
  Calculator,
  Receipt,
  Building2,
  ArrowLeftRight,
  LineChart,
  GitMerge,
  Scale,
  Search,
  Monitor,
  Users,
  Briefcase,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: FileCheck,
    title: "Audit & Assurance",
    description:
      "Independent audit services ensuring compliance and stakeholder confidence with digital documentation.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Calculator,
    title: "Accounting & Bookkeeping",
    description:
      "Complete finance outsourcing with real-time cloud-based accounting and reporting.",
    color: "from-accent to-teal-light",
  },
  {
    icon: Receipt,
    title: "UAE VAT Compliance",
    description:
      "End-to-end VAT registration, filing, and FTA-aligned compliance services.",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: Building2,
    title: "Corporate Tax",
    description:
      "UAE Corporate Tax advisory, registration, filing, and ongoing compliance support.",
    color: "from-navy to-navy-light",
  },
  {
    icon: ArrowLeftRight,
    title: "Transfer Pricing",
    description:
      "Documentation, benchmarking, and compliance for intercompany transactions.",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: LineChart,
    title: "CFO Services",
    description:
      "Virtual CFO support for strategic financial planning and decision-making.",
    color: "from-pink-500 to-pink-600",
  },
  {
    icon: GitMerge,
    title: "Mergers & Acquisitions",
    description:
      "Due diligence, deal structuring, and post-merger integration support.",
    color: "from-cyan-500 to-cyan-600",
  },
  {
    icon: Scale,
    title: "Business Valuation",
    description:
      "Independent valuation services for transactions, litigation, and reporting.",
    color: "from-amber-500 to-amber-600",
  },
  {
    icon: Search,
    title: "Forensic Audit",
    description:
      "Fraud investigation, dispute analysis, and litigation support services.",
    color: "from-red-500 to-red-600",
  },
  {
    icon: Monitor,
    title: "ERP Implementation",
    description:
      "Software selection, implementation, and ongoing support for accounting systems.",
    color: "from-indigo-500 to-indigo-600",
  },
  {
    icon: Users,
    title: "Finance Recruitment",
    description:
      "Specialized recruitment for accounting and finance professionals.",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    icon: Briefcase,
    title: "Business Setup",
    description:
      "Company formation, licensing, and regulatory compliance in the UAE.",
    color: "from-slate-500 to-slate-600",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Services() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4 bg-accent/10 py-2 px-2 border rounded-full border-transparent">
            Our Services
          </span>
          <h2 className="heading-section text-navy mb-6">
            Comprehensive Advisory Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            From audit and tax to technology implementation – we deliver
            end-to-end solutions for your business compliance needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="service-card group bg-white rounded-2xl p-6 border border-border/50"
            >
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br ${service.color} text-white mb-5 group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="heading-card text-navy mb-3 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <Button
            asChild
            size="lg"
            className="bg-navy hover:bg-navy-dark text-white btn-premium px-8 h-14"
          >
            <Link to="/services" className="flex items-center gap-2">
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
