import { motion } from "framer-motion";
import { Zap, Mail, Cpu, Globe } from "lucide-react";

const Hero = () => {
  const generatedScenes = [
    {
      id: 1,
      label: "CELF: IDENTITY LOCK",
      color: "from-[#d8b4fe]/20",
      image:
        "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 2,
      label: "AMPLEEFY: NEURAL RENDER",
      color: "from-[#ec4899]/20",
      image:
        "https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 3,
      label: "OFFLOVN: DATA ARCHIVE",
      color: "from-[#d8b4fe]/20",
      image:
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 4,
      label: "SCENE: CINEMATIC STREET",
      color: "from-[#ec4899]/20",
      image:
        "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 5,
      label: "SCENE: CYBER PENTHOUSE",
      color: "from-[#d8b4fe]/20",
      image:
        "https://images.unsplash.com/photo-1633167606207-d840b5070fc2?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <main className="relative z-10 flex flex-col items-center justify-center pt-24 md:pt-32 overflow-hidden bg-black min-h-screen w-full">
      {/* --- RESPONSIVE MAD BACKGROUND --- */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Adjusted Orbital Rings for Mobile */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[800px] md:h-[800px] border border-[#d8b4fe]/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] md:w-[600px] md:h-[600px] border border-[#ec4899]/10 rounded-full border-dashed"
        />

        {/* Floating AI Particles */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: "100vh", x: Math.random() * 100 + "vw" }}
            animate={{ y: "-10vh", opacity: [0, 1, 0] }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            className="absolute w-1 h-1 bg-[#d8b4fe] rounded-full blur-[1px]"
          />
        ))}

        {/* Neural Grid - Scaled bg size for sharper mobile look */}
        <motion.div
          animate={{ backgroundPositionY: ["0px", "40px"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:30px_30px] md:bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"
        />
      </div>

      {/* --- CONTENT --- */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex items-center gap-2 px-4 md:px-5 py-2 rounded-full border border-[#ec4899]/30 bg-black text-[#ec4899] text-[8px] md:text-[10px] font-black tracking-[0.3em] uppercase mb-6 md:mb-10 shadow-[0_0_20px_rgba(236,72,153,0.1)] relative z-10"
      >
        <Cpu size={12} className="animate-spin-slow" />
        AI Content Maker Engine
      </motion.div>

      <div className="text-center px-6 md:px-4 mb-12 md:mb-16 relative z-10 w-full">
        <motion.h1
          initial={{ filter: "blur(20px)", y: 50 }}
          animate={{ filter: "blur(0px)", y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-6xl md:text-8xl lg:text-[9rem] font-black tracking-tighter leading-[1] md:leading-[0.8] uppercase break-words"
        >
          AI CONTENT <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d8b4fe] via-white to-[#ec4899]">
            MAKER
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 md:mt-8 max-w-2xl mx-auto text-zinc-500 text-sm md:text-xl font-medium leading-relaxed"
        >
          Upload your photo, lock your identity into our neural system, and
          instantly generate hyper-realistic scenes where{" "}
          <span className="text-white">your likeness never fades.</span>
        </motion.p>

        {/* COMING SOON CTAs - Stacked on Mobile */}
        <div className="flex flex-col sm:flex-row gap-6 md:gap-4 justify-center mt-10 md:mt-12">
          <div className="relative group w-full sm:w-auto">
            <button className="w-full sm:w-auto bg-[#ec4899] text-white px-8 md:px-10 py-4 md:py-5 rounded-2xl font-black flex items-center justify-center gap-3 opacity-80 cursor-not-allowed">
              <Zap size={20} /> GET STARTED
            </button>
            <span className="absolute -top-3 right-4 sm:-right-2 bg-white text-black text-[8px] md:text-[10px] px-2 py-0.5 rounded font-bold">
              COMING SOON
            </span>
          </div>

          <div className="relative group w-full sm:w-auto">
            <button className="w-full sm:w-auto bg-white/5 border border-white/10 text-white px-8 md:px-10 py-4 md:py-5 rounded-2xl font-black flex items-center justify-center gap-3 opacity-80 cursor-not-allowed">
              <Mail size={20} className="text-[#d8b4fe]" /> CONTACT US
            </button>
            <span className="absolute -top-3 right-4 sm:-right-2 bg-[#d8b4fe] text-black text-[8px] md:text-[10px] px-2 py-0.5 rounded font-bold ">
              COMING SOON
            </span>
          </div>
        </div>
      </div>

      {/* --- CAROUSEL --- */}
      <div className="relative w-full py-12 md:py-20 border-y border-white/5 bg-zinc-900/20 backdrop-blur-3xl mt-8 md:mt-12">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex gap-4 md:gap-6"
        >
          {[...generatedScenes, ...generatedScenes, ...generatedScenes].map(
            (scene, idx) => (
              <div
                key={idx}
                className="relative flex-shrink-0 w-48 h-64 md:w-64 md:h-80 rounded-2xl md:rounded-3xl border border-white/10 overflow-hidden bg-black group"
              >
                <img
                  src={scene.image}
                  className="absolute inset-0 w-full h-full object-cover opacity-50 transition-all duration-700"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-b ${scene.color} to-black/90`}
                />
                <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 z-20">
                  <p className="text-[8px] md:text-[10px] font-black text-[#d8b4fe] tracking-[0.2em] mb-1">
                    {scene.label}
                  </p>
                  <div className="flex items-center gap-1 md:gap-2 text-[6px] md:text-[8px] text-zinc-400 font-bold uppercase">
                    <Globe size={8} className="text-[#ec4899]" />
                    Secure Scene Render
                  </div>
                </div>
              </div>
            )
          )}
        </motion.div>
      </div>
    </main>
  );
};

export default Hero;
