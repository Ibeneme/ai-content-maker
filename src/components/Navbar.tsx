import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  CreditCard,
  Image as ImageIcon,
  Zap,
  Menu,
  X,
  LogOut,
  LayoutDashboard,
} from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../redux/store";
import { logout } from "../redux/slices/authSlice"; // Adjust path as needed

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  // Extract auth state
  const { token } = useSelector((state: RootState) => state.auth);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    console.log("🚀 [Navbar] Logging out...");
    dispatch(logout());
    setIsOpen(false);
    navigate("/");
  };

  const scrollToSection = (id: string) => {
    setIsOpen(false);
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
        {/* LOGO */}
        <div onClick={() => scrollToSection("hero")} className="cursor-pointer">
          <motion.div className="relative flex items-center gap-2 md:gap-3 group">
            <div className="w-7 h-7 md:w-8 md:h-8 bg-gradient-to-tr from-[#d8b4fe] to-[#ec4899] rounded-lg flex items-center justify-center">
              <Shield size={16} className="text-black" />
            </div>
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

        {/* ACTIONS: Toggle between Login and Dashboard/Logout */}
        <div className="flex items-center gap-2 md:gap-4">
          {!token ? (
            <Link to="/login" className="hidden sm:block">
              <button className="relative group px-4 md:px-6 py-2 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2 hover:border-[#ec4899]/50 transition-all">
                <span className="text-[10px] md:text-xs font-black uppercase text-white tracking-widest">
                  Login
                </span>
              </button>
            </Link>
          ) : (
            <div className="hidden sm:flex items-center gap-3">
              <Link to="/dashboard">
                <button className="px-4 py-2 rounded-xl bg-[#ec4899]/10 border border-[#ec4899]/30 text-[#ec4899] flex items-center gap-2 hover:bg-[#ec4899]/20 transition-all">
                  <LayoutDashboard size={14} />
                  <span className="text-[10px] font-black uppercase">
                    Dashboard
                  </span>
                </button>
              </Link>
              <button
                onClick={handleLogout}
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 transition-all"
              >
                <LogOut size={16} />
              </button>
            </div>
          )}

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
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="lg:hidden absolute top-24 left-4 right-4 bg-black/95 backdrop-blur-3xl border border-white/10 rounded-3xl overflow-hidden z-50 p-8 flex flex-col gap-6 shadow-2xl"
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

            <div className="pt-6 border-t border-white/5 flex flex-col gap-4">
              {!token ? (
                <Link to="/login" onClick={() => setIsOpen(false)}>
                  <button className="w-full py-4 bg-white text-black rounded-2xl font-black uppercase tracking-widest">
                    Login to Studio
                  </button>
                </Link>
              ) : (
                <>
                  <Link to="/dashboard" onClick={() => setIsOpen(false)}>
                    <button className="w-full py-4 bg-[#ec4899] text-white rounded-2xl font-black uppercase tracking-widest">
                      Enter Dashboard
                    </button>
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full py-4 bg-white/5 text-zinc-400 rounded-2xl font-black uppercase tracking-widest border border-white/10"
                  >
                    Logout
                  </button>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
