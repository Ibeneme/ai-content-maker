import { motion } from "framer-motion";
import { Zap, Cpu } from "lucide-react";

// --- LOCAL ASSET IMPORTS ---
import d from "../../assets/images/new_bb.jpg";
import f from "../../assets/images/new_dd.jpg";
import h from "../../assets/images/new_ee.jpg";
import ee from "../../assets/images/new_nn.jpg";
import hh from "../../assets/images/new_oo.jpg";

const Hero = () => {
  // New handlers for the two platforms
  const handleAISudio = () => {
    window.open("https://aivideostudio.vercel.app/", "_blank");
  };

  const handleVoiceOver = () => {
    window.open("https://aivideostudio.vercel.app/", "_blank");
  };

  const generatedScenes = [
    {
      id: 11,
      label: "VISUAL: OPTIMIZED",
      color: "from-[#d8b4fe]/20",
      image: hh,
      desc: "Sub-pixel refinement.",
    },
    {
      id: 4,
      label: "EDITORIAL: VOGUE STYLE",
      color: "from-[#ec4899]/20",
      image: d,
      desc: "High-fashion synthesis.",
    },
    {
      id: 6,
      label: "CINEMATIC: NOIR",
      color: "from-[#ec4899]/20",
      image: f,
      desc: "Atmospheric depth.",
    },
    {
      id: 9,
      label: "NEURAL: CORE SYNTH",
      color: "from-[#d8b4fe]/20",
      image: ee,
      desc: "Deep layer processing.",
    },
    {
      id: 8,
      label: "RENDER: ARCHITECTURAL",
      color: "from-[#ec4899]/20",
      image: h,
      desc: "Spatial awareness.",
    },
  ];

  return (
    <main className="relative z-10 flex flex-col items-center justify-center pt-24 md:pt-32 overflow-hidden bg-black min-h-screen w-full">
      {/* --- BACKGROUND EFFECTS --- */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
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
        <motion.div
          animate={{ backgroundPositionY: ["0px", "40px"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:30px_30px] md:bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"
        />
      </div>

      {/* --- BADGE --- */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex items-center gap-2 px-4 md:px-5 py-2 rounded-full border border-[#ec4899]/30 bg-black text-[#ec4899] text-[8px] md:text-[10px] font-black tracking-[0.3em] uppercase mb-6 md:mb-10 shadow-[0_0_20px_rgba(236,72,153,0.1)] relative z-10"
      >
        <Cpu size={12} className="animate-spin-slow" />
        CREATE YOUR DIGITAL TWIN
      </motion.div>

      {/* --- MAIN HEADER --- */}
      <div className="text-center px-6 md:px-4 mb-12 md:mb-16 relative z-10 w-full">
        <motion.h1
          initial={{ filter: "blur(20px)", y: 50 }}
          animate={{ filter: "blur(0px)", y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-6xl md:text-8xl lg:text-[7rem] font-black tracking-tighter leading-[1] md:leading-[0.8] uppercase break-words"
        >
          YOUR AI <br />
          CONTENT <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d8b4fe] via-white to-[#ec4899]">
            STUDIO
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 md:mt-8 max-w-2xl mx-auto text-zinc-500 text-sm md:text-xl font-medium leading-relaxed"
        >
          The ultimate studio for consistent identity.{" "}
          <span className="text-[#ec4899] font-black">No prompt needed.</span>{" "}
          Create your AI twin for{" "}
          <span className="text-white">professional photoshoots</span> or
          generate hyper-consistent images for your wildest{" "}
          <span className="text-white">creative ideas.</span>
        </motion.p>

        {/* --- UPDATED CTAs (Two Buttons) --- */}
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center mt-10 md:mt-12">
          <div className="relative group w-full sm:w-auto">
            <button
              onClick={handleAISudio}
              className="w-full sm:w-auto bg-[#ec4899] text-white px-8 md:px-10 py-4 md:py-5 rounded-2xl font-black flex items-center justify-center gap-3 hover:scale-105 transition-transform cursor-pointer"
            >
              <Zap size={20} /> START AI STUDIO
            </button>
            <span className="absolute -top-3 right-4 sm:-right-2 bg-white text-black text-[8px] md:text-[10px] px-2 py-0.5 rounded font-bold">
              ACTIVE
            </span>
          </div>

          <button
            onClick={handleVoiceOver}
            className="w-full sm:w-auto border border-white/30 hover:border-white/60 bg-white/5 text-white px-8 md:px-10 py-4 md:py-5 rounded-2xl font-black flex items-center justify-center gap-3 hover:scale-105 transition-transform cursor-pointer"
          >
            <Zap size={20} /> VOICE OVER CREATION
          </button>
        </div>
      </div>

      {/* --- CAROUSEL WITH TILT --- */}
      <div className="relative w-full py-16 border-y border-white/5 bg-zinc-900/10 backdrop-blur-xl mt-10">
        <motion.div
          animate={{ x: [0, -2000] }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="flex gap-6"
        >
          {[...generatedScenes, ...generatedScenes].map((scene, idx) => (
            <motion.div
              key={`${scene.id}-${idx}`}
              whileHover={{
                rotateY: 15,
                rotateX: -5,
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
              style={{ perspective: 1000 }}
              className="relative flex-shrink-0 w-56 h-72 md:w-72 md:h-96 rounded-3xl border border-white/10 overflow-hidden bg-zinc-900 group cursor-pointer shadow-2xl"
            >
              <img
                src={scene.image}
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-100 transition-all duration-500"
                alt={scene.label}
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t ${scene.color} via-transparent to-transparent opacity-60`}
              />

              <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-black via-black/20 to-transparent">
                <div className="overflow-hidden">
                  <motion.p className="text-[10px] font-black text-[#d8b4fe] tracking-[0.2em] mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {scene.label}
                  </motion.p>
                </div>
                <AppText className="text-[12px] text-white font-bold mb-3 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                  {scene.desc}
                </AppText>
                <div className="flex items-center gap-2 text-[8px] text-zinc-500 font-bold uppercase tracking-widest">
                  <div className="w-2 h-2 rounded-full bg-[#ec4899] animate-pulse" />
                  Live Processing
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
};

const AppText = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => <span className={className}>{children}</span>;

export default Hero;
