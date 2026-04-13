import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import {
  Edit3,
  Zap,
  MapPin,
  User,
  Camera,
  Loader2,
  AlertCircle,
  ArrowLeft,
} from "lucide-react";
import { fetchStoryboards } from "../../redux/slices/storyboardSlice";

const Storyboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<any>();

  const { list, loading, error } = useSelector(
    (state: any) => state.storyboard
  );

  useEffect(() => {
    dispatch(fetchStoryboards());
  }, [dispatch]);

  return (
    // Added px-4 md:px-8 for responsive side padding
    <div className="w-full max-w-7xl mx-auto pt-24 pb-32 px-4 md:px-8 space-y-12">
      {/* Header Section */}
      <div className="flex flex-col gap-6 mb-16">
        <button
          onClick={() => navigate("/profile")}
          className="flex items-center gap-2 text-zinc-500 hover:text-[#ec4899] transition-colors group w-fit"
        >
          <ArrowLeft
            size={16}
            className="group-hover:-translate-x-1 transition-transform"
          />
          <span className="text-[10px] font-black uppercase tracking-[0.3em]">
            Return Back
          </span>
        </button>
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white leading-none">
          Story <span className="text-zinc-800">Board</span>
        </h1>
      </div>

      {/* States: Loading & Error */}
      {loading && list.length === 0 && (
        <div className="flex flex-col items-center justify-center py-32 gap-6">
          <Loader2 className="animate-spin text-[#ec4899]" size={40} />
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600 animate-pulse">
            Synchronizing Database...
          </p>
        </div>
      )}

      {error && (
        <div className="p-8 md:p-12 border border-red-500/20 bg-red-500/5 rounded-[2rem] flex flex-col md:flex-row items-center gap-6 text-red-500 text-center md:text-left">
          <AlertCircle size={24} />
          <p className="text-xs font-black uppercase tracking-[0.2em]">
            {error}
          </p>
        </div>
      )}

      {/* Manifest List */}
      <div className="grid grid-cols-1 gap-10">
        <AnimatePresence mode="popLayout">
          {list.map((item: any) => (
            <motion.div
              key={item._id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="relative group bg-zinc-950 border border-zinc-900 rounded-[2rem] md:rounded-[3rem] overflow-hidden p-6 md:p-12 hover:border-[#ec4899]/40 transition-all duration-700"
            >
              {/* Card Header: Responsive Flex */}
              <div className="flex flex-col sm:flex-row justify-between items-start gap-6 mb-12">
                <div className="space-y-2">
                  <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-white">
                    Story Board
                  </h2>
                </div>

                <button
                  onClick={() =>
                    navigate(`/settings`, { state: { manifest: item } })
                  }
                  //  onClick={() => navigate(`/settings`)}
                  className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-[#ec4899] hover:text-white transition-all active:scale-95"
                >
                  <Edit3 size={16} /> Edit Data
                </button>
              </div>

              {/* Specs Grid: 2 cols on mobile, 4 on desktop */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-4 mb-12">
                <DataPoint
                  icon={<User size={14} />}
                  label="Identity"
                  value={`${item.gender} / ${item.age}`}
                />
                <DataPoint
                  icon={<Zap size={14} />}
                  label="Race"
                  value={item.race}
                />
                <DataPoint
                  icon={<MapPin size={14} />}
                  label="Environment"
                  value={item.location}
                />
                <DataPoint
                  icon={<Camera size={14} />}
                  label="Lighting"
                  value={item.lighting}
                />
              </div>

              {/* Responsive Style Tags */}
              <div className="flex flex-wrap gap-2 md:gap-3 py-8 border-t border-zinc-900">
                {Object.entries(item).map(([key, val]) => {
                  const traits = [
                    "hairStyle",
                    "hairColor",
                    "makeup",
                    "nails",
                    "shoes",
                    "bag",
                  ];
                  if (
                    traits.includes(key) &&
                    val &&
                    val !== "" &&
                    val !== "None"
                  ) {
                    return (
                      <span
                        key={key}
                        className="px-4 py-2 bg-zinc-900/40 border border-zinc-800 rounded-xl text-[9px] font-black uppercase text-zinc-500 tracking-wider hover:text-white transition-colors"
                      >
                        {key.replace(/([A-Z])/g, " $1")}:{" "}
                        <span className="text-zinc-200">{val as string}</span>
                      </span>
                    );
                  }
                  return null;
                })}
              </div>

              {/* Narrative: Bold No-Italics */}
              <div className="mt-6 p-8 bg-zinc-900/20 border border-zinc-900 rounded-[1.5rem] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-[3px] h-full bg-[#ec4899]" />
                <p className="text-[10px] font-black text-zinc-600 uppercase mb-4 tracking-[0.2em]">
                  Generated Narrative
                </p>
                <p className="text-lg md:text-2xl font-black text-zinc-100 uppercase tracking-tight leading-[1.1]">
                  "{item.contentIdea}"
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

const DataPoint = ({ label, value, icon }: any) => {
  if (!value || value === "" || value.includes("undefined")) return null;
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 text-zinc-700">
        {icon}
        <p className="text-[10px] font-black uppercase tracking-[0.2em]">
          {label}
        </p>
      </div>
      <p className="text-base font-black text-white uppercase tracking-tight">
        {value}
      </p>
    </div>
  );
};

export default Storyboard;
