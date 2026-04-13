import  { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Download,
  Share2,
  Maximize2,
  X,
  Filter,
  Search,
  Box,
  Trash2,
  Info,
} from "lucide-react";

// Mock Data for the Gallery
const MOCK_CREATIONS = [
  {
    id: 1,
    title: "Neural Editorial v1",
    date: "2026-03-10",
    dimensions: "2048x2048",
    size: "4.2MB",
    prompt:
      "High fashion vogue style, digital twin identity lock, studio lighting, deep shadows.",
  },
  {
    id: 2,
    title: "Cinematic Noir",
    date: "2026-03-09",
    dimensions: "4096x2048",
    size: "8.1MB",
    prompt:
      "Atmospheric depth, cinematic noir, rainy city streets, neon reflections, 8k render.",
  },
  {
    id: 3,
    title: "Architectural Space",
    date: "2026-03-08",
    dimensions: "2048x2048",
    size: "3.8MB",
    prompt:
      "Minimalist brutalist architecture, digital twin standing in center, morning sunlight.",
  },
  {
    id: 4,
    title: "Studio Portrait",
    date: "2026-03-07",
    dimensions: "2048x2048",
    size: "4.0MB",
    prompt:
      "Professional headshot, soft box lighting, identity lock verified, neutral background.",
  },
  {
    id: 5,
    title: "Cyberpunk Synthesis",
    date: "2026-03-06",
    dimensions: "1024x1024",
    size: "2.1MB",
    prompt:
      "Cyberpunk aesthetic, high fidelity skin textures, glowing neural maps on face.",
  },
  {
    id: 6,
    title: "Lifestyle Render",
    date: "2026-03-05",
    dimensions: "2048x2048",
    size: "5.5MB",
    prompt:
      "Natural environment, lifestyle photography, blurred forest background, soft daylight.",
  },
];

const CreationsPage = () => {
  const [selectedImage, setSelectedImage] = useState<
    (typeof MOCK_CREATIONS)[0] | null
  >(null);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-[#020202] text-white selection:bg-purple-500/30">
      {/* --- GALLERY HEADER --- */}
      <header className="border-b border-white/5 bg-black/40 backdrop-blur-xl sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <h1 className="font-black tracking-tighter text-xl uppercase">
              Neural Archive
            </h1>
            <div className="hidden md:flex items-center gap-4 border-l border-white/10 pl-6">
              <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">
                Total: 142 Assets
              </span>
              <span className="text-[10px] font-black text-purple-500 uppercase tracking-widest">
                Storage: 82%
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative hidden sm:block">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600"
                size={16}
              />
              <input
                type="text"
                placeholder="Search archive..."
                className="bg-white/5 border border-white/10 rounded-xl py-2 pl-12 pr-4 text-xs font-bold focus:border-purple-500 transition-all outline-none w-64"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all">
              <Filter size={18} />
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* --- GRID --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {MOCK_CREATIONS.map((img) => (
            <motion.div
              layoutId={`card-${img.id}`}
              key={img.id}
              onClick={() => setSelectedImage(img)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              className="group relative aspect-square bg-[#080808] border border-white/5 rounded-[32px] overflow-hidden cursor-pointer"
            >
              {/* Placeholder for actual image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-zinc-900 to-black flex items-center justify-center">
                <Box
                  size={40}
                  className="text-zinc-800 group-hover:text-purple-500/50 transition-colors"
                />
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-8">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-black uppercase tracking-widest mb-1">
                      {img.title}
                    </h4>
                    <p className="text-[9px] font-black text-zinc-400 uppercase tracking-widest">
                      {img.date}
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center">
                    <Maximize2 size={18} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      {/* --- VIEW MODAL --- */}
      <AnimatePresence>
        {selectedImage && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="absolute inset-0 bg-black/95 backdrop-blur-2xl"
            />

            <motion.div
              layoutId={`card-${selectedImage.id}`}
              className="relative w-full max-w-6xl h-full max-h-[85vh] bg-[#050505] border border-white/10 rounded-[48px] overflow-hidden flex flex-col lg:flex-row shadow-[0_0_80px_rgba(0,0,0,1)]"
            >
              {/* Image Preview Area */}
              <div className="flex-1 bg-black flex items-center justify-center p-8 relative">
                <div className="absolute top-8 left-8 flex gap-3">
                  <div className="px-3 py-1 bg-black/50 backdrop-blur-md rounded-full border border-white/10 text-[9px] font-black uppercase tracking-widest">
                    HD Verified
                  </div>
                </div>
                <div className="w-full h-full border border-dashed border-white/5 rounded-3xl flex items-center justify-center">
                  <Box size={80} className="text-zinc-900" />
                  <span className="absolute text-zinc-800 font-black uppercase tracking-widest text-[10px]">
                    Preview Render System
                  </span>
                </div>
              </div>

              {/* Sidebar / Info */}
              <div className="w-full lg:w-96 border-l border-white/5 p-10 flex flex-col overflow-y-auto">
                <div className="flex items-center justify-between mb-10">
                  <h3 className="text-xl font-black uppercase tracking-tighter">
                    Asset Intel
                  </h3>
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="p-2 hover:bg-white/5 rounded-full transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="space-y-8 flex-1">
                  <div>
                    <h4 className="text-[10px] font-black text-zinc-600 uppercase tracking-widest mb-3">
                      Generation Prompt
                    </h4>
                    <p className="text-xs font-bold leading-relaxed text-zinc-300 bg-white/5 p-4 rounded-2xl border border-white/5">
                      {selectedImage.prompt}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-white/5 rounded-2xl border border-white/5 text-center">
                      <div className="text-[9px] font-black text-zinc-600 uppercase tracking-widest mb-1">
                        Resolution
                      </div>
                      <div className="text-xs font-black uppercase">
                        {selectedImage.dimensions}
                      </div>
                    </div>
                    <div className="p-4 bg-white/5 rounded-2xl border border-white/5 text-center">
                      <div className="text-[9px] font-black text-zinc-600 uppercase tracking-widest mb-1">
                        File Size
                      </div>
                      <div className="text-xs font-black uppercase">
                        {selectedImage.size}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <button className="w-full py-4 bg-white text-black rounded-2xl font-black uppercase tracking-widest text-[11px] flex items-center justify-center gap-3 hover:bg-purple-500 hover:text-white transition-all">
                      <Download size={16} /> Download Asset
                    </button>
                    <button className="w-full py-4 bg-white/5 border border-white/10 text-white rounded-2xl font-black uppercase tracking-widest text-[11px] flex items-center justify-center gap-3 hover:bg-white/10 transition-all">
                      <Share2 size={16} /> Share Synthesis
                    </button>
                  </div>
                </div>

                <div className="pt-8 border-t border-white/5 mt-8 flex items-center justify-between">
                  <button className="flex items-center gap-2 text-zinc-600 hover:text-pink-500 transition-colors text-[10px] font-black uppercase tracking-widest">
                    <Trash2 size={14} /> Delete Archive
                  </button>
                  <button className="flex items-center gap-2 text-zinc-600 hover:text-white transition-colors text-[10px] font-black uppercase tracking-widest">
                    <Info size={14} /> Full Meta
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CreationsPage;
