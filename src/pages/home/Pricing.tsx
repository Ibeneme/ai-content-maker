import { motion } from "framer-motion";
import { Check, Lock, Zap, Shield, Crown } from "lucide-react";

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

              {/* COMING SOON BUTTON */}
              <button className="relative w-full py-4 rounded-2xl bg-white/5 border border-white/10 text-zinc-500 font-black uppercase tracking-widest text-xs flex items-center justify-center gap-2 cursor-not-allowed overflow-hidden group/btn">
                <Lock size={14} />
                Coming Soon
                {/* Button Scan Effect */}
                <motion.div
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-[#d8b4fe]/10 to-transparent"
                />
              </button>
            </motion.div>
          ))}
        </div>

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
