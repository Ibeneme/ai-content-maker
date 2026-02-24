import { motion } from "framer-motion";
import { Scan, Layers, Eye, ShieldCheck, Camera, Sparkles } from "lucide-react";

const Features = () => {
  const images = {
    locked:
      "https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=800",
    render:
      "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=800",
    depth:
      "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800",
  };

  return (
    <div className="bg-black text-white w-full overflow-hidden">
      {/* SECTION 1: THE CORE SPECS (Bento Grid) */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="md:col-span-2 p-8 rounded-3xl bg-zinc-900/40 border border-white/5 relative overflow-hidden group">
            <div className="relative z-10">
              <Camera className="text-[#ec4899] mb-4" size={32} />
              <h3 className="text-3xl font-black mb-2 uppercase tracking-tighter">
                Generate ultra-realistic scenes
              </h3>
              <p className="text-zinc-500 max-w-md text-lg">
                Our generator captures the raw essence of your source photo.
                It’s not just an AI face; it's your exact geometry locked into
                high-fidelity pixels for professional-grade content.
              </p>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#ec4899]/10 blur-[80px] -z-0 group-hover:bg-[#ec4899]/20 transition-all" />
          </div>

          <div className="p-8 rounded-3xl bg-[#d8b4fe]/10 border border-[#d8b4fe]/20 flex flex-col justify-between group">
            <Sparkles
              className="text-[#d8b4fe] group-hover:rotate-12 transition-transform"
              size={32}
            />
            <div>
              <h3 className="text-xl font-black uppercase tracking-tighter">
              Your Photo. Reimagined — Not Replaced.
              </h3>
              <p className="text-zinc-400 text-sm mt-2">
                Instantly place yourself into cinematic, editorial, or surreal
                environments without losing a single facial detail.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* SECTION 2: THE "PHOTO LOCK" SCANNER (Interactive Visual) */}
      <section className="relative py-24 bg-zinc-900/20 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ec4899]/10 border border-[#ec4899]/20 text-[#ec4899] text-[10px] font-black tracking-widest uppercase">
              <Scan size={14} /> Neural Content Mapping v2.4
            </div>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
            Upload Once.  <br />{" "}
              <span className="text-[#d8b4fe]">Create Anything.</span>
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Every generation is cross-referenced against your primary facial
              anchor. Whether you change the outfit, the lighting, or the
              location, our engine ensures the portrait stays **consistently
              you** in every shot.
            </p>
            <div className="flex flex-wrap gap-4">
              {["Likeness Lock", "Geometric Precision", "Skin Fidelity"].map(
                (tag) => (
                  <div
                    key={tag}
                    className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-[10px] font-bold text-[#d8b4fe] uppercase tracking-tighter"
                  >
                    {tag}: 100%
                  </div>
                )
              )}
            </div>
          </motion.div>

          <motion.div
            className="relative rounded-3xl overflow-hidden aspect-square md:aspect-video border border-white/10 shadow-[0_0_50px_rgba(236,72,153,0.1)]"
            whileHover={{ scale: 1.02 }}
          >
            <img
              src={images.locked}
              className="w-full h-full object-cover opacity-70 grayscale hover:grayscale-0 transition-all duration-700"
              alt="Generator preview"
            />
            <motion.div
              animate={{ top: ["0%", "100%", "0%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute left-0 right-0 h-[2px] bg-[#ec4899] shadow-[0_0_20px_#ec4899] z-20"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: THE SPEC LIST (Content Creator Capabilities) */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              icon: <Layers />,
              title: "Realistic Scenes",
              desc: "Generate an entire content series across 100+ locations using just one high-res anchor photo.",
            },
            {
              icon: <Eye />,
              title: "Cinematic Fidelity",
              desc: "Maintain realistic skin textures, iris light-bounce, and depth-of-field in every automated render.",
            },
            {
              icon: <ShieldCheck />,
              title: "Zero Identity Loss",
              desc: "Your unique facial DNA is synthesized locally—your identity is for your content only.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="group p-6 hover:bg-white/5 rounded-2xl transition-all border border-transparent hover:border-white/5"
            >
              <div className="w-12 h-12 rounded-xl bg-zinc-900 flex items-center justify-center text-[#d8b4fe] mb-6 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(216,180,254,0.1)]">
                {item.icon}
              </div>
              <h4 className="text-xl font-black uppercase mb-2 leading-tight tracking-tight">
                {item.title}
              </h4>
              <p className="text-zinc-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Features;
