import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const Register = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-10 bg-gradient-to-br from-navy to-navy-dark text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]"></div>

          <div className="section-container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4 bg-accent/10 py-2 px-3 rounded-full">
                Create Account
              </span>

              <h1 className="heading-display mb-6">Register</h1>

              <p className="text-xl text-white/80 leading-relaxed">
                Create your account to get started with our compliance and audit
                services.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Register Form Section */}
        <section className="py-20 bg-muted/30">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-xl mx-auto bg-white rounded-3xl shadow-lg p-8 md:p-10"
            >
              <h2 className="heading-section text-navy mb-6 text-center">
                Create Your Account
              </h2>

              <form className="space-y-6">
                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-navy mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-xl border border-muted px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50"
                  />
                </div>

                {/* Password */}
                <div>
                  <label className="block text-sm font-semibold text-navy mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Create a password"
                    className="w-full rounded-xl border border-muted px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50"
                  />
                </div>

                {/* Confirm Password */}
                <div>
                  <label className="block text-sm font-semibold text-navy mb-2">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    placeholder="Confirm your password"
                    className="w-full rounded-xl border border-muted px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-accent text-white font-semibold py-3 rounded-xl hover:bg-accent/90 transition"
                >
                  Register
                </button>

                {/* Login Redirect */}
                <p className="text-sm text-center text-muted-foreground">
                  Already have an account?{" "}
                  <a href="/login" className="text-accent font-semibold">
                    Login
                  </a>
                </p>
              </form>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Register;
