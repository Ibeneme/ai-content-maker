import { motion } from "framer-motion";
import { Camera, Zap, Maximize2 } from "lucide-react";

// Local Asset Imports
import a from "../../assets/images/a.png";
import b from "../../assets/images/b.png";
import c from "../../assets/images/c.png";
import d from "../../assets/images/d.png";
import e from "../../assets/images/e.png";
import f from "../../assets/images/f.png";
import g from "../../assets/images/g.png";
import h from "../../assets/images/h.png";
import j from "../../assets/images/j.png";
import k from "../../assets/images/k.png";
import l from "../../assets/images/l.png";
import m from "../../assets/images/m.png";
import n from "../../assets/images/n.png";

const Gallery = () => {
  const userGenerations = [
    { id: 1, type: "Studio Twin", url: a, span: "md:col-span-2 md:row-span-2" },
    { id: 2, type: "Portrait Lock", url: b, span: "col-span-1" },
    { id: 3, type: "Neural Render", url: c, span: "col-span-1" },
    { id: 4, type: "Consistency Engine", url: d, span: "md:col-span-1" },
    { id: 5, type: "Idea Synthesis", url: e, span: "md:col-span-1" },
    { id: 6, type: "Kinetic Motion", url: f, span: "md:col-span-2" },
    { id: 7, type: "Pro Shoot", url: g, span: "col-span-1" },
    { id: 8, type: "Identity Lock", url: h, span: "col-span-1" },
    { id: 9, type: "Fashion Editorial", url: j, span: "md:col-span-2" },
    { id: 10, type: "Commercial Concept", url: k, span: "col-span-1" },
    { id: 11, type: "Lighting Study", url: l, span: "col-span-1" },
    { id: 12, type: "Vogue Protocol", url: m, span: "md:col-span-2" },
  ];

  // Using the final set for the stability showcase
  const variants = [g, h, k, n];

  return (
    <div className="bg-black min-h-screen pt-32 pb-20">
      {/* SECTION 1: HEADER */}
      <section className="max-w-7xl mx-auto px-6 mb-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#ec4899]/30 bg-[#ec4899]/5 text-[#ec4899] text-[10px] font-black tracking-widest uppercase mb-8"
        >
          <Camera size={14} /> Neural Asset Vault
        </motion.div>
        <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-[0.85] mb-8 text-white">
          The{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d8b4fe] to-[#ec4899]">
            Studio
          </span>{" "}
          <br /> Output.
        </h1>
      </section>

      {/* SECTION 2: EXPANDED MASONRY GRID */}
      <section className="max-w-[1600px] mx-auto px-6 mb-40">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[300px]">
          {userGenerations.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className={`relative rounded-[2.5rem] overflow-hidden border border-white/5 group cursor-pointer bg-zinc-900 ${img.span}`}
            >
              <img
                src={img.url}
                alt={img.type}
                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="absolute inset-0 flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="flex justify-between items-end">
                  <div>
                    <span className="text-[10px] font-black text-[#d8b4fe] uppercase tracking-widest block mb-1">
                      {img.type}
                    </span>
                    <h4 className="text-white font-black text-xl uppercase tracking-tighter">
                      Verified Output
                    </h4>
                  </div>
                  <div className="p-3 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 text-white">
                    <Maximize2 size={18} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 3: CONSISTENCY PROOF (NO CUTTING) */}
      <section className="max-w-7xl mx-auto px-6 py-24 rounded-[4rem] bg-zinc-900/20 border border-white/5 relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ec4899]/10 border border-[#ec4899]/20 text-[#ec4899] text-[10px] font-black tracking-widest uppercase">
              <Zap size={14} /> Full-Frame Fidelity
            </div>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none text-white">
              No Crop. <br />{" "}
              <span className="text-[#d8b4fe]">Pure Detail.</span>
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Every pixel is preserved. Our studio ensures your digital twin
              fits perfectly into any format without losing the edges of your
              creativity.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {variants.map((url, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="aspect-[4/5] rounded-3xl border border-white/10 overflow-hidden bg-black flex items-center justify-center p-2"
              >
                <img
                  src={url}
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 rounded-3xl"
                  alt="Full resolution"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
