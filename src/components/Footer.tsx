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
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black pt-32 pb-12 px-6 relative overflow-hidden">
      {/* --- SECTION 1: FINAL CTA --- */}
      <div className="max-w-7xl mx-auto mb-32 relative">
        {/* Glowing Aura behind CTA */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-gradient-to-r from-[#d8b4fe]/20 to-[#ec4899]/20 blur-[120px] rounded-full opacity-50 pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="relative z-10 p-12 md:p-24 rounded-[3rem] border border-white/10 bg-zinc-900/20 backdrop-blur-3xl text-center flex flex-col items-center gap-8 overflow-hidden"
        >
          {/* Animated Background Scan Line */}
          <motion.div
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12"
          />

          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85]">
            Ready to <br />
            <span className="text-[#ec4899]">Get Started?</span>
          </h2>

          <p className="max-w-xl text-zinc-400 text-lg md:text-xl font-medium">
            Join the elite circle of creators using Identity Lock™ to build
            consistent, hyper-realistic content engines.
          </p>

          <div className="relative group">
            <button className="bg-white text-black px-10 py-6 rounded-2xl font-black text-xl flex items-center gap-4 transition-all hover:scale-105 shadow-[0_0_50px_rgba(255,255,255,0.2)] group-hover:shadow-[#ec4899]/40 group-hover:bg-[#ec4899] group-hover:text-white">
              GET STARTED <ArrowUpRight size={24} />
            </button>
            <span className="absolute -top-4 -right-4 bg-[#d8b4fe] text-black text-[10px] px-3 py-1 rounded-full font-black uppercase rotate-12">
              Coming Soon
            </span>
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
                AI-MAKER
              </span>
            </div>
            <p className="text-zinc-500 text-sm max-w-xs leading-relaxed">
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

          {/* Links Columns */}
          <div className="space-y-6">
            <h4 className="text-white text-xs font-black uppercase tracking-widest">
              Protocol
            </h4>
            <ul className="space-y-4 text-sm text-zinc-500 font-medium">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Neural Engine
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Identity Lock
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Scene Archive
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-white text-xs font-black uppercase tracking-widest">
              Company
            </h4>
            <ul className="space-y-4 text-sm text-zinc-500 font-medium">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Waitlist
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Support
                </Link>
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
            <p className="text-[10px] text-zinc-600 font-bold uppercase tracking-tighter">
              * By joining, you agree to our Neural Privacy Terms.
            </p>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT */}
        {/* <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t border-white/5 pt-12 text-[10px] font-black uppercase tracking-widest text-zinc-600">
          <p>© {currentYear} AI-MAKER NEURAL ENGINE. ALL RIGHTS SECURED.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Protocol
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Likeness Rights
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Synthesis
            </a>
          </div>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
