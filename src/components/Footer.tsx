import { motion } from "framer-motion";
import {
  Shield,
  Send,
  Twitter,
  Github,
  Instagram,
  ArrowUpRight,
  Cpu,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Helper for smooth scrolling from the footer
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-black pt-32 pb-12 px-6 relative overflow-hidden">
      {/* --- SECTION 1: FINAL CTA --- */}
      <div className="max-w-7xl mx-auto mb-32 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-gradient-to-r from-[#d8b4fe]/20 to-[#ec4899]/20 blur-[120px] rounded-full opacity-50 pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="relative z-10 p-8 md:p-24 rounded-[3rem] border border-white/10 bg-zinc-900/20 backdrop-blur-3xl text-center flex flex-col items-center gap-8 overflow-hidden"
        >
          <motion.div
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12"
          />

          <h2 className="text-4xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9]">
            Ready to <br />
            <span className="text-[#ec4899]">Get Started?</span>
          </h2>

          <p className="max-w-xl text-zinc-400 text-base md:text-xl font-medium">
            Join the elite circle of individuals using Identity Lock™ to build
            consistent, hyper-realistic content engines.
          </p>

          <div className="relative group">
            <button
              onClick={() => scrollToSection("hero")}
              className="bg-white text-black px-8 md:px-12 py-5 md:py-6 rounded-2xl font-black text-lg md:text-xl flex items-center gap-4 transition-all hover:scale-105 shadow-[0_0_50px_rgba(255,255,255,0.2)] group-hover:shadow-[#ec4899]/40 group-hover:bg-[#ec4899] group-hover:text-white"
            >
              GET STARTED <ArrowUpRight size={24} />
            </button>
        
          </div>
        </motion.div>
      </div>

      {/* --- SECTION 2: FOOTER LINKS --- */}
      <div className="max-w-7xl mx-auto border-t border-white/5 pt-20">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-20">
          {/* Brand Column */}
          <div className="col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#ec4899] rounded-lg flex items-center justify-center">
                <Shield size={18} className="text-black" />
              </div>
              <span className="text-2xl font-black tracking-tighter text-white uppercase">
                Your AI-Twin Maker
              </span>
            </div>
            <p className="text-zinc-500 text-sm max-w-xs leading-relaxed font-medium">
              The world's first neural engine designed for likeness integrity.
              Upload once. Lock forever. Generate infinitely.
            </p>
            <div className="flex gap-4">
              {[Twitter, Instagram, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-[#d8b4fe] hover:border-[#d8b4fe]/50 transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns - Targeted to IDs */}
          <div className="space-y-6">
            <h4 className="text-white text-xs font-black uppercase tracking-widest">
              Protocol
            </h4>
            <ul className="space-y-4 text-sm text-zinc-500 font-bold uppercase tracking-tighter">
              <li>
                <button
                  onClick={() => scrollToSection("hero")}
                  className="hover:text-white transition-colors"
                >
                  Neural Engine
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("workflow")}
                  className="hover:text-white transition-colors"
                >
                  Identity Lock
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("gallery")}
                  className="hover:text-white transition-colors"
                >
                  Scene Archive
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-white text-xs font-black uppercase tracking-widest">
              Company
            </h4>
            <ul className="space-y-4 text-sm text-zinc-500 font-bold uppercase tracking-tighter">
              <li>
                <button
                  onClick={() => scrollToSection("hero")}
                  className="hover:text-white transition-colors"
                >
                  Waitlist
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("pricing")}
                  className="hover:text-white transition-colors"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("features")}
                  className="hover:text-white transition-colors"
                >
                  Support
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter / Contact */}
          <div className="col-span-2 space-y-6">
            <h4 className="text-white text-xs font-black uppercase tracking-widest flex items-center gap-2">
              <Cpu size={14} className="text-[#ec4899]" /> Join the System
            </h4>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="system@mail.com"
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#d8b4fe] flex-1"
              />
              <button className="bg-[#d8b4fe] text-black p-3 rounded-xl hover:scale-105 transition-transform">
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t border-white/5 pt-12 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-600">
          <p>© {currentYear} AI-MAKER NEURAL ENGINE. ALL RIGHTS SECURED.</p>
          <div className="flex gap-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="hover:text-white transition-colors uppercase"
            >
              Privacy Protocol
            </button>
            <button
              onClick={() => scrollToSection("hero")}
              className="hover:text-white transition-colors uppercase"
            >
              Terms of Synthesis
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
