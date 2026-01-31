import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
  Zap,
  Lock,
  RefreshCw,
  BarChart3,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const technologies = [
  {
    icon: Cloud,
    title: "Cloud Accounting",
    description:
      "Real-time cloud-based accounting systems enabling seamless financial management from anywhere in the world.",
    features: [
      "Multi-currency support",
      "Real-time reporting",
      "Bank reconciliation",
      "Mobile access",
    ],
  },
  {
    icon: Database,
    title: "ERP Solutions",
    description:
      "End-to-end ERP implementation for streamlined business operations across all departments.",
    features: [
      "Needs assessment",
      "System selection",
      "Implementation",
      "Training & support",
    ],
  },
  {
    icon: FileCode,
    title: "E-Invoicing",
    description:
      "FTA-compliant e-invoicing implementation and ongoing advisory for UAE businesses.",
    features: [
      "System setup",
      "Integration support",
      "Compliance checks",
      "Ongoing monitoring",
    ],
  },
  {
    icon: Workflow,
    title: "Process Automation",
    description:
      "Automated workflows reducing manual intervention, errors, and processing time.",
    features: [
      "Workflow design",
      "Bot implementation",
      "Process optimization",
      "Performance tracking",
    ],
  },
  {
    icon: Shield,
    title: "Secure Portals",
    description:
      "Role-based access control with encrypted document storage and comprehensive audit trails.",
    features: [
      "Client portal",
      "Document management",
      "Secure sharing",
      "Access controls",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile Access",
    description:
      "24/7 access to your documents, reports, and engagement status from any device.",
    features: [
      "Mobile-responsive",
      "Push notifications",
      "Document viewing",
      "Status tracking",
    ],
  },
];

const benefits = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Digital processes that are 10x faster than traditional methods",
  },
  {
    icon: Lock,
    title: "Bank-Level Security",
    description: "Enterprise-grade encryption and security protocols",
  },
  {
    icon: RefreshCw,
    title: "Always Up-to-Date",
    description: "Real-time sync and automatic updates across all systems",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Insights",
    description: "Advanced analytics and reporting for better decisions",
  },
];

const TechnologyPage = () => {
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
                Auditclue Technology
              </span>
              <h1 className="heading-display mb-6">Powered by Innovation</h1>
              <p className="text-xl text-white/80 leading-relaxed">
                We leverage cutting-edge technology to transform traditional
                audit and compliance processes into streamlined, digital
                experiences.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-16 bg-muted/30">
          <div className="section-container">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-6"
                >
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="font-semibold text-navy mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Grid */}
        <section className="py-20">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="heading-section text-navy mb-6">
                Our Technology Stack
              </h2>
              <p className="text-muted-foreground text-lg">
                From cloud accounting to e-invoicing, we implement and support a
                wide range of technologies for your business.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 border border-border/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br from-accent to-teal-light text-white mb-5 group-hover:scale-110 transition-transform duration-300">
                    <tech.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-semibold text-navy mb-3 group-hover:text-accent transition-colors">
                    {tech.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                    {tech.description}
                  </p>
                  <ul className="space-y-2">
                    {tech.features.map((feature) => (
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

        {/* E-Invoicing Section */}
        <section className="py-20 bg-navy text-white">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
                  E-Invoicing Ready
                </span>
                <h2 className="heading-section mb-6">
                  Prepare for UAE's E-Invoicing Mandate
                </h2>
                <p className="text-white/80 mb-8 leading-relaxed">
                  The UAE is moving towards mandatory e-invoicing. Auditclue
                  helps you prepare with compliant systems, seamless integration,
                  and ongoing support to ensure you're ready when regulations
                  take effect.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    "FTA-compliant e-invoicing setup",
                    "ERP and accounting system integration",
                    "Staff training and documentation",
                    "Ongoing compliance monitoring",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                      <span className="text-white/90">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  size="lg"
                  className="bg-accent hover:bg-teal-dark text-white btn-premium"
                >
                  <Link to="/contact" className="flex items-center gap-2">
                    Learn More
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10"
              >
                <h3 className="text-xl font-semibold mb-6">
                  E-Invoicing Implementation Process
                </h3>
                <div className="space-y-6">
                  {[
                    { step: "01", title: "Assessment", desc: "Evaluate current systems and requirements" },
                    { step: "02", title: "Planning", desc: "Design compliant e-invoicing workflow" },
                    { step: "03", title: "Implementation", desc: "Configure and integrate systems" },
                    { step: "04", title: "Testing", desc: "Validate compliance and accuracy" },
                    { step: "05", title: "Go-Live", desc: "Launch with ongoing support" },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4">
                      <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center shrink-0">
                        <span className="text-accent font-bold">{item.step}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">{item.title}</h4>
                        <p className="text-sm text-white/70">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="heading-section text-navy mb-6">
                Ready to Go Digital?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Let's discuss how our technology solutions can transform your
                business operations and compliance processes.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-teal-dark text-white btn-premium px-8 h-14"
              >
                <Link to="/contact" className="flex items-center gap-2">
                  Schedule a Demo
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

export default TechnologyPage;
