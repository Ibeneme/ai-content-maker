import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ShieldAlert, Zap, ArrowLeft, Cpu } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6 relative overflow-hidden font-sans">
      {/* Background Mad Motion - Neural Noise */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:20px_20px]" />
        <motion.div
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#ec4899]/10 blur-[150px] rounded-full"
        />
      </div>

      <div className="relative z-10 text-center space-y-8">
        {/* Error Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#ec4899]/30 bg-black text-[#ec4899] text-[10px] font-black tracking-[0.3em] uppercase shadow-[0_0_20px_rgba(236,72,153,0.1)]"
        >
          <ShieldAlert size={14} className="animate-pulse" />
          Critical Error: Link Corrupted
        </motion.div>

        {/* Big Glitchy 404 */}
        <div className="relative">
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[12rem] md:text-[20rem] font-black tracking-tighter leading-none text-white select-none"
          >
            404
          </motion.h1>
          <motion.div
            animate={{ x: [-2, 2, -2], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 0.1, repeat: Infinity }}
            className="absolute inset-0 text-[#ec4899] translate-x-1 translate-y-1 -z-10 text-[12rem] md:text-[20rem] font-black tracking-tighter leading-none"
          >
            404
          </motion.div>
          <motion.div
            animate={{ x: [2, -2, 2], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 0.1, repeat: Infinity, delay: 0.05 }}
            className="absolute inset-0 text-[#d8b4fe] -translate-x-1 -translate-y-1 -z-10 text-[12rem] md:text-[20rem] font-black tracking-tighter leading-none"
          >
            404
          </motion.div>
        </div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="space-y-4"
        >
          <h2 className="text-2xl md:text-4xl font-black uppercase text-white tracking-tight">
            Page <span className="text-[#d8b4fe]">Not Found.</span>
          </h2>
          <p className="max-w-md mx-auto text-zinc-500 font-medium">
            The neural path you are following has been de-indexed. The scene you
            are looking for does not exist in our reality.
          </p>
        </motion.div>

        {/* Re-route Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Link to="/">
            <button className="group relative bg-white text-black px-10 py-5 rounded-2xl font-black text-sm flex items-center gap-3 mx-auto transition-all hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
              <Zap
                size={18}
                className="group-hover:text-[#ec4899] transition-colors"
              />
              SYSTEM RE-ROUTE
              <ArrowLeft
                size={18}
                className="absolute -left-8 opacity-0 group-hover:opacity-100 group-hover:-left-6 transition-all"
              />
            </button>
          </Link>
        </motion.div>

        {/* System Logs */}
        <div className="pt-12 flex flex-col items-center gap-2 opacity-30">
          <div className="flex gap-2">
            <Cpu size={12} className="text-zinc-500 animate-spin-slow" />
            <span className="text-[8px] font-black text-zinc-500 uppercase tracking-widest">
              Neural Link Offline
            </span>
          </div>
          <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
