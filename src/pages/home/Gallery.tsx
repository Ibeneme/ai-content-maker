import { motion } from "framer-motion";
import { Camera, Zap, Maximize2 } from "lucide-react";

const Gallery = () => {
  const userGenerations = [
    {
      id: 1,
      type: "High-Performance",
      url: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800&auto=format&fit=crop",
      span: "md:col-span-2 md:row-span-2", // Super Realistic Car
    },
    {
      id: 2,
      type: "Portrait Lock",
      url: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop",
      span: "col-span-1", // Adult Male Portrait
    },
    {
      id: 3,
      type: "Neural Athlete",
      url: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=800&auto=format&fit=crop",
      span: "col-span-1", // Sports/Player
    },
    {
      id: 4,
      type: "Wild Synthesis",
      url: "https://images.unsplash.com/photo-1541336032412-2048a678540d?q=80&w=800&auto=format&fit=crop",
      span: "md:col-span-1", // Animal/Dog
    },
    {
      id: 5,
      type: "Innocence Engine",
      url: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=800&auto=format&fit=crop",
      span: "md:col-span-1", // Child
    },
    {
      id: 6,
      type: "Kinetic Motion",
      url: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=800&auto=format&fit=crop",
      span: "md:col-span-2", // Footballer/Player
    },
  ];

  const variants = [
    "https://images.unsplash.com/photo-1543852786-1cf6624b9987?q=80&w=400&auto=format&fit=crop", // Cat/Animal
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop", // Fashion Adult
    "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=400&auto=format&fit=crop", // Frenchie Dog
    "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=400&auto=format&fit=crop", // Smiling Adult
  ];

  return (
    <div className="bg-black min-h-screen pt-32 pb-20">
      {/* SECTION 1: THE SHOWCASE HERO */}
      <section className="max-w-7xl mx-auto px-6 mb-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#ec4899]/30 bg-[#ec4899]/5 text-[#ec4899] text-[10px] font-black tracking-widest uppercase mb-8"
        >
          <Camera size={14} /> Global Asset Archive
        </motion.div>
        <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-[0.85] mb-8">
          Gallery{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d8b4fe] to-[#ec4899]">
            of
          </span>{" "}
          <br /> Contents.
        </h1>
        <p className="max-w-2xl mx-auto text-zinc-500 text-lg md:text-xl font-medium">
          From high-speed supercars to deep-focus animal portraits. Everything
          you see is <span className="text-white">Generated</span>, locked, and
          perfectly consistent.
        </p>
      </section>

      {/* SECTION 2: THE MAD MASONRY GRID */}
      <section className="max-w-[1600px] mx-auto px-6 mb-40">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[300px]">
          {userGenerations.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 50 }}
              className={`relative rounded-[2.5rem] overflow-hidden border border-white/5 group cursor-pointer ${img.span}`}
            >
              {/* VIBRANT COLOR IMAGES */}
              <img
                src={img.url}
                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
              />

              {/* Neural Mesh Overlay - Appears on Hover */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* CONTENT OVERLAY */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="flex justify-between items-end">
                  <div>
                    <span className="text-[10px] font-black text-[#d8b4fe] uppercase tracking-widest block mb-1">
                      {img.type}
                    </span>
                    <h4 className="text-white font-black text-2xl uppercase tracking-tighter">
                      Verified Synthesis
                    </h4>
                  </div>
                  <div className="p-3 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 text-white shadow-2xl">
                    <Maximize2 size={20} />
                  </div>
                </div>
              </div>

              {/* FUCHSIA SCAN LINE */}
              <motion.div
                animate={{ top: ["-5%", "105%"] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#ec4899] to-transparent shadow-[0_0_25px_#ec4899] z-20 opacity-0 group-hover:opacity-100"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 3: CONSISTENCY PROOF (Animals, Adults, Children) */}
      <section className="max-w-7xl mx-auto px-6 py-24 rounded-[4rem] bg-zinc-900/20 border border-white/5 relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ec4899]/10 border border-[#ec4899]/20 text-[#ec4899] text-[10px] font-black tracking-widest uppercase">
              <Zap size={14} /> Identity Verification
            </div>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
              Cross-Genre <br />{" "}
              <span className="text-[#d8b4fe]">Stability.</span>
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Our AI Content Maker doesn't just do people. It locks the visual
              DNA of any subject—be it a player on the field, a vintage car, or
              your family pet—ensuring the output remains fixed and
              ultra-realistic.
            </p>
            <div className="flex flex-wrap gap-4">
              {["Likeness Secure", "Fixed Geometry", "8K Output"].map((tag) => (
                <div
                  key={tag}
                  className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-black text-zinc-300 uppercase tracking-widest"
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {variants.map((url, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? 2 : -2 }}
                className="aspect-[4/5] rounded-3xl border border-white/10 overflow-hidden bg-zinc-900 shadow-2xl"
              >
                <img
                  src={url}
                  className="w-full h-full object-cover group-hover:opacity-100"
                  alt="Synthetic Variant"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Background Subtle Watermark */}
        <div className="absolute -bottom-10 -left-10 text-[15rem] font-black text-white/5 select-none pointer-events-none uppercase tracking-tighter">
          System
        </div>
      </section>
    </div>
  );
};

export default Gallery;
