import { motion } from "framer-motion";
import { Scan, Layers, Eye, ShieldCheck, Camera, Sparkles } from "lucide-react";

// Local Asset Imports
import g from "../../assets/images/g.png";
import h from "../../assets/images/h.png";
import j from "../../assets/images/j.png";
import k from "../../assets/images/k.png";
import l from "../../assets/images/l.png";
import m from "../../assets/images/m.png";
import n from "../../assets/images/n.png";

const Features = () => {
  const images = {
    locked: g, 
    render: h, 
    depth: j,  
  };

  return (
    <div className="bg-black text-white w-full overflow-hidden min-h-[100dvh]">
      {/* SECTION 1: BENTO GRID */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="md:col-span-2 p-8 rounded-3xl bg-zinc-900/40 border border-white/5 relative overflow-hidden group min-h-[350px]">
            <div className="relative z-20">
              <Camera className="text-[#ec4899] mb-4" size={32} />
              <h3 className="text-4xl font-black mb-2 uppercase tracking-tighter leading-none">
                Ultra-Realistic <br /> Scene Generation
              </h3>
              <p className="text-zinc-500 max-w-md text-lg mt-4">
                High-fidelity pixels locked to your exact geometry for professional-grade content.
              </p>
            </div>
            {/* Background Image: COVER */}
            <img 
              src={k} 
              className="absolute inset-0 w-full h-full opacity-20 grayscale group-hover:opacity-40 group-hover:scale-110 transition-all duration-1000 object-cover" 
              alt=""
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent z-10" />
          </div>

          <div className="p-8 rounded-3xl bg-[#d8b4fe]/10 border border-[#d8b4fe]/20 flex flex-col justify-between group relative overflow-hidden min-h-[350px]">
            <Sparkles className="text-[#d8b4fe] group-hover:rotate-12 transition-transform relative z-20" size={32} />
            <div className="relative z-20">
              <h3 className="text-2xl font-black uppercase tracking-tighter">Your Photo. <br /> Reimagined.</h3>
              <p className="text-zinc-400 text-sm mt-2">Cinematic environments without losing a single facial detail.</p>
            </div>
            {/* Background Image: COVER */}
            <img 
              src={l} 
              className="absolute inset-0 w-full h-full opacity-10 grayscale group-hover:opacity-30 transition-all duration-1000 object-cover" 
              alt=""
            />
          </div>
        </motion.div>
      </section>

      {/* SECTION 2: FULL-WIDTH SCANNER (IMAGE COVER) */}
      <section className="relative py-12 md:py-24 bg-zinc-900/10 border-y border-white/5 w-full">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col gap-12">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-center md:text-left space-y-4"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ec4899]/10 border border-[#ec4899]/20 text-[#ec4899] text-[10px] font-black tracking-widest uppercase">
                <Scan size={14} /> Identity Verification System
              </div>
              <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9]">
                Upload Once. <span className="text-[#d8b4fe]">Create Always.</span>
              </h2>
            </motion.div>

            {/* THE DIV: FULL WIDTH + COVER */}
            <motion.div
              className="relative w-full aspect-video rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-white/10 bg-zinc-900 shadow-[0_0_100px_rgba(236,72,153,0.1)]"
              whileHover={{ borderColor: "rgba(236,72,153,0.3)" }}
            >
              {/* Image FITS the div as a COVER */}
              <img
                src={images.locked}
                className="w-full h-full object-cover opacity-80 transition-all duration-1000 group-hover:scale-105"
                alt="Studio Hero Asset"
              />

              {/* Laser Scan Line Overlay */}
              <motion.div
                animate={{ top: ["0%", "100%", "0%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#ec4899] to-transparent shadow-[0_0_40px_#ec4899] z-20"
              />

              {/* Viewfinder UI */}
              <div className="absolute inset-0 border-[20px] border-black/20 pointer-events-none" />
              <div className="absolute top-10 left-10 w-12 h-12 border-t-4 border-l-4 border-white/40" />
              <div className="absolute top-10 right-10 w-12 h-12 border-t-4 border-r-4 border-white/40" />
              <div className="absolute bottom-10 left-10 w-12 h-12 border-b-4 border-l-4 border-white/40" />
              <div className="absolute bottom-10 right-10 w-12 h-12 border-b-4 border-r-4 border-white/40" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3: SPEC CARDS WITH COVER BACKGROUNDS */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <Layers />, title: "Pro Scenes", desc: "100+ locations using one high-res anchor photo.", img: m },
            { icon: <Eye />, title: "Visual Fidelity", desc: "Realistic skin textures and iris light-bounce.", img: n },
            { icon: <ShieldCheck />, title: "Secure DNA", desc: "Local synthesis ensures private identity.", img: h },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="group p-8 bg-zinc-900/40 hover:bg-zinc-900/60 rounded-3xl transition-all border border-white/5 relative overflow-hidden min-h-[250px]"
            >
              <div className="relative z-20">
                <div className="text-[#d8b4fe] mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h4 className="text-2xl font-black uppercase mb-2 tracking-tight">{item.title}</h4>
                <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
              {/* Subtle background: COVER */}
              <img 
                src={item.img} 
                className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-10 transition-all duration-700 object-cover grayscale" 
                alt="" 
              />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Features;