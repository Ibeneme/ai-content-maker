import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  CreditCard,
  Image as ImageIcon,
  Zap,
  Menu,
  X,
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Helper function for smooth scrolling
  const scrollToSection = (id: string) => {
    setIsOpen(false); // Close mobile menu
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { name: "Home", id: "hero", icon: <Zap size={14} /> },
    { name: "Process", id: "workflow", icon: <Shield size={14} /> },
    { name: "Gallery", id: "gallery", icon: <ImageIcon size={14} /> },
    { name: "Pricing", id: "pricing", icon: <CreditCard size={14} /> },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] p-4 md:p-6">
      <nav className="max-w-7xl mx-auto flex justify-between items-center bg-black/40 backdrop-blur-2xl border border-white/10 rounded-2xl px-4 md:px-8 py-3 md:py-4 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
        {/* LOGO - Scrolls to top */}
        <div onClick={() => scrollToSection("hero")} className="cursor-pointer">
          <motion.div className="relative flex items-center gap-2 md:gap-3 group">
            <div className="w-7 h-7 md:w-8 md:h-8 bg-gradient-to-tr from-[#d8b4fe] to-[#ec4899] rounded-lg flex items-center justify-center">
              <Shield size={16} className="text-black" />
            </div>
            {/* <span className="text-lg md:text-2xl font-black text-white uppercase tracking-tighter">
              AI<span className="text-[#ec4899]">-</span>MAKER
            </span> */}
          </motion.div>
        </div>

        {/* DESKTOP LINKS */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className="group relative flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 hover:text-white transition-colors"
            >
              <span className="text-[#d8b4fe]">{link.icon}</span>
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#ec4899] transition-all group-hover:w-full" />
            </button>
          ))}
        </div>

        {/* ACTIONS */}
        <div className="flex items-center gap-2 md:gap-4">
          <Link to="/login" className="hidden sm:block">
            <button className="relative group px-4 md:px-6 py-2 rounded-xl bg-white/5 flex items-center gap-2 hover:border-[#d8b4fe]/50 transition-all">
              <span className="text-[10px] md:text-xs font-black uppercase text-white">
                Login
              </span>
            </button>
          </Link>

          <button onClick={toggleMenu} className="lg:hidden p-2 text-zinc-400">
            {isOpen ? (
              <X size={24} className="text-[#ec4899]" />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-24 left-4 right-4 bg-black/95 backdrop-blur-3xl border border-white/10 rounded-3xl overflow-hidden z-50 p-8 flex flex-col gap-6"
          >
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className="flex items-center gap-4 text-xl font-black uppercase text-zinc-400 hover:text-[#d8b4fe] text-left"
              >
                <span className="p-2 bg-white/5 rounded-lg text-[#ec4899]">
                  {link.icon}
                </span>
                {link.name}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default Navbar;
