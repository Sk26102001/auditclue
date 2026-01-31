// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import {
//   PlayCircle,
//   FileText,
//   Download,
//   ArrowRight,
//   BookOpen,
//   Video,
//   FileDown,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";

// const videos = [
//   {
//     title: "Understanding UAE VAT",
//     description: "A comprehensive guide to VAT compliance in the UAE",
//     duration: "12:45",
//     category: "VAT",
//   },
//   {
//     title: "Corporate Tax Overview",
//     description: "Everything you need to know about UAE Corporate Tax",
//     duration: "18:30",
//     category: "Corporate Tax",
//   },
//   {
//     title: "E-Invoicing Preparation",
//     description: "How to prepare your business for e-invoicing",
//     duration: "15:20",
//     category: "E-Invoicing",
//   },
//   {
//     title: "Transfer Pricing Basics",
//     description: "Understanding transfer pricing requirements",
//     duration: "20:15",
//     category: "Transfer Pricing",
//   },
//   {
//     title: "ESR Compliance Guide",
//     description: "Economic Substance Regulations explained",
//     duration: "14:00",
//     category: "ESR",
//   },
//   {
//     title: "AML Compliance",
//     description: "Anti-Money Laundering requirements for businesses",
//     duration: "16:45",
//     category: "AML",
//   },
// ];

// const resources = [
//   {
//     title: "UAE VAT Guide 2024",
//     description: "Complete guide to VAT registration, filing, and compliance",
//     type: "PDF Guide",
//     pages: "45 pages",
//   },
//   {
//     title: "Corporate Tax Checklist",
//     description: "Step-by-step checklist for CT compliance",
//     type: "Checklist",
//     pages: "12 pages",
//   },
//   {
//     title: "E-Invoicing Readiness Assessment",
//     description: "Self-assessment tool for e-invoicing preparation",
//     type: "Template",
//     pages: "8 pages",
//   },
//   {
//     title: "Transfer Pricing Documentation Template",
//     description: "Template for preparing TP documentation",
//     type: "Template",
//     pages: "25 pages",
//   },
//   {
//     title: "Financial Year-End Checklist",
//     description: "Comprehensive year-end closing checklist",
//     type: "Checklist",
//     pages: "15 pages",
//   },
//   {
//     title: "Audit Preparation Guide",
//     description: "How to prepare for your annual audit",
//     type: "Guide",
//     pages: "20 pages",
//   },
// ];

// const KnowledgePage = () => {
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
//               <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4 bg-accent/10 py-2 px-2 border rounded-full border-transparent">
//                 Knowledge Hub
//               </span>
//               <h1 className="heading-display mb-6">Learn & Stay Updated</h1>
//               <p className="text-xl text-white/80 leading-relaxed">
//                 Access our library of educational videos, guides, and resources
//                 to stay informed about UAE compliance requirements.
//               </p>
//             </motion.div>
//           </div>
//         </section>

//         {/* Stats */}
//         <section className="py-12 bg-muted/30 border-b border-border">
//           <div className="section-container">
//             <div className="flex flex-wrap justify-center gap-12 md:gap-20">
//               <div className="text-center">
//                 <div className="flex items-center justify-center gap-2 mb-2">
//                   <Video className="w-6 h-6 text-accent" />
//                   <span className="text-3xl font-bold text-navy">20+</span>
//                 </div>
//                 <span className="text-muted-foreground">Video Tutorials</span>
//               </div>
//               <div className="text-center">
//                 <div className="flex items-center justify-center gap-2 mb-2">
//                   <FileDown className="w-6 h-6 text-accent" />
//                   <span className="text-3xl font-bold text-navy">15+</span>
//                 </div>
//                 <span className="text-muted-foreground">Downloadable Resources</span>
//               </div>
//               <div className="text-center">
//                 <div className="flex items-center justify-center gap-2 mb-2">
//                   <BookOpen className="w-6 h-6 text-accent" />
//                   <span className="text-3xl font-bold text-navy">50+</span>
//                 </div>
//                 <span className="text-muted-foreground">Articles & Guides</span>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Videos Section */}
//         <section className="py-20">
//           <div className="section-container">
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="flex items-center justify-between mb-12"
//             >
//               <div>
//                 <h2 className="heading-section text-navy mb-2">Video Library</h2>
//                 <p className="text-muted-foreground">
//                   Educational videos on UAE compliance topics
//                 </p>
//               </div>
//             </motion.div>

//             <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               {videos.map((video, index) => (
//                 <motion.div
//                   key={video.title}
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: index * 0.1 }}
//                   className="bg-white rounded-2xl overflow-hidden border border-border/50 hover:shadow-xl transition-shadow group"
//                 >
//                   {/* Video Thumbnail */}
//                   <div className="relative aspect-video bg-gradient-to-br from-navy to-navy-light flex items-center justify-center">
//                     <div className="absolute inset-0 bg-black/20"></div>
//                     <PlayCircle className="w-16 h-16 text-white/80 group-hover:text-accent group-hover:scale-110 transition-all z-10 cursor-pointer" />
//                     <span className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
//                       {video.duration}
//                     </span>
//                     <span className="absolute top-3 left-3 bg-accent text-white text-xs px-3 py-1 rounded-full">
//                       {video.category}
//                     </span>
//                   </div>
//                   <div className="p-5">
//                     <h3 className="font-semibold text-navy mb-2 group-hover:text-accent transition-colors">
//                       {video.title}
//                     </h3>
//                     <p className="text-sm text-muted-foreground">
//                       {video.description}
//                     </p>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Resources Section */}
//         <section className="py-20 bg-muted/30">
//           <div className="section-container">
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="flex items-center justify-between mb-12"
//             >
//               <div>
//                 <h2 className="heading-section text-navy mb-2">
//                   Downloadable Resources
//                 </h2>
//                 <p className="text-muted-foreground">
//                   Guides, templates, and checklists for your business
//                 </p>
//               </div>
//             </motion.div>

//             <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               {resources.map((resource, index) => (
//                 <motion.div
//                   key={resource.title}
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: index * 0.1 }}
//                   className="bg-white rounded-2xl p-6 border border-border/50 hover:shadow-xl transition-shadow group cursor-pointer"
//                 >
//                   <div className="flex items-start gap-4">
//                     <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
//                       <FileText className="w-7 h-7 text-accent" />
//                     </div>
//                     <div className="flex-1">
//                       <div className="flex items-center gap-2 mb-1">
//                         <span className="text-xs text-accent font-medium">
//                           {resource.type}
//                         </span>
//                         <span className="text-xs text-muted-foreground">
//                           • {resource.pages}
//                         </span>
//                       </div>
//                       <h3 className="font-semibold text-navy mb-2 group-hover:text-accent transition-colors">
//                         {resource.title}
//                       </h3>
//                       <p className="text-sm text-muted-foreground mb-4">
//                         {resource.description}
//                       </p>
//                       <div className="flex items-center gap-2 text-accent text-sm font-medium">
//                         <Download className="w-4 h-4" />
//                         Download Free
//                       </div>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* CTA */}
//         <section className="py-20">
//           <div className="section-container">
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="text-center max-w-3xl mx-auto"
//             >
//               <h2 className="heading-section text-navy mb-6">
//                 Need Personalized Guidance?
//               </h2>
//               <p className="text-muted-foreground text-lg mb-8">
//                 Our experts are ready to help you with your specific compliance
//                 questions and requirements.
//               </p>
//               <Button
//                 asChild
//                 size="lg"
//                 className="bg-accent hover:bg-teal-dark text-white btn-premium px-8 h-14"
//               >
//                 <Link to="/contact" className="flex items-center gap-2">
//                   Contact Our Experts
//                   <ArrowRight className="w-5 h-5" />
//                 </Link>
//               </Button>
//             </motion.div>
//           </div>
//         </section>
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default KnowledgePage;
