// import { motion } from "framer-motion";

// const logos = [
//   { name: "FTA", text: "FTA Registered" },
//   { name: "ACCA", text: "ACCA Members" },
//   { name: "CPA", text: "CPA Certified" },
//   { name: "IMA", text: "IMA Partners" },
//   { name: "ISO", text: "ISO 27001" },
//   { name: "AICPA", text: "AICPA Affiliated" },
// ];

// export default function TrustedBy() {
//   return (
//     <section className="py-16 bg-muted/30 border-y border-border/50">
//       <div className="section-container">
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           className="text-center"
//         >
//           <p className="text-sm font-medium text-muted-foreground mb-8 uppercase tracking-wider">
//             Trusted & Accredited
//           </p>
//           <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
//             {logos.map((logo, index) => (
//               <motion.div
//                 key={logo.name}
//                 initial={{ opacity: 0, y: 10 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 className="flex items-center gap-2 text-muted-foreground hover:text-navy transition-colors"
//               >
//                 <div className="w-10 h-10 rounded-lg bg-navy/10 flex items-center justify-center">
//                   <span className="font-bold text-xs text-navy">{logo.name}</span>
//                 </div>
//                 <span className="text-sm font-medium hidden sm:inline">{logo.text}</span>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }




import { motion } from "framer-motion";

const logos = [
  { name: "FTA", text: "FTA Registered" },
  { name: "ACCA", text: "ACCA Members" },
  { name: "CPA", text: "CPA Certified" },
  { name: "IMA", text: "IMA Partners" },
  { name: "ISO", text: "ISO 27001" },
  { name: "AICPA", text: "AICPA Affiliated" },
];

export default function TrustedBy() {
  // Tripled to ensure zero gaps on ultra-wide screens
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <section className="py-10 bg-navy border-y border-border/50 overflow-hidden">
      {/* Title stays inside the container */}
      <div className="section-container mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm font-bold text-accent mb-2 uppercase tracking-[0.2em] ">
            Accreditation & Partners
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Globally Recognized Standards
          </h2>
        </motion.div>
      </div>

      {/* Slider goes FULL WIDTH (outside section-container) */}
      <div className="relative flex overflow-hidden group w-full">
        <motion.div
          className="flex whitespace-nowrap gap-8 md:gap-12 items-center py-4"
          animate={{
            x: [0, "-33.33%"],
          }}
          transition={{
            duration: 30, // Slower speed for larger boxes
            ease: "linear",
            repeat: Infinity,
          }}
          whileHover={{ animationPlayState: "paused" }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="flex items-center gap-6 px-8 py-6 bg-white rounded-3xl shadow-md border border-border/50 hover:shadow-xl hover:border-accent/30 transition-all shrink-0 min-w-[280px] md:min-w-[320px]"
            >
              {/* Bigger Icon Box */}
              <div className="w-12 h-12 rounded-2xl bg-navy/5 flex items-center justify-center border border-navy/10 shrink-0">
                <span className="font-black text-sm md:text-base text-navy uppercase">
                  {logo.name}
                </span>
              </div>

              {/* Bigger Content */}
              <div className="flex flex-col items-start">
                <span className="text-lg md:text-xl font-bold text-navy leading-tight">
                  {logo.name}
                </span>
                <span className="text-sm md:text-base text-muted-foreground font-medium">
                  {logo.text}
                </span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Stronger Side Gradients for full-width transition */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-40  z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-40  z-10" />
      </div>
    </section>
  );
}