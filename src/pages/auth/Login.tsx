import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  Shield,
  Mail,
  User,
  Fingerprint,
  ArrowLeft,
  Cpu,
  Lock,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  loginUser,
  registerUser,
  verifyOtp,
  resendOtp,
  clearError,
} from "../../redux/slices/authSlice";
import { type AppDispatch, type RootState } from "../../redux/store";

type AuthState = "login" | "signup" | "otp";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const otpRef = useRef<HTMLInputElement>(null);

  const { loading, error, otpSent, token } = useSelector(
    (state: RootState) => state.auth
  );

  const [authState, setAuthState] = useState<AuthState>("login");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [otp, setOtp] = useState("");
  const [resendTimer, setResendTimer] = useState(0);

  useEffect(() => {
    if (token) 
      navigate("/dashboard");
  }, [token, navigate]);
  
  useEffect(() => {
    dispatch(clearError());
  }, [authState, dispatch]);

  useEffect(() => {
    if (otpSent) {
      setAuthState("otp");
      setTimeout(() => otpRef.current?.focus(), 150);
    }
  }, [otpSent]);

  useEffect(() => {
    let interval: any;
    if (resendTimer > 0)
      interval = setInterval(() => setResendTimer((t) => t - 1), 1000);
    return () => clearInterval(interval);
  }, [resendTimer]);

  const handleAction = async () => {
    console.log("🚀 Action:", authState);
    if (authState === "login") dispatch(loginUser(email));
    else if (authState === "signup")
      dispatch(
        registerUser({ firstName, lastName, email, phoneNumber: "N/A" })
      );
    else if (authState === "otp") dispatch(verifyOtp({ email, otp }));
  };

  const handleResend = () => {
    if (resendTimer === 0) {
      dispatch(resendOtp(email));
      setResendTimer(60);
    }
  };

  const isFormValid =
    email.includes("@") &&
    (authState === "otp"
      ? otp.length === 6
      : authState === "login"
      ? email.length > 5
      : firstName.length > 1 && lastName.length > 1);

  const inputVariants: Variants = {
    hidden: { opacity: 0, x: -15 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.4 },
    }),
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
        <motion.div
          animate={{ opacity: [0.03, 0.07, 0.03] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#ec4899]/10 blur-[100px] rounded-full"
        />
      </div>

      <motion.div
        layout
        className={`relative z-10 w-full max-w-md bg-zinc-900/40 backdrop-blur-3xl border ${
          loading ? "border-[#ec4899]/50" : "border-white/10"
        } rounded-[2.5rem] p-8 md:p-12 shadow-2xl`}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={authState}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <div className="mb-8">
              <div className="w-12 h-12 bg-gradient-to-tr from-[#d8b4fe] to-[#ec4899] rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                {authState === "login" ? (
                  <Lock size={22} color="white" />
                ) : (
                  <Fingerprint size={22} color="white" />
                )}
              </div>
              <h1 className="text-3xl font-black uppercase text-white tracking-tighter">
                {authState === "login"
                  ? "System Access"
                  : authState === "signup"
                  ? "Initialize"
                  : "Verify"}
              </h1>
              {error && (
                <p className="text-red-500 text-[10px] font-black mt-3 uppercase tracking-widest bg-red-500/10 p-2 rounded-lg border border-red-500/20">
                  {error}
                </p>
              )}
            </div>

            <div className="space-y-4">
              {authState === "signup" && (
                <div className="flex gap-4">
                  <motion.div
                    custom={1}
                    variants={inputVariants}
                    initial="hidden"
                    animate="visible"
                    className="relative flex-1"
                  >
                    <User
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
                      size={14}
                    />
                    <input
                      type="text"
                      placeholder="FIRST"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-10 pr-4 text-white text-[10px] font-black uppercase tracking-widest focus:border-[#d8b4fe] outline-none"
                    />
                  </motion.div>
                  <motion.div
                    custom={2}
                    variants={inputVariants}
                    initial="hidden"
                    animate="visible"
                    className="relative flex-1"
                  >
                    <input
                      type="text"
                      placeholder="LAST"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-4 text-white text-[10px] font-black uppercase tracking-widest focus:border-[#d8b4fe] outline-none"
                    />
                  </motion.div>
                </div>
              )}

              {authState !== "otp" && (
                <motion.div
                  custom={3}
                  variants={inputVariants}
                  initial="hidden"
                  animate="visible"
                  className="relative"
                >
                  <Mail
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
                    size={16}
                  />
                  <input
                    type="email"
                    placeholder="EMAIL ADDRESS"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white text-[10px] font-black uppercase tracking-widest focus:border-[#d8b4fe] outline-none"
                  />
                </motion.div>
              )}

              {authState === "otp" && (
                <div className="space-y-4">
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="relative"
                  >
                    <Shield
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-[#ec4899]"
                      size={18}
                    />
                    <input
                      ref={otpRef}
                      type="text"
                      maxLength={6}
                      placeholder="000000"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      className="w-full bg-white/5 border border-[#ec4899]/50 rounded-2xl py-6 pl-12 text-[#ec4899] text-2xl text-center font-black tracking-[0.6em] outline-none"
                    />
                  </motion.div>
                  <button
                    onClick={handleResend}
                    disabled={resendTimer > 0 || loading}
                    className="w-full text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 hover:text-white disabled:opacity-30"
                  >
                    {resendTimer > 0
                      ? `Resend in ${resendTimer}s`
                      : "Request New Code"}
                  </button>
                </div>
              )}

              <motion.button
                whileTap={{ scale: 0.98 }}
                disabled={!isFormValid || loading}
                onClick={handleAction}
                className={`w-full py-5 rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] flex items-center justify-center gap-2 transition-all ${
                  isFormValid && !loading
                    ? "bg-[#ec4899] text-white shadow-lg shadow-[#ec4899]/20"
                    : "bg-white/5 text-zinc-600 cursor-not-allowed"
                }`}
              >
                <Cpu size={16} className={loading ? "animate-spin" : ""} />
                {loading
                  ? "Syncing..."
                  : authState === "otp"
                  ? "Verify"
                  : "Authorize"}
              </motion.button>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-8 pt-8 border-t border-white/5 flex justify-center">
          <button
            onClick={() =>
              setAuthState(authState === "login" ? "signup" : "login")
            }
            className="text-[10px] font-black uppercase text-zinc-500 hover:text-white transition-colors tracking-widest"
          >
            {authState === "login" ? (
              "New Identity? Register"
            ) : (
              <span className="flex items-center gap-2">
                <ArrowLeft size={12} /> Back to Login
              </span>
            )}
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
