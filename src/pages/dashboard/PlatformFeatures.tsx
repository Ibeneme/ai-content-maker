import { motion } from "framer-motion";
import {
  Sparkles,
  Zap,
  ShieldCheck,
  Layers,
  Camera,
  Globe,
  CheckCircle2,
  Box,
  Maximize,
} from "lucide-react";

const PlatformFeatures = () => {
  const feedItems = [
    {
      title: "DIGITAL TWIN: ACTIVE",
      desc: "Neural mapping complete.",
      status: "Live Processing",
    },
    {
      title: "PRO: STUDIO LIGHTING",
      desc: "8K Octane render.",
      status: "Live Processing",
    },
    {
      title: "IDEATION: STYLE LOCK",
      desc: "Global style lock.",
      status: "Live Processing",
    },
    {
      title: "EDITORIAL: VOGUE",
      desc: "High-fashion synthesis.",
      status: "Live Processing",
    },
    {
      title: "TWIN: LIFESTYLE",
      desc: "Natural environment.",
      status: "Live Processing",
    },
    {
      title: "CINEMATIC: NOIR",
      desc: "Atmospheric depth.",
      status: "Live Processing",
    },
    {
      title: "AVATAR: FIDELITY",
      desc: "Skin-pore accuracy.",
      status: "Live Processing",
    },
    {
      title: "RENDER: ARCHITECTURAL",
      desc: "Spatial awareness.",
      status: "Live Processing",
    },
  ];

  const vaultItems = [
    { title: "Studio Twin", category: "Verified Output" },
    { title: "Neural Render", category: "Verified Output" },
    { title: "Pro Shoot", category: "Verified Output" },
    { title: "Chromatic", category: "Verified Output" },
    { title: "Deep Space", category: "Verified Output" },
  ];

  const steps = [
    {
      id: "01",
      title: "Upload Your Photo",
      text: "Start by uploading a clear photo of yourself. This becomes the foundation of every scene you generate.",
    },
    {
      id: "02",
      title: "Identity Lock System",
      text: "Your face is locked into our AI system. Unlike other tools, your features stay consistent and don't randomly change.",
    },
    {
      id: "03",
      title: "Generate Any Scene",
      text: "Choose any environment — city streets, luxury settings, fashion editorials, travel scenes.",
    },
    {
      id: "04",
      title: "Ultra-Realistic Results",
      text: "Our AI blends lighting, skin tone, and shadows naturally. The result looks like a real professional photoshoot.",
    },
    {
      id: "05",
      title: "Create Unlimited Content",
      text: "Generate multiple consistent scenes in minutes. Perfect for creators, influencers, and brands.",
    },
  ];

  return (
    <div className="bg-black text-white selection:bg-purple-500/30 overflow-x-hidden">
      {/* --- HERO SECTION --- */}
      <section className="relative pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] font-black uppercase tracking-widest mb-6">
              <Sparkles size={12} className="text-purple-400" />
              Create your digital twin
            </div>
            <h1 className="text-7xl md:text-8xl font-black tracking-tighter leading-[0.85] mb-8 uppercase">
              Your AI
              <br />
              Content
              <br />
              <span className="text-zinc-500">Studio</span>
            </h1>
            <p className="max-w-md text-zinc-400 text-lg font-medium leading-relaxed mb-10">
              The ultimate studio for consistent identity. Create your AI twin
              for professional photoshoots or generate hyper-consistent images
              for your wildest creative ideas.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="group relative">
                <button className="px-10 py-5 bg-white text-black font-black uppercase tracking-widest text-xs rounded-2xl hover:bg-purple-500 hover:text-white transition-all">
                  Launch Studio
                </button>
                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[9px] font-black text-zinc-600 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Coming Soon
                </span>
              </div>
              <div className="group relative">
                <button className="px-10 py-5 bg-transparent border border-white/10 text-white font-black uppercase tracking-widest text-xs rounded-2xl hover:bg-white/5 transition-all">
                  Book a Demo
                </button>
                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[9px] font-black text-purple-500 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Waitlist
                </span>
              </div>
            </div>
          </motion.div>

          {/* Scrolling Processing Feed */}
          <div className="relative h-[600px] overflow-hidden rounded-[40px] border border-white/5 bg-[#050505] shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10 pointer-events-none" />
            <motion.div
              animate={{ y: [0, -1200] }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="p-6 space-y-4"
            >
              {[...feedItems, ...feedItems, ...feedItems, ...feedItems].map(
                (item, i) => (
                  <div
                    key={i}
                    className="p-6 bg-[#0a0a0a] border border-white/5 rounded-3xl flex items-center justify-between group hover:border-purple-500/30 transition-all"
                  >
                    <div>
                      <h4 className="text-[10px] font-black text-white uppercase tracking-widest mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs text-zinc-500 font-bold">
                        {item.desc}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[9px] font-black text-purple-400 uppercase tracking-widest animate-pulse">
                        {item.status}
                      </span>
                      <div className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
                    </div>
                  </div>
                )
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- PROCESS SECTION --- */}
      <section className="py-32 px-6 border-t border-white/5 bg-[#030303]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-5xl font-black tracking-tighter mb-6 uppercase">
              From Photo to
              <br />
              Realistic Scene
            </h2>
            <p className="max-w-xl text-zinc-500 font-medium">
              Stop dealing with AI that changes your face every time you click
              generate. Lock your identity and master the scene.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step) => (
              <div key={step.id} className="relative group">
                <div className="text-4xl font-black text-zinc-800 mb-6 group-hover:text-purple-500 transition-colors uppercase">
                  {step.id}
                </div>
                <h4 className="text-sm font-black text-white uppercase tracking-widest mb-4">
                  {step.title}
                </h4>
                <p className="text-xs text-zinc-500 font-bold leading-relaxed">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ULTRA REALISTIC SECTION --- */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-12 bg-[#080808] border border-white/5 rounded-[40px] lg:col-span-2 flex flex-col justify-center">
            <h3 className="text-4xl font-black tracking-tight mb-6 uppercase">
              Ultra-Realistic
              <br />
              Scene Generation
            </h3>
            <p className="text-zinc-500 font-bold text-lg mb-8">
              High-fidelity pixels locked to your exact geometry for
              professional-grade content.
            </p>
            <div className="flex items-center gap-4 text-xs font-black uppercase tracking-widest text-white">
              <CheckCircle2 className="text-purple-500" /> Identity Verification
              System
            </div>
          </div>

          <div className="p-12 bg-gradient-to-br from-purple-900/20 to-black border border-purple-500/20 rounded-[40px] flex flex-col justify-end">
            <Layers className="text-purple-500 mb-6" size={40} />
            <h4 className="text-xl font-black mb-4 uppercase">Identity Lock</h4>
            <p className="text-zinc-500 text-sm font-bold uppercase">
              Upload Once. Create Always.
            </p>
          </div>

          {[
            {
              title: "Pro Scenes",
              icon: <Globe size={24} />,
              text: "100+ locations using one high-res anchor photo.",
            },
            {
              title: "Visual Fidelity",
              icon: <Camera size={24} />,
              text: "Realistic skin textures and iris light-bounce.",
            },
            {
              title: "Secure DNA",
              icon: <ShieldCheck size={24} />,
              text: "Local synthesis ensures private identity.",
            },
          ].map((feat, i) => (
            <div
              key={i}
              className="p-10 bg-[#080808] border border-white/5 rounded-[40px] hover:border-white/20 transition-all"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-8 text-zinc-400">
                {feat.icon}
              </div>
              <h4 className="font-black uppercase tracking-widest mb-4 text-white">
                {feat.title}
              </h4>
              <p className="text-zinc-500 text-sm font-bold leading-relaxed">
                {feat.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* --- NEURAL ASSET VAULT --- */}
      <section className="py-32 px-6 bg-[#030303] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-[10px] font-black text-purple-500 uppercase tracking-[0.3em] mb-4 block">
                Neural Asset Vault
              </span>
              <h2 className="text-6xl font-black tracking-tighter uppercase">
                The Studio
                <br />
                Output.
              </h2>
            </div>
            <div className="hidden md:block w-px h-24 bg-white/10" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {vaultItems.map((item, i) => (
              <div
                key={i}
                className="aspect-[3/4] bg-[#080808] border border-white/5 rounded-3xl p-6 flex flex-col justify-end group hover:border-purple-500/50 transition-all cursor-pointer"
              >
                <div className="w-full h-full border border-dashed border-white/10 rounded-xl mb-4 flex items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity">
                  <Box size={40} />
                </div>
                <h4 className="text-xs font-black uppercase tracking-widest text-white mb-1">
                  {item.title}
                </h4>
                <p className="text-[9px] font-black text-zinc-600 uppercase tracking-widest">
                  {item.category}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FULL FRAME FIDELITY --- */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto bg-white text-black rounded-[60px] p-12 md:p-24 flex flex-col md:flex-row items-center justify-between gap-16 overflow-hidden relative">
          <div className="absolute top-0 right-0 p-12 opacity-5">
            <Maximize size={200} />
          </div>
          <div className="z-10 flex-1">
            <h2 className="text-6xl font-black tracking-tighter leading-none mb-8 uppercase">
              Full-Frame
              <br />
              Fidelity
            </h2>
            <p className="text-xl font-bold uppercase tracking-tight mb-4">
              No Crop. Pure Detail.
            </p>
            <p className="text-zinc-500 font-bold max-w-md leading-relaxed">
              Every pixel is preserved. Our studio ensures your digital twin
              fits perfectly into any format without losing the edges of your
              creativity.
            </p>
          </div>
          <div className="z-10 bg-black text-white p-10 rounded-[40px] w-full md:w-80">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-[10px] font-black uppercase tracking-widest">
                Active Scan
              </span>
            </div>
            <div className="space-y-4">
              <div className="h-1 bg-white/10 rounded-full w-full" />
              <div className="h-1 bg-white/10 rounded-full w-[80%]" />
              <div className="h-1 bg-white/10 rounded-full w-[60%]" />
            </div>
          </div>
        </div>
      </section>

      {/* --- PRICING SECTION --- */}
      <section className="py-32 px-6 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-black tracking-tighter mb-6 uppercase">
              Access Pricing.
            </h2>
            <p className="text-zinc-500 font-medium uppercase tracking-tight">
              Choose your processing power. All tiers feature our signature
              Identity Lock technology for zero likeness drift.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Starter */}
            <div className="p-12 rounded-[48px] bg-black border border-white/5 flex flex-col relative group">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600 mb-2">
                Identity Starter
              </span>
              <div className="text-5xl font-black mb-10">
                $29<span className="text-lg text-zinc-700">/mo</span>
              </div>
              <ul className="space-y-6 flex-1 mb-12">
                {[
                  "1 Identity Lock Slot",
                  "50 HD Generations / mo",
                  "Standard Neural Processing",
                  "Community Access",
                ].map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-3 text-sm font-bold text-zinc-400"
                  >
                    <CheckCircle2 size={16} className="text-zinc-800" /> {f}
                  </li>
                ))}
              </ul>
              <div className="space-y-4">
                <button className="w-full py-5 border border-white/10 rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-white/5 transition-all opacity-50 cursor-not-allowed">
                  Coming Soon
                </button>
                <p className="text-center text-[9px] font-black uppercase text-zinc-700 tracking-widest">
                  Engine Choice
                </p>
              </div>
            </div>

            {/* Pro */}
            <div className="p-12 rounded-[48px] bg-[#0c0c0c] border border-purple-500/50 shadow-[0_0_50px_rgba(168,85,247,0.15)] flex flex-col relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8">
                <Zap className="text-purple-500" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-purple-400 mb-2">
                Content Pro
              </span>
              <div className="text-5xl font-black mb-10">
                $79<span className="text-lg text-zinc-700">/mo</span>
              </div>
              <ul className="space-y-6 flex-1 mb-12">
                {[
                  "5 Identity Lock Slots",
                  "Unlimited Generations",
                  "Priority GPU Queue",
                  "Commercial License",
                  "Advanced Scene Pack",
                ].map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-3 text-sm font-bold text-zinc-200"
                  >
                    <CheckCircle2 size={16} className="text-purple-500" /> {f}
                  </li>
                ))}
              </ul>
              <div className="space-y-4">
                <button className="w-full py-5 bg-purple-500 text-white rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-purple-400 transition-all">
                  Launch Studio
                </button>
                <p className="text-center text-[9px] font-black uppercase text-purple-400 tracking-widest">
                  Coming Soon
                </p>
              </div>
            </div>

            {/* Elite */}
            <div className="p-12 rounded-[48px] bg-black border border-white/5 flex flex-col">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600 mb-2">
                Studio Elite
              </span>
              <div className="text-5xl font-black mb-10">
                $199<span className="text-lg text-zinc-700">/mo</span>
              </div>
              <ul className="space-y-6 flex-1 mb-12">
                {[
                  "Unlimited Lock Slots",
                  "8K Ultra-Res Output",
                  "Dedicated Neural Server",
                  "API Access",
                  "Custom Style Training",
                ].map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-3 text-sm font-bold text-zinc-400"
                  >
                    <CheckCircle2 size={16} className="text-zinc-800" /> {f}
                  </li>
                ))}
              </ul>
              <div className="space-y-4">
                <button className="w-full py-5 border border-white/10 rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-white/5 transition-all opacity-50 cursor-not-allowed">
                  Coming Soon
                </button>
                <p className="text-center text-[9px] font-black uppercase text-zinc-700 tracking-widest">
                  ABCD
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlatformFeatures;
