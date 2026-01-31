// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
// import Contact from "@/components/Contact";
// import { motion } from "framer-motion";

// const ContactPage = () => {
//   return (
//     <div className="min-h-screen">
//       <Header />
//       <main>
//         {/* Hero Section */}
//         <section className="pt-32 pb-10 bg-gradient-to-br from-navy to-navy-dark text-white relative overflow-hidden">
//           <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]"></div>
//           <div className="section-container relative z-10">
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="max-w-3xl"
//             >
//               <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4 bg-accent/10 py-2 px-2 border rounded-full border-transparent">
//                 Contact Us
//               </span>
//               <h1 className="heading-display mb-6">Get in Touch</h1>
//               <p className="text-xl text-white/80 leading-relaxed">
//                 Have questions about our services? We're here to help you transform
//                 your compliance journey.
//               </p>
//             </motion.div>
//           </div>
//         </section>

//         {/* Contact Section */}
//         <Contact />

//         {/* Map Section */}
//         <section className="py-20 bg-muted/30">
//           <div className="section-container">
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="text-center mb-12"
//             >
//               <h2 className="heading-section text-navy mb-4">Visit Our Office</h2>
//               <p className="text-muted-foreground">
//                 Business Bay, Dubai, United Arab Emirates
//               </p>
//             </motion.div>
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="rounded-3xl overflow-hidden shadow-lg"
//             >
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.1785410837684!2d55.26469931500983!3d25.18561798389857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69d9e0b65c0d%3A0x4a0a8f4e0b6c7d0e!2sBusiness%20Bay%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
//                 width="100%"
//                 height="450"
//                 style={{ border: 0 }}
//                 allowFullScreen
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//                 title="Auditclue Office Location"
//               ></iframe>
//             </motion.div>
//           </div>
//         </section>
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default ContactPage;
