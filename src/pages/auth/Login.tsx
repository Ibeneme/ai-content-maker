import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  Lock,
  Mail,
  User,
  Fingerprint,
  ArrowLeft,
  Cpu,
} from "lucide-react";
import { Link } from "react-router-dom";

type AuthState = "login" | "signup" | "forgot" | "otp";

const Login = () => {
  const [authState, setAuthState] = useState<AuthState>("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Simple validation check for the "Coming Soon" state
  const isFormValid =
    email.includes("@") && (authState === "otp" || password.length > 5);

  const containerVariants = {
    initial: { opacity: 0, scale: 0.95, y: 20 },
    animate: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.95, y: -20 },
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6 relative overflow-hidden font-sans">
      {/* Background Mad Motion - Subtle Neural Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ec4899]/5 blur-[120px] rounded-full" />
      </div>

      <motion.div
        layout
        variants={containerVariants}
        initial="initial"
        animate="animate"
        className="relative z-10 w-full max-w-md bg-zinc-900/40 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
      >
        <AnimatePresence mode="wait">
          {/* --- HEADER --- */}
          <motion.div
            key={`${authState}-header`}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            className="mb-8"
          >
            <div className="w-12 h-12 bg-gradient-to-tr from-[#d8b4fe] to-[#ec4899] rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(236,72,153,0.3)]">
              {authState === "login" ? (
                <Lock size={24} />
              ) : (
                <Fingerprint size={24} />
              )}
            </div>
            <h1 className="text-3xl font-black uppercase tracking-tighter text-white">
              {authState === "login" && "System Access"}
              {authState === "signup" && "Initialize Identity"}
              {authState === "forgot" && "Reset Protocol"}
              {authState === "otp" && "Verification"}
            </h1>
            <p className="text-zinc-500 text-sm font-medium mt-2">
              {authState === "login" &&
                "Enter your neural credentials to continue."}
              {authState === "signup" && "Create your unique Likeness Anchor."}
              {authState === "forgot" && "Request a secure bypass code."}
              {authState === "otp" && "Enter the code sent to your terminal."}
            </p>
          </motion.div>

          {/* --- FORMS --- */}
          <motion.div
            key={`${authState}-form`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-4"
          >
            {authState === "signup" && (
              <div className="relative">
                <User
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
                  size={18}
                />
                <input
                  type="text"
                  placeholder="FULL NAME"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white text-sm focus:border-[#d8b4fe] outline-none transition-all font-black uppercase tracking-widest"
                />
              </div>
            )}

            <div className="relative">
              <Mail
                className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
                size={18}
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="EMAIL ADDRESS"
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white text-sm focus:border-[#d8b4fe] outline-none transition-all font-black uppercase tracking-widest"
              />
            </div>

            {authState !== "forgot" && authState !== "otp" && (
              <div className="relative">
                <Shield
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
                  size={18}
                />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="PASSWORD"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white text-sm focus:border-[#d8b4fe] outline-none transition-all font-black uppercase tracking-widest"
                />
              </div>
            )}

            {authState === "otp" && (
              <div className="flex gap-2 justify-between">
                {[1, 2, 3, 4].map((i) => (
                  <input
                    key={i}
                    type="text"
                    maxLength={1}
                    className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl text-center text-2xl font-black text-[#ec4899] outline-none focus:border-[#ec4899]"
                  />
                ))}
              </div>
            )}

            {/* --- ACTION BUTTON (LOCKED) --- */}
            <div className="relative pt-4 group">
              <button
                disabled={!isFormValid}
                className={`w-full py-5 rounded-2xl font-black text-xs tracking-[0.2em] uppercase transition-all flex items-center justify-center gap-2 
                  ${
                    isFormValid
                      ? "bg-[#ec4899] text-white shadow-[0_0_30px_rgba(236,72,153,0.3)] opacity-80 cursor-not-allowed"
                      : "bg-white/5 text-zinc-600 border border-white/5 cursor-not-allowed"
                  }`}
              >
                <Cpu size={16} className={isFormValid ? "animate-spin" : ""} />
                {authState === "login" && "Authorize Session"}
                {authState === "signup" && "Initiate Lock"}
                {authState === "forgot" && "Send Reset Link"}
                {authState === "otp" && "Verify Identity"}
              </button>
              {isFormValid && (
                <span className="absolute -top-1 -right-2 bg-white text-black text-[8px] font-black px-2 py-0.5 rounded rotate-12 uppercase">
                  Coming Soon
                </span>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* --- FOOTER LINKS --- */}
        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col items-center gap-4">
          {authState === "login" && (
            <>
              <button
                onClick={() => setAuthState("forgot")}
                className="text-[10px] font-black uppercase text-[#d8b4fe] tracking-widest hover:text-white transition-colors"
              >
                Forgot Access Protocol?
              </button>
              <p className="text-zinc-600 text-[10px] font-black uppercase tracking-widest">
                New to the system?{" "}
                <button
                  onClick={() => setAuthState("signup")}
                  className="text-white hover:text-[#ec4899]"
                >
                  Create Account
                </button>
              </p>
            </>
          )}

          {authState !== "login" && (
            <button
              onClick={() => setAuthState("login")}
              className="flex items-center gap-2 text-[10px] font-black uppercase text-zinc-500 hover:text-white transition-colors"
            >
              <ArrowLeft size={12} /> Return to Terminal
            </button>
          )}

          <Link
            to="/"
            className="text-[10px] font-black uppercase text-zinc-700 hover:text-zinc-400 mt-4 underline underline-offset-4"
          >
            Back to Neural Engine
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
