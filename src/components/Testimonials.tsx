import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Auditclue transformed how we handle compliance. Their digital portal saves us hours every month, and we never miss a deadline anymore.",
    author: "Ahmed Al-Rashid",
    role: "CFO",
    company: "Tech Solutions LLC",
  },
  {
    quote:
      "The most professional audit firm we've worked with. Their technology-first approach and FTA expertise made our corporate tax transition seamless.",
    author: "Sarah Mitchell",
    role: "Managing Director",
    company: "Global Trading FZE",
  },
  {
    quote:
      "From VAT registration to monthly filing – Auditclue handles it all digitally. No more chasing emails or lost documents.",
    author: "Mohammed Hassan",
    role: "Business Owner",
    company: "Hassan Enterprises",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4 bg-accent/10 py-2 px-2 border rounded-full border-transparent">
            Testimonials
          </span>
          <h2 className="heading-section text-navy mb-6">
            Trusted by Businesses Across the UAE
          </h2>
          <p className="text-muted-foreground text-lg">
            See what our clients say about their digital compliance journey with
            Auditclue.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-white rounded-2xl p-8 border border-border/50 hover:shadow-lg transition-shadow relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
                  <Quote className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Quote */}
              <p className="text-foreground mb-6 leading-relaxed pt-4">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-navy to-navy-light flex items-center justify-center text-white font-bold">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-navy">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
