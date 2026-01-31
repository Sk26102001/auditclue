// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
// import { motion } from "framer-motion";
// import {
//   Target,
//   Eye,
//   Heart,
//   Award,
//   Users,
//   Globe,
//   CheckCircle2,
// } from "lucide-react";

// const values = [
//   {
//     icon: Target,
//     title: "Integrity",
//     description:
//       "We uphold the highest ethical standards in every engagement, ensuring transparency and trust.",
//   },
//   {
//     icon: Eye,
//     title: "Innovation",
//     description:
//       "We continuously adopt cutting-edge technology to deliver efficient, modern solutions.",
//   },
//   {
//     icon: Heart,
//     title: "Excellence",
//     description:
//       "We strive for exceptional quality in every deliverable, exceeding client expectations.",
//   },
//   {
//     icon: Award,
//     title: "Accountability",
//     description:
//       "We take ownership of our work and stand behind our recommendations and results.",
//   },
// ];

// const stats = [
//   { value: "500+", label: "Clients Served" },
//   { value: "15+", label: "Years Experience" },
//   { value: "50+", label: "Team Members" },
//   { value: "12", label: "Service Lines" },
// ];

// const AboutPage = () => {
//   return (
//     <div className="min-h-screen">
//       <Header />
//       <main>
//         {/* Hero Section */}
//         <section className="pt-32 pb-20 bg-gradient-to-br from-navy to-navy-dark text-white relative overflow-hidden">
//           <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]"></div>
//           <div className="section-container relative z-10">
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="max-w-3xl"
//             >
//               <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
//                 About Us
//               </span>
//               <h1 className="heading-display mb-6">
//                 Your Trusted Digital Advisory Partner
//               </h1>
//               <p className="text-xl text-white/80 leading-relaxed">
//                 Auditclue Global Advisory Services LLC is a fully digitalised
//                 audit, tax, and compliance advisory firm in the UAE, delivering
//                 technology-driven, time-efficient, and regulator-aligned
//                 solutions.
//               </p>
//             </motion.div>
//           </div>
//         </section>

//         {/* Mission & Vision */}
//         <section className="py-20">
//           <div className="section-container">
//             <div className="grid md:grid-cols-2 gap-12">
//               <motion.div
//                 initial={{ opacity: 0, x: -30 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 className="bg-accent/5 rounded-3xl p-8 md:p-10 border border-accent/20"
//               >
//                 <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center mb-6">
//                   <Target className="w-7 h-7 text-accent" />
//                 </div>
//                 <h2 className="text-2xl font-bold text-navy mb-4">Our Mission</h2>
//                 <p className="text-muted-foreground leading-relaxed">
//                   To transform compliance from a burden into a strategic advantage
//                   through technology-driven, fully digital solutions that empower
//                   businesses across the UAE. We are committed to delivering
//                   exceptional value while maintaining the highest standards of
//                   professional excellence.
//                 </p>
//               </motion.div>

//               <motion.div
//                 initial={{ opacity: 0, x: 30 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 className="bg-navy rounded-3xl p-8 md:p-10 text-white"
//               >
//                 <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
//                   <Eye className="w-7 h-7 text-accent" />
//                 </div>
//                 <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
//                 <p className="text-white/80 leading-relaxed">
//                   To be the most trusted digital-first audit and advisory firm in
//                   the region, setting new standards for efficiency, transparency,
//                   and client experience. We envision a future where compliance is
//                   seamless, accessible, and empowers business growth.
//                 </p>
//               </motion.div>
//             </div>
//           </div>
//         </section>

//         {/* Stats */}
//         <section className="py-16 bg-muted/30">
//           <div className="section-container">
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//               {stats.map((stat, index) => (
//                 <motion.div
//                   key={stat.label}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: index * 0.1 }}
//                   className="text-center"
//                 >
//                   <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
//                     {stat.value}
//                   </div>
//                   <div className="text-muted-foreground">{stat.label}</div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Values */}
//         <section className="py-20">
//           <div className="section-container">
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="text-center max-w-3xl mx-auto mb-16"
//             >
//               <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
//                 Our Values
//               </span>
//               <h2 className="heading-section text-navy mb-6">
//                 Principles That Guide Us
//               </h2>
//             </motion.div>

//             <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
//               {values.map((value, index) => (
//                 <motion.div
//                   key={value.title}
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: index * 0.1 }}
//                   className="text-center"
//                 >
//                   <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-teal-light flex items-center justify-center mx-auto mb-5">
//                     <value.icon className="w-8 h-8 text-white" />
//                   </div>
//                   <h3 className="text-xl font-semibold text-navy mb-3">
//                     {value.title}
//                   </h3>
//                   <p className="text-muted-foreground text-sm">
//                     {value.description}
//                   </p>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Why Choose Us */}
//         <section className="py-20 bg-gradient-to-b from-background to-muted/30">
//           <div className="section-container">
//             <div className="grid lg:grid-cols-2 gap-16 items-center">
//               <motion.div
//                 initial={{ opacity: 0, x: -30 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//               >
//                 <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
//                   Why Auditclue
//                 </span>
//                 <h2 className="heading-section text-navy mb-6">
//                   A Modern Approach to Professional Services
//                 </h2>
//                 <p className="text-muted-foreground mb-8 leading-relaxed">
//                   We combine deep regulatory expertise with advanced accounting,
//                   ERP, and e-invoicing technologies. Our paperless approach
//                   ensures zero email chaos, full transparency, and real-time
//                   tracking of every engagement.
//                 </p>
//                 <ul className="space-y-4">
//                   {[
//                     "100% digital documentation and workflows",
//                     "Real-time client portal access",
//                     "FTA-compliant processes and systems",
//                     "Dedicated team for each engagement",
//                     "Transparent pricing and billing",
//                   ].map((item) => (
//                     <li key={item} className="flex items-center gap-3">
//                       <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
//                       <span className="text-foreground">{item}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </motion.div>

//               <motion.div
//                 initial={{ opacity: 0, x: 30 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 className="grid grid-cols-2 gap-6"
//               >
//                 <div className="bg-white rounded-2xl p-6 border border-border/50 hover:shadow-lg transition-shadow">
//                   <Users className="w-10 h-10 text-accent mb-4" />
//                   <h3 className="font-semibold text-navy mb-2">Expert Team</h3>
//                   <p className="text-sm text-muted-foreground">
//                     Qualified professionals with deep regulatory knowledge
//                   </p>
//                 </div>
//                 <div className="bg-white rounded-2xl p-6 border border-border/50 hover:shadow-lg transition-shadow mt-8">
//                   <Globe className="w-10 h-10 text-accent mb-4" />
//                   <h3 className="font-semibold text-navy mb-2">Global Standards</h3>
//                   <p className="text-sm text-muted-foreground">
//                     International best practices, local expertise
//                   </p>
//                 </div>
//                 <div className="bg-white rounded-2xl p-6 border border-border/50 hover:shadow-lg transition-shadow">
//                   <Award className="w-10 h-10 text-accent mb-4" />
//                   <h3 className="font-semibold text-navy mb-2">Certified</h3>
//                   <p className="text-sm text-muted-foreground">
//                     Accredited by leading professional bodies
//                   </p>
//                 </div>
//                 <div className="bg-white rounded-2xl p-6 border border-border/50 hover:shadow-lg transition-shadow mt-8">
//                   <Heart className="w-10 h-10 text-accent mb-4" />
//                   <h3 className="font-semibold text-navy mb-2">Client First</h3>
//                   <p className="text-sm text-muted-foreground">
//                     Dedicated support and personalized service
//                   </p>
//                 </div>
//               </motion.div>
//             </div>
//           </div>
//         </section>
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default AboutPage;








import React, { useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import {
  Target,
  Eye,
  Heart,
  Award,
  Users,
  Globe,
  CheckCircle2,
} from "lucide-react";

// --- Sub-component for the Counting Animation ---
const AnimatedCounter = ({ value }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  // Logic to separate numbers from symbols (e.g., "500+" becomes 500 and "+")
  const numericValue = parseInt(value.replace(/[^0-9]/g, ""), 10);
  const suffix = value.replace(/[0-9]/g, "");

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, numericValue, {
        duration: 2,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [isInView, count, numericValue]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
};

// --- Data Constants ---
const values = [
  {
    icon: Target,
    title: "Integrity",
    description:
      "We uphold the highest ethical standards in every engagement, ensuring transparency and trust.",
  },
  {
    icon: Eye,
    title: "Innovation",
    description:
      "We continuously adopt cutting-edge technology to deliver efficient, modern solutions.",
  },
  {
    icon: Heart,
    title: "Excellence",
    description:
      "We strive for exceptional quality in every deliverable, exceeding client expectations.",
  },
  {
    icon: Award,
    title: "Accountability",
    description:
      "We take ownership of our work and stand behind our recommendations and results.",
  },
];

const stats = [
  { value: "500+", label: "Clients Served" },
  { value: "15+", label: "Years Experience" },
  { value: "50+", label: "Team Members" },
  { value: "12", label: "Service Lines" },
];

// --- Main Page Component ---
const AboutPage = () => {
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
                About Us
              </span>
              <h1 className="heading-display mb-6">
                Your Trusted Digital Advisory Partner
              </h1>
              <p className="text-xl text-white/80 leading-relaxed">
                Auditclue Global Advisory Services LLC is a fully digitalised
                audit, tax, and compliance advisory firm in the UAE, delivering
                technology-driven, time-efficient, and regulator-aligned
                solutions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="section-container">
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-accent/5 rounded-3xl p-8 md:p-10 border border-accent/20"
              >
                <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-accent" />
                </div>
                <h2 className="text-2xl font-bold text-navy mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To transform compliance from a burden into a strategic advantage
                  through technology-driven, fully digital solutions that empower
                  businesses across the UAE. We are committed to delivering
                  exceptional value while maintaining the highest standards of
                  professional excellence.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-navy rounded-3xl p-8 md:p-10 text-white"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-accent" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                <p className="text-white/80 leading-relaxed">
                  To be the most trusted digital-first audit and advisory firm in
                  the region, setting new standards for efficiency, transparency,
                  and client experience. We envision a future where compliance is
                  seamless, accessible, and empowers business growth.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section with Counting Animation */}
        <section className="py-16 bg-muted/80">
          <div className="section-container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                    <AnimatedCounter value={stat.value} />
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4 bg-accent/10 py-2 px-2 border rounded-full border-transparent">
                Our Values
              </span>
              <h2 className="heading-section text-navy mb-6">
                Principles That Guide Us
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-teal-light flex items-center justify-center mx-auto mb-5">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-navy mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/30">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4 bg-accent/10 py-2 px-2 border rounded-full border-transparent">
                  Why Auditclue
                </span>
                <h2 className="heading-section text-navy mb-6">
                  A Modern Approach to Professional Services
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  We combine deep regulatory expertise with advanced accounting,
                  ERP, and e-invoicing technologies. Our paperless approach
                  ensures zero email chaos, full transparency, and real-time
                  tracking of every engagement.
                </p>
                <ul className="space-y-4">
                  {[
                    "100% digital documentation and workflows",
                    "Real-time client portal access",
                    "FTA-compliant processes and systems",
                    "Dedicated team for each engagement",
                    "Transparent pricing and billing",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-6"
              >
                <div className="bg-white rounded-2xl p-6 border border-border/50 hover:shadow-lg transition-shadow">
                  <Users className="w-10 h-10 text-accent mb-4" />
                  <h3 className="font-semibold text-navy mb-2">Expert Team</h3>
                  <p className="text-sm text-muted-foreground">
                    Qualified professionals with deep regulatory knowledge
                  </p>
                </div>
                <div className="bg-white rounded-2xl p-6 border border-border/50 hover:shadow-lg transition-shadow mt-8">
                  <Globe className="w-10 h-10 text-accent mb-4" />
                  <h3 className="font-semibold text-navy mb-2">Global Standards</h3>
                  <p className="text-sm text-muted-foreground">
                    International best practices, local expertise
                  </p>
                </div>
                <div className="bg-white rounded-2xl p-6 border border-border/50 hover:shadow-lg transition-shadow">
                  <Award className="w-10 h-10 text-accent mb-4" />
                  <h3 className="font-semibold text-navy mb-2">Certified</h3>
                  <p className="text-sm text-muted-foreground">
                    Accredited by leading professional bodies
                  </p>
                </div>
                <div className="bg-white rounded-2xl p-6 border border-border/50 hover:shadow-lg transition-shadow mt-8">
                  <Heart className="w-10 h-10 text-accent mb-4" />
                  <h3 className="font-semibold text-navy mb-2">Client First</h3>
                  <p className="text-sm text-muted-foreground">
                    Dedicated support and personalized service
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;