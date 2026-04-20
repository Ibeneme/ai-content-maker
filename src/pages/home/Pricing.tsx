import d from "../../assets/images/new_dd.jpg";
import e from "../../assets/images/twin.jpg";
import f from "../../assets/images/new_mm.jpg";
import h from "../../assets/images/new_oo.jpg";

import { motion } from "framer-motion";
import { Check, Zap, Shield, Users, Mic2, Camera, Lock } from "lucide-react";

// --- LOCAL ASSET IMPORTS ---
import studioPreview from "../../assets/images/new_d.jpg";

const Pricing = () => {
  const galleryImages = [studioPreview, e, f, h];

  const handleRedirect = () => {
    window.open("https://your-ai-content-studio.vercel.app", "_blank");
  };

  const plans = [
    {
      name: "Identity Starter",
      price: "19",
      icon: <Shield className="text-[#d8b4fe]" size={24} />,
      features: [
        "1 Identity Lock Slot",
        "100 HD & 4K Generations / mo",
        "8K Cinema Upscaling",
        "Standard Neural Processing",
        "Free 10 Monthly Generations",
      ],
      color: "border-[#d8b4fe]/20",
      glow: "group-hover:shadow-[0_0_30px_rgba(216,180,254,0.1)]",
    },
  ];

  return (
    <section className="bg-black py-32 px-6 relative overflow-hidden">
      {/* pointer-events-none ensures this glow doesn't block button clicks */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#ec4899]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 text-white"
          >
            Access{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d8b4fe] to-[#ec4899]">
              Pricing.
            </span>
          </motion.h2>
          <p className="text-zinc-500 max-w-xl mx-auto text-lg">
            Simple processing power. All generations feature our signature
            Identity Lock™ technology for zero likeness drift.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="flex justify-center mb-24">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`group relative p-8 rounded-[2.5rem] bg-zinc-900/40 border-2 ${plan.color} backdrop-blur-xl transition-all duration-500 ${plan.glow} max-w-sm w-full`}
            >
              <div className="mb-8 flex justify-between items-start">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                  {plan.icon}
                </div>
                <div className="text-right">
                  <span className="text-4xl font-black text-white">
                    ${plan.price}
                  </span>
                  <span className="text-zinc-500 text-xs block">/month</span>
                </div>
              </div>

              <h3 className="text-2xl font-black uppercase tracking-tight mb-6 text-white">
                {plan.name}
              </h3>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feat, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-sm text-zinc-400"
                  >
                    <Check size={16} className="text-[#ec4899]" />
                    {feat}
                  </li>
                ))}
              </ul>

              <button
                onClick={handleRedirect}
                className="relative z-30 w-full py-4 rounded-2xl bg-white text-black hover:bg-[#ec4899] hover:text-white transition-colors duration-300 font-black uppercase tracking-widest text-xs flex items-center justify-center gap-2 cursor-pointer overflow-hidden group/btn"
              >
                <Zap size={14} className="fill-current" />
                Get Started Now
                <motion.div
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"
                />
              </button>
            </motion.div>
          ))}
        </div>

        {/* --- STUDIO SECTION (COMING SOON) --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative p-1 rounded-[3rem] bg-gradient-to-r from-[#d8b4fe]/40 via-[#ec4899]/40 to-[#d8b4fe]/40 overflow-hidden"
        >
          <div className="relative p-8 md:p-12 rounded-[2.9rem] bg-zinc-950/90 backdrop-blur-3xl overflow-hidden">
            {/* COMING SOON BADGE */}
            <div className="absolute top-10 right-10 rotate-12 z-30 pointer-events-none">
              <div className="px-6 py-2 bg-[#ec4899] text-white font-black uppercase tracking-[0.3em] text-sm shadow-[0_0_30px_rgba(236,72,153,0.5)]">
                Coming Soon
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-12 items-center relative z-10">
              {/* Left Side: Text Content */}
              <div className="flex flex-col flex-1 text-left">
                <div className="inline-flex w-fit items-center gap-2 px-4 py-1.5 rounded-full bg-[#ec4899]/10 border border-[#ec4899]/20 text-[#ec4899] text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                  <Lock size={12} />
                  Development Phase
                </div>
                <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-6 leading-none">
                  Multi-Person & <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d8b4fe] to-[#ec4899]">
                    Podcast Studio
                  </span>{" "}
                  Generator
                </h3>
                <p className="text-zinc-400 text-lg mb-8 leading-relaxed max-w-md">
                  We're building the first generative engine capable of handling
                  multiple distinct identities in a single frame with zero
                  bleed.
                </p>

                <div className="flex flex-wrap gap-4">
                  {[
                    {
                      icon: <Users size={14} className="text-[#d8b4fe]" />,
                      label: "3 Person Clusters",
                    },
                    {
                      icon: <Mic2 size={14} className="text-[#ec4899]" />,
                      label: "Studio Acoustics",
                    },
                    {
                      icon: <Camera size={14} className="text-[#d8b4fe]" />,
                      label: "Multi-Cam Sync",
                    },
                  ].map((badge, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-zinc-300 text-xs font-bold uppercase tracking-wider"
                    >
                      {badge.icon}
                      {badge.label}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side: Gridded Images */}
              <div className="flex-1 grid grid-cols-2 gap-4">
                {galleryImages.slice(0, 3).map((img, idx) => (
                  <div
                    key={idx}
                    className={`relative rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 
                      ${
                        idx === 0 ? "col-span-2 aspect-video" : "aspect-[2/3]" // Increased height for the two images in the row
                      }`}
                  >
                    <img
                      src={img}
                      alt={`Gallery ${idx}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* --- WAITLIST SECTION --- */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-24 flex flex-col items-center gap-6 text-center"
        >
          <div className="flex -space-x-3">
            {[d, e, f, h].map((img, i) => (
              <div
                key={i}
                className="w-12 h-12 rounded-full border-2 border-black overflow-hidden bg-zinc-800 shadow-xl"
              >
                <img
                  src={img}
                  className="w-full h-full object-cover"
                  alt="User"
                />
              </div>
            ))}
          </div>
          <p className="text-zinc-500 text-xs uppercase tracking-[0.3em]">
            Join 4,000+ creators in the{" "}
            <span className="text-[#ec4899] font-bold">Waitlist</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
