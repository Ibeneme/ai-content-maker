import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ShieldCheck,
  Crown,
  Zap,
  ZapOff,
  CreditCard,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";

interface SubscriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SubscriptionModal = ({ isOpen, onClose }: SubscriptionModalProps) => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "monthly"
  );

  const subPlans = [
    {
      name: "Starter",
      monthlyPrice: "$0",
      yearlyPrice: "$0",
      desc: "For hobbyists and explorers.",
      features: [
        "10 Credits/day",
        "Standard Speed",
        "Community Support",
        "Web Access",
      ],
      color: "border-zinc-800",
      icon: <ZapOff size={20} className="text-zinc-500" />,
      button: "Current Plan",
      disabled: true,
    },
    {
      name: "Pro",
      monthlyPrice: "$24",
      yearlyPrice: "$19",
      desc: "Maximum power for creators.",
      features: [
        "Unlimited 8K Gen",
        "Priority Neural Queue",
        "Commercial License",
        "Advanced Tools",
      ],
      color: "border-purple-500 shadow-[0_0_30px_rgba(168,85,247,0.15)]",
      icon: <Crown size={20} className="text-purple-400" />,
      button: "Upgrade to Pro",
      highlight: true,
    },
    {
      name: "Beyond",
      monthlyPrice: "$99",
      yearlyPrice: "$79",
      desc: "Infinite scaling for teams.",
      features: [
        "Custom API Access",
        "Dedicated Neural Node",
        "24/7 VIP Support",
        "Early Beta Access",
      ],
      color: "border-blue-500",
      icon: <Zap size={20} className="text-blue-400" />,
      button: "Join Beyond",
      highlight: false,
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/95 backdrop-blur-xl"
          />

          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 40 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-6xl max-h-[90vh] bg-[#080808] border border-white/10 rounded-[48px] overflow-y-auto shadow-[0_0_80px_rgba(0,0,0,1)] no-scrollbar"
          >
            <div className="p-8 lg:p-14">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
                <div className="text-center md:text-left">
                  <h3 className="text-4xl font-bold text-white tracking-tighter mb-2">
                    Elevate your vision.
                  </h3>
                  <p className="text-zinc-500 font-medium">
                    Select a plan to unlock the full potential of Neural Studio.
                  </p>
                </div>

                <div className="flex items-center gap-4 bg-white/5 p-1.5 rounded-2xl border border-white/5">
                  <button
                    onClick={() => setBillingCycle("monthly")}
                    className={`px-6 py-2 rounded-xl text-xs font-bold transition-all ${
                      billingCycle === "monthly"
                        ? "bg-white text-black shadow-lg"
                        : "text-zinc-500 hover:text-white"
                    }`}
                  >
                    MONTHLY
                  </button>
                  <button
                    onClick={() => setBillingCycle("yearly")}
                    className={`px-6 py-2 rounded-xl text-xs font-bold transition-all ${
                      billingCycle === "yearly"
                        ? "bg-white text-black shadow-lg"
                        : "text-zinc-500 hover:text-white"
                    }`}
                  >
                    YEARLY <span className="text-purple-500 ml-1">-20%</span>
                  </button>
                </div>

                <button
                  onClick={onClose}
                  className="p-3 bg-white/5 hover:bg-white/10 rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {subPlans.map((plan, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * idx, duration: 0.5 }}
                    whileHover={{ y: -8 }}
                    className={`relative flex flex-col p-10 rounded-[40px] border bg-[#0c0c0c] transition-all duration-500 ${plan.color}`}
                  >
                    {plan.highlight && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-[0.2em] shadow-xl">
                        Most Popular
                      </div>
                    )}

                    <div className="mb-8">
                      <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6">
                        {plan.icon}
                      </div>
                      <h4 className="text-zinc-500 text-xs font-bold uppercase tracking-[0.2em] mb-2">
                        {plan.name}
                      </h4>
                      <div className="flex items-baseline gap-1">
                        <span className="text-5xl font-bold text-white">
                          {billingCycle === "monthly"
                            ? plan.monthlyPrice
                            : plan.yearlyPrice}
                        </span>
                        <span className="text-zinc-600 text-sm font-bold">
                          /mo
                        </span>
                      </div>
                    </div>

                    <div className="space-y-5 flex-1 mb-12">
                      {plan.features.map((feat, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-3 text-sm font-semibold text-zinc-400"
                        >
                          <ShieldCheck
                            size={18}
                            className={
                              plan.highlight
                                ? "text-purple-500"
                                : "text-zinc-800"
                            }
                          />
                          {feat}
                        </div>
                      ))}
                    </div>

                    <button
                      disabled={plan.disabled}
                      className={`w-full py-5 rounded-[24px] font-bold text-xs uppercase tracking-widest transition-all active:scale-95 ${
                        plan.highlight
                          ? "bg-white text-black hover:bg-purple-500 hover:text-white"
                          : "bg-white/5 text-white hover:bg-white/10 border border-white/10"
                      } disabled:opacity-20 disabled:grayscale disabled:cursor-not-allowed`}
                    >
                      {plan.button}
                    </button>
                  </motion.div>
                ))}
              </div>

              <div className="mt-14 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-3 text-zinc-600">
                  <CreditCard size={18} />
                  <span className="text-[10px] font-bold uppercase tracking-widest">
                    Secure encrypted checkout
                  </span>
                </div>
                <button className="group flex items-center gap-3 text-white hover:text-purple-400 transition-all text-xs font-bold uppercase tracking-[0.2em]">
                  View All Platform Features
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-2 transition-transform"
                  />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default SubscriptionModal;
