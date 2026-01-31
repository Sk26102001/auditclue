import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: FileCheck,
    title: "Audit & Assurance",
    description:
      "Independent audit services ensuring compliance and stakeholder confidence with digital documentation.",
    features: [
      "Statutory Audits",
      "Internal Audits",
      "Due Diligence Reviews",
      "Agreed-Upon Procedures",
    ],
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Calculator,
    title: "Accounting & Bookkeeping",
    description:
      "Complete finance outsourcing with real-time cloud-based accounting and reporting.",
    features: [
      "Monthly Bookkeeping",
      "Financial Statements",
      "Payroll Processing",
      "Accounts Reconciliation",
    ],
    color: "from-accent to-teal-light",
  },
  {
    icon: Receipt,
    title: "UAE VAT Compliance",
    description:
      "End-to-end VAT registration, filing, and FTA-aligned compliance services.",
    features: [
      "VAT Registration",
      "Return Filing",
      "VAT Health Checks",
      "FTA Representation",
    ],
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: Building2,
    title: "Corporate Tax",
    description:
      "UAE Corporate Tax advisory, registration, filing, and ongoing compliance support.",
    features: [
      "CT Registration",
      "Tax Planning",
      "Return Filing",
      "Tax Advisory",
    ],
    color: "from-navy to-navy-light",
  },
  {
    icon: ArrowLeftRight,
    title: "Transfer Pricing",
    description:
      "Documentation, benchmarking, and compliance for intercompany transactions.",
    features: [
      "TP Documentation",
      "Benchmarking Studies",
      "Policy Development",
      "Compliance Reviews",
    ],
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: LineChart,
    title: "CFO Services",
    description:
      "Virtual CFO support for strategic financial planning and decision-making.",
    features: [
      "Financial Strategy",
      "Cash Flow Management",
      "Budgeting & Forecasting",
      "Board Reporting",
    ],
    color: "from-pink-500 to-pink-600",
  },
  {
    icon: GitMerge,
    title: "Mergers & Acquisitions",
    description:
      "Due diligence, deal structuring, and post-merger integration support.",
    features: [
      "Buy-Side Advisory",
      "Sell-Side Advisory",
      "Due Diligence",
      "Valuation Support",
    ],
    color: "from-cyan-500 to-cyan-600",
  },
  {
    icon: Scale,
    title: "Business Valuation",
    description:
      "Independent valuation services for transactions, litigation, and reporting.",
    features: [
      "Business Valuations",
      "Intangible Assets",
      "Purchase Price Allocation",
      "Fairness Opinions",
    ],
    color: "from-amber-500 to-amber-600",
  },
  {
    icon: Search,
    title: "Forensic Audit",
    description:
      "Fraud investigation, dispute analysis, and litigation support services.",
    features: [
      "Fraud Investigation",
      "Asset Tracing",
      "Dispute Resolution",
      "Expert Witness",
    ],
    color: "from-red-500 to-red-600",
  },
  {
    icon: Monitor,
    title: "ERP Implementation",
    description:
      "Software selection, implementation, and ongoing support for accounting systems.",
    features: [
      "Software Selection",
      "Implementation",
      "Data Migration",
      "Training & Support",
    ],
    color: "from-indigo-500 to-indigo-600",
  },
  {
    icon: Users,
    title: "Finance Recruitment",
    description:
      "Specialized recruitment for accounting and finance professionals.",
    features: [
      "Executive Search",
      "Contract Staffing",
      "Permanent Placement",
      "Talent Assessment",
    ],
    color: "from-emerald-500 to-emerald-600",
  },
  {
    icon: Briefcase,
    title: "Business Setup",
    description:
      "Company formation, licensing, and regulatory compliance in the UAE.",
    features: [
      "Company Formation",
      "Trade Licensing",
      "Visa Processing",
      "PRO Services",
    ],
    color: "from-slate-500 to-slate-600",
  },
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-navy to-navy-dark text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          <div className="section-container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4 bg-accent/10 py-2 px-2 border rounded-full border-transparent">
                Our Services
              </span>
              <h1 className="heading-display mb-6">
                Comprehensive Advisory Solutions
              </h1>
              <p className="text-xl text-white/80 leading-relaxed">
                From audit and tax to technology implementation – we deliver
                end-to-end solutions for your business compliance needs with our
                fully digital approach.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="section-container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-2xl p-6 border border-border/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br ${service.color} text-white mb-5 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-semibold text-navy mb-3 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-foreground"
                      >
                        <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted/30">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="heading-section text-navy mb-6">
                Need a Custom Solution?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Our team of experts can tailor a comprehensive package that meets
                your specific business requirements.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-teal-dark text-white btn-premium px-8 h-14"
              >
                <Link to="/contact" className="flex items-center gap-2">
                  Get a Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
