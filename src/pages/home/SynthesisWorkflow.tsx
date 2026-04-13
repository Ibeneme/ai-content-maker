import { motion } from "framer-motion";
import { UserCheck, Fingerprint, Layers, Camera, Globe } from "lucide-react";

// Local Asset Imports
//import b from "../../assets/images/b.png";
import c from "../../assets/images/t.png";
import d from "../../assets/images/d.png";
import e from "../../assets/images/s.png";
import f from "../../assets/images/w.png";
import b from "../../assets/images/new_c.jpg";
// (Note: g and h are available if you want to swap any below)

const SynthesisWorkflow = () => {
  const phases = [
    {
      step: "01",
      title: "Upload Your Photo",
      desc: "Start by uploading a clear photo of yourself. This becomes the foundation of every scene you generate.",
      icon: <UserCheck size={32} />,
      color: "#d8b4fe",
      img: b, // Initial upload
    },
    {
      step: "02",
      title: "Identity Lock System",
      desc: "Your face is locked into our AI system. Unlike other tools, your features stay consistent and don’t randomly change.",
      icon: <Fingerprint size={32} />,
      color: "#ec4899",
      img: c, // Neural processing/Lock
    },
    {
      step: "03",
      title: "Generate Any Scene",
      desc: "Choose any environment — city streets, luxury settings, fashion editorials, travel scenes. The background changes, you stay the same.",
      icon: <Globe size={32} />,
      color: "#d8b4fe",
      img: d, // Scene variety
    },
    {
      step: "04",
      title: "Ultra-Realistic Results",
      desc: "Our AI blends lighting, skin tone, and shadows naturally. The result looks like a real professional photoshoot.",
      icon: <Camera size={32} />,
      color: "#ec4899",
      img: e, // Professional output
    },
    {
      step: "05",
      title: "Create Unlimited Content",
      desc: "Generate multiple consistent scenes in minutes. Perfect for creators, influencers, and brands who need high-quality visuals fast.",
      icon: <Layers size={32} />,
      color: "#d8b4fe",
      img: f, // Final variations
    },
  ];

  return (
    <section className="bg-black py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 text-white"
          >
            From Photo to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d8b4fe] to-[#ec4899]">
              Realistic Scene
            </span>
          </motion.h2>
          <p className="text-zinc-500 max-w-2xl mx-auto text-lg">
            Stop dealing with AI that changes your face every time you click
            generate. Lock your identity and master the scene.
          </p>
        </div>

        {/* 5-IN-1 VERTICAL STACK */}
        <div className="space-y-32 relative">
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#d8b4fe] via-[#ec4899] to-transparent opacity-20 -translate-x-1/2 hidden md:block" />

          {phases.map((phase, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`relative flex flex-col ${
                idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-12 md:gap-24`}
            >
              {/* Image Side */}
              <div className="flex-1 w-full group">
                <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,1)] bg-zinc-900">
                  <img
                    src={phase.img}
                    alt={phase.title}
                    className="w-full h-full object-cover  group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                </div>
              </div>

              {/* Text Side */}
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-5xl font-black text-white/10 tracking-tighter">
                    {phase.step}
                  </span>
                  <div
                    className="p-3 rounded-2xl bg-white/5 border border-white/10"
                    style={{ color: phase.color }}
                  >
                    {phase.icon}
                  </div>
                </div>
                <h3
                  className="text-3xl md:text-4xl font-black uppercase tracking-tighter"
                  style={{ color: phase.color }}
                >
                  {phase.title}
                </h3>
                <p className="text-zinc-400 text-lg leading-relaxed">
                  {phase.desc}
                </p>
              </div>

              {/* Center Dot for Desktop */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-black border-2 border-[#ec4899] z-20 hidden md:block shadow-[0_0_15px_#ec4899]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SynthesisWorkflow;
