import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  User,
  Fingerprint,
  LogOut,
  Loader2,
  AlertTriangle,
  Edit3,
  X,
  LayoutGrid,
  ChevronRight,
  ShieldAlert,
  Check,
  ArrowLeft,
} from "lucide-react";

import {
  fetchProfile,
  purgeNeuralDNA,
  updateProfile,
} from "../../redux/slices/profileSlice";
import type { AppDispatch, RootState } from "../../redux/store";
import { logout } from "../../redux/slices/authSlice";

const ProfilePage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const { data, loading } = useSelector((state: RootState) => state.profile);

  // UI States
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<boolean>(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState<boolean>(false);
  const [showEditModal, setShowEditModal] = useState<boolean>(false);

  // Form States
  const [editForm, setEditForm] = useState<{
    firstName: string;
    lastName: string;
  }>({
    firstName: "",
    lastName: "",
  });
  const [isUpdating, setIsUpdating] = useState<boolean>(false);

  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);

  useEffect(() => {
    if (data) {
      setEditForm({
        firstName: data.firstName || "",
        lastName: data.lastName || "",
      });
    }
  }, [data]);

  const handleUpdateName = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsUpdating(true);
    try {
      await dispatch(updateProfile(editForm)).unwrap();
      setShowEditModal(false);
    } catch (err) {
      console.error("Update failed", err);
    } finally {
      setIsUpdating(false);
    }
  };

  // FIX: handleLogout is now called by the Logout Modal button below
  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const handleDeleteAccount = async () => {
    try {
      await dispatch(purgeNeuralDNA()).unwrap();
      handleLogout(); // Reuse logout logic after purge
    } catch (err) {
      console.error("Purge failed", err);
    }
  };

  if (loading && !data) {
    return (
      <div className="h-screen w-full bg-black flex flex-col items-center justify-center">
        <Loader2 className="text-[#ec4899] animate-spin mb-4" size={40} />
        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-600">
          Syncing Nexus...
        </span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#020202] text-white pb-32 pt-28">
      <main className="max-w-4xl mx-auto px-6">
        {/* --- HEADER ACTIONS --- */}
        <button
          onClick={() => navigate("/dashboard")}
          className="flex mb-12 items-center gap-2 text-zinc-500 hover:text-[#ec4899] transition-colors group w-fit"
        >
          <ArrowLeft
            size={16}
            className="group-hover:-translate-x-1 transition-transform"
          />
          <span className="text-[10px] font-black uppercase tracking-[0.3em]">
            Return Back
          </span>
        </button>{" "}
        <div className="flex justify-between items-center mb-12">
          <button
            onClick={() => navigate("/story-board")}
            className="group flex items-center gap-3 px-8 py-4 bg-white text-black rounded-2xl text-[11px] font-black uppercase tracking-[0.3em] hover:bg-[#ec4899] hover:text-white transition-all shadow-xl"
          >
            <LayoutGrid size={18} />
            <span>Open Storyboard</span>
            <ChevronRight
              size={14}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
          <div className="flex items-center gap-3 px-5 py-2.5 bg-zinc-900/50 rounded-full border border-white/5">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_#10b981]" />
            <span className="text-[9px] font-black uppercase tracking-[0.4em] text-zinc-400">
              Node: Verified
            </span>
          </div>
        </div>
        {/* --- IDENTITY BLOCK --- */}
        <div className="relative bg-zinc-950 border border-white/10 rounded-[3.5rem] p-10 md:p-14 overflow-hidden mb-8 shadow-2xl">
          <div className="flex flex-col md:flex-row items-center gap-12 relative z-10">
            <div className="relative">
              <div className="w-40 h-40 rounded-[3rem] bg-zinc-900 border border-white/10 flex items-center justify-center">
                <User size={64} className="text-zinc-800" />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-[#ec4899] p-3 rounded-2xl border-4 border-zinc-950">
                <Fingerprint size={20} className="text-white" />
              </div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
                <h2 className="text-5xl font-black tracking-tighter uppercase leading-none">
                  {data?.firstName}{" "}
                  <span className="text-zinc-800">{data?.lastName}</span>
                </h2>
                <button
                  onClick={() => setShowEditModal(true)}
                  className="flex items-center gap-2 px-6 py-3 bg-[#ec4899] text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all shadow-[0_0_30px_rgba(236,72,153,0.3)]"
                >
                  <Edit3 size={14} /> Edit Identity
                </button>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-10 border-t border-white/5">
                <StatItem
                  val={`${data?.neuralStats?.fidelity || 0}%`}
                  label="Fidelity"
                />
                <StatItem
                  val={data?.identitySlots?.length || 0}
                  label="Locks"
                />
                <StatItem
                  val={`${(
                    (data?.neuralStats?.storageUsedBytes || 0) / 1048576
                  ).toFixed(1)}MB`}
                  label="Vault"
                />
              </div>
            </div>
          </div>
        </div>
        {/* --- SYSTEM ACTIONS --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ActionTile
            title="Neural Purge"
            desc="Delete account and erase all DNA mapping permanently."
            icon={<ShieldAlert className="text-red-500" size={24} />}
            btnText="Execute Delete"
            onClick={() => setShowDeleteConfirm(true)}
            isDanger
          />
          <ActionTile
            title="Logout Session"
            desc="Securely disconnect your terminal from the nexus."
            icon={<LogOut className="text-zinc-500" size={24} />}
            btnText="Terminate Link"
            onClick={() => setShowLogoutConfirm(true)}
          />
        </div>
      </main>

      {/* --- MODAL: EDIT NAME --- */}
      <AnimatePresence>
        {showEditModal && (
          <div className="fixed inset-0 z-[150] flex items-center justify-center p-6 bg-black/95 backdrop-blur-xl">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="bg-zinc-950 border border-white/10 p-12 rounded-[3.5rem] w-full max-w-md"
            >
              <div className="flex justify-between mb-10">
                <h3 className="text-xs font-black uppercase tracking-[0.5em] text-[#ec4899]">
                  Identity Override
                </h3>
                <button
                  onClick={() => setShowEditModal(false)}
                  className="text-zinc-600 hover:text-white"
                >
                  <X size={24} />
                </button>
              </div>
              <form onSubmit={handleUpdateName} className="space-y-8">
                <InputBox
                  label="Given Name"
                  value={editForm.firstName}
                  onChange={(v) => setEditForm({ ...editForm, firstName: v })}
                />
                <InputBox
                  label="Family Name"
                  value={editForm.lastName}
                  onChange={(v) => setEditForm({ ...editForm, lastName: v })}
                />
                <button
                  type="submit"
                  className="w-full bg-white text-black py-6 rounded-2xl font-black uppercase text-[11px] tracking-[0.4em] hover:bg-[#ec4899] hover:text-white transition-all flex items-center justify-center gap-3"
                >
                  {isUpdating ? (
                    <Loader2 className="animate-spin" size={18} />
                  ) : (
                    <Check size={18} />
                  )}
                  Confirm Sync
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* --- MODAL: LOGOUT (FIXED HERE) --- */}
      <AnimatePresence>
        {showLogoutConfirm && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-black/90 backdrop-blur-md">
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="bg-zinc-950 border border-white/10 p-12 rounded-[3.5rem] max-w-sm w-full text-center"
            >
              <LogOut className="text-zinc-600 mx-auto mb-8" size={56} />
              <h3 className="text-2xl font-black uppercase tracking-tighter mb-4 text-white">
                End Session
              </h3>
              <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-10">
                Disconnect your terminal?
              </p>
              <div className="flex gap-4">
                <button
                  onClick={() => setShowLogoutConfirm(false)}
                  className="flex-1 py-5 bg-white/5 rounded-2xl text-[10px] font-black uppercase text-zinc-500"
                >
                  Stay
                </button>
                {/* CALLING handleLogout HERE */}
                <button
                  onClick={handleLogout}
                  className="flex-1 py-5 bg-white text-black rounded-2xl text-[10px] font-black uppercase hover:bg-[#ec4899] hover:text-white transition-all"
                >
                  Logout
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* --- MODAL: DELETE CONFIRM --- */}
      <AnimatePresence>
        {showDeleteConfirm && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-red-950/20 backdrop-blur-3xl">
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="bg-zinc-950 border border-red-900/40 p-12 rounded-[3.5rem] max-w-sm w-full text-center"
            >
              <AlertTriangle className="text-red-500 mx-auto mb-8" size={56} />
              <h3 className="text-2xl font-black uppercase tracking-tighter mb-4 text-white">
                Final Purge
              </h3>
              <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-10 leading-relaxed px-4">
                Permanent DNA mapping deletion. Irreversible.
              </p>
              <div className="flex flex-col gap-3">
                <button
                  onClick={handleDeleteAccount}
                  className="w-full py-5 bg-red-600 rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] text-white"
                >
                  Execute Purge
                </button>
                <button
                  onClick={() => setShowDeleteConfirm(false)}
                  className="w-full py-5 bg-white/5 rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500"
                >
                  Abort
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* --- SHARED UI --- */

const InputBox = ({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
}) => (
  <div className="space-y-3 text-left">
    <label className="text-[10px] font-black uppercase text-zinc-600 tracking-[0.3em] ml-2">
      {label}
    </label>
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl px-6 py-5 text-white font-black uppercase outline-none focus:border-[#ec4899] transition-all"
    />
  </div>
);

const StatItem = ({ val, label }: { val: string | number; label: string }) => (
  <div className="text-center md:text-left">
    <div className="text-xl font-black tracking-tighter uppercase text-white">
      {val}
    </div>
    <div className="text-[8px] text-zinc-600 font-black uppercase tracking-[0.3em] mt-3">
      {label}
    </div>
  </div>
);

const ActionTile = ({ title, desc, icon, btnText, onClick, isDanger }: any) => (
  <div className="p-10 bg-zinc-950 border border-white/5 rounded-[3rem] flex flex-col justify-between">
    <div>
      <div className="mb-6">{icon}</div>
      <h4 className="text-sm font-black uppercase tracking-[0.2em] mb-3">
        {title}
      </h4>
      <p className="text-[10px] text-zinc-600 font-bold uppercase leading-relaxed mb-8">
        {desc}
      </p>
    </div>
    <button
      onClick={onClick}
      className={`py-5 rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] transition-all ${
        isDanger
          ? "bg-red-600 text-white"
          : "bg-white/5 text-zinc-500 hover:bg-white hover:text-black"
      }`}
    >
      {btnText}
    </button>
  </div>
);

export default ProfilePage;
