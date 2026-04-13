import { motion } from "framer-motion";
import {
  Check,
  Lock,
  Zap,
  Shield,
  Crown,
  Users,
  Mic2,
  Camera,
} from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Identity Starter",
      price: "29",
      icon: <Shield className="text-[#d8b4fe]" size={24} />,
      features: [
        "1 Identity Lock Slot",
        "50 HD Generations / mo",
        "Standard Neural Processing",
        "Community Access",
      ],
      color: "border-[#d8b4fe]/20",
      glow: "group-hover:shadow-[0_0_30px_rgba(216,180,254,0.1)]",
    },
    {
      name: "Content Pro",
      price: "79",
      popular: true,
      icon: <Zap className="text-[#ec4899]" size={24} />,
      features: [
        "5 Identity Lock Slots",
        "Unlimited Generations",
        "Priority GPU Queue",
        "Commercial License",
        "Advanced Scene Pack",
      ],
      color: "border-[#ec4899]/40",
      glow: "group-hover:shadow-[0_0_40px_rgba(236,72,153,0.2)]",
    },
    {
      name: "Studio Elite",
      price: "199",
      icon: <Crown className="text-[#d8b4fe]" size={24} />,
      features: [
        "Unlimited Lock Slots",
        "8K Ultra-Res Output",
        "Dedicated Neural Server",
        "API Access",
        "Custom Style Training",
      ],
      color: "border-[#d8b4fe]/20",
      glow: "group-hover:shadow-[0_0_30px_rgba(216,180,254,0.1)]",
    },
  ];

  return (
    <section className="bg-black py-32 px-6 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#ec4899]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6"
          >
            Access{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d8b4fe] to-[#ec4899]">
              Pricing.
            </span>
          </motion.h2>
          <p className="text-zinc-500 max-w-xl mx-auto text-lg">
            Choose your processing power. All tiers feature our signature
            Identity Lock™ technology for zero likeness drift.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`group relative p-8 rounded-[2.5rem] bg-zinc-900/40 border-2 ${plan.color} backdrop-blur-xl transition-all duration-500 ${plan.glow}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#ec4899] text-black text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-widest shadow-[0_0_20px_#ec4899]">
                  Engine Choice
                </div>
              )}

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

              <button className="relative w-full py-4 rounded-2xl bg-white/5 border border-white/10 text-zinc-500 font-black uppercase tracking-widest text-xs flex items-center justify-center gap-2 cursor-not-allowed overflow-hidden group/btn">
                <Lock size={14} />
                Coming Soon
                <motion.div
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-[#d8b4fe]/10 to-transparent"
                />
              </button>
            </motion.div>
          ))}
        </div>

        {/* --- COMING SOON: STUDIO SECTION --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="group relative p-1 rounded-[3rem] bg-gradient-to-r from-[#d8b4fe]/20 via-[#ec4899]/20 to-[#d8b4fe]/20 overflow-hidden transition-all duration-700 group-hover:shadow-[0_0_50px_rgba(236,72,153,0.15)]"
        >
          <div className="relative p-8 md:p-12 rounded-[2.9rem] bg-zinc-950/90 backdrop-blur-3xl overflow-hidden">
            {/* Animated Background Pulse */}
            <div className="absolute -right-20 -top-20 w-96 h-96 bg-[#ec4899]/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ec4899]/10 border border-[#ec4899]/20 text-[#ec4899] text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                  <Zap size={12} className="fill-[#ec4899]" />
                  Internal Alpha Test
                </div>
                <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-6 leading-none">
                  Multi-Person & <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d8b4fe] to-[#ec4899]">
                    Podcast Studio
                  </span>{" "}
                  Generator
                </h3>
                <p className="text-zinc-400 text-lg mb-8 max-w-lg leading-relaxed">
                  Generate realistic multi-person scenes, including podcast
                  panels with multiple speakers and cinematic camera angles —
                  all with consistent faces, outfits, and environments.
                </p>

                <div className="flex flex-wrap gap-4">
                  {[
                    { icon: <Users size={14} />, label: "6+ Person Clusters" },
                    {
                      icon: <Mic2 size={14} />,
                      label: "Studio Acoustics Meta",
                    },
                    { icon: <Camera size={14} />, label: "Multi-Cam Sync" },
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

              <div className="relative bg-zinc-900/50 rounded-3xl border border-white/5 p-8 overflow-hidden group-hover:border-[#ec4899]/30 transition-colors duration-500">
                <div className="space-y-4">
                  {[
                    "Deep-Fake Neutral Studio Environments",
                    "Dynamic Multi-Speaker Eye-Contact",
                    "Synchronized Character Clothing Sets",
                    "Cinematic Lighting Consistency Control",
                  ].map((text, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 p-4 rounded-2xl bg-black/40 border border-white/5 transform transition-transform duration-500 hover:translate-x-2"
                    >
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#d8b4fe] to-[#ec4899] shadow-[0_0_10px_#ec4899]" />
                      <span className="text-zinc-400 text-sm font-medium">
                        {text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Visual Overlay for Coming Soon */}
                <div className="absolute inset-0 bg-zinc-950/60 backdrop-blur-[2px] flex items-center justify-center">
                  <div className="text-center">
                    <Lock className="mx-auto text-zinc-500 mb-4" size={32} />
                    <span className="text-white font-black uppercase tracking-[0.5em] text-sm">
                      Deploying Q3
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Guarantee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 flex flex-col items-center gap-4 text-center"
        >
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full border-2 border-black bg-zinc-800 flex items-center justify-center text-[10px] font-bold"
              >
                {String.fromCharCode(64 + i)}
              </div>
            ))}
          </div>
          <p className="text-zinc-500 text-xs uppercase tracking-[0.3em]">
            Join 4,000+ creators in the{" "}
            <span className="text-[#d8b4fe]">Waitlist</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
