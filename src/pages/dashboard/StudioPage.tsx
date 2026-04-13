import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  ArrowLeft,
  Save,
  Zap,
  User,
  MapPin,
  Camera,
  Layout,
  Sparkles,
  Loader2,
} from "lucide-react";
import { createStoryboard } from "../../redux/slices/storyboardSlice";

const EditPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<any>();
  const location = useLocation();

  // Data passed from the list page
  const initialData = location.state?.manifest;

  // Local state for the form
  const [formData, setFormData] = useState(initialData || {});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Mapped Options for Dropdowns
  const menuOptions = {
    gender: ["Male", "Female", "Non-Binary", "Others"],
    race: ["Asian", "Black", "White", "Hispanic", "Middle Eastern", "Others"],
    age: ["Teens", "20s", "30s", "40s", "50s+"],
    lighting: ["Studio", "Natural", "Cinematic", "Neon", "Golden Hour"],
    category: ["Streetwear", "Cyberpunk", "Minimalist", "High-Fashion"],
    hairColor: ["Black", "Blonde", "Brown", "Silver", "Dyed"],
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    console.log("🛠️ INITIALIZING DATA STREAM...", formData);

    try {
      // Execute the Thunk
      const resultAction = await dispatch(createStoryboard(formData)).unwrap();

      console.log("✅ SUCCESS: MANIFEST SYNCED", resultAction);
      navigate("/story-board"); // Redirect on success
    } catch (error: any) {
      console.error("❌ CRITICAL FAILURE:", error);
      alert(`Upload Failed: ${error}`);
    } finally {
      setIsSubmitting(false);
      console.log("🏁 TRANSACTION FINALIZED");
    }
  };

  if (!initialData)
    return (
      <div className="p-20 text-white font-black uppercase tracking-[0.5em]">
        No Manifest Selected
      </div>
    );

  return (
    <div className="w-full max-w-6xl mx-auto pt-24 pb-32 px-4 md:px-8">
      {/* Header */}
      <div className="flex flex-col gap-4 mb-12">
        <button
          onClick={() => navigate('/story-board')}
          className="flex items-center gap-2 text-zinc-500 hover:text-[#ec4899] transition-colors group w-fit"
        >
          <ArrowLeft
            size={16}
            className="group-hover:-translate-x-1 transition-transform"
          />
          <span className="text-[10px] font-black uppercase tracking-[0.3em]">
            Return to Story Board
          </span>
        </button>
        <h1 className="text-5xl font-black uppercase tracking-tighter text-white">
          Modify <span className="text-zinc-800">Story Board</span>
        </h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Identity Block */}
          <div className="lg:col-span-2 bg-zinc-950 border border-zinc-900 p-8 rounded-[2.5rem] space-y-8">
            <h3 className="text-[#ec4899] text-[10px] font-black uppercase tracking-[0.4em]">
              Biometric Data
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <SelectMenu
                  label="Gender Identity"
                  name="gender"
                  value={formData.gender}
                  options={menuOptions.gender}
                  onChange={handleChange}
                  icon={<User size={14} />}
                />
                {formData.gender === "Others" && (
                  <CustomInput
                    name="gender"
                    placeholder="Specify Gender..."
                    onChange={handleChange}
                  />
                )}
              </div>

              <div className="space-y-4">
                <SelectMenu
                  label="Genetic Race"
                  name="race"
                  value={formData.race}
                  options={menuOptions.race}
                  onChange={handleChange}
                  icon={<Zap size={14} />}
                />
                {formData.race === "Others" && (
                  <CustomInput
                    name="race"
                    placeholder="Specify Race/Origin..."
                    onChange={handleChange}
                  />
                )}
              </div>

              <SelectMenu
                label="Age Range"
                name="age"
                value={formData.age}
                options={menuOptions.age}
                onChange={handleChange}
              />
              <SelectMenu
                label="Category"
                name="category"
                value={formData.category}
                options={menuOptions.category}
                onChange={handleChange}
                icon={<Layout size={14} />}
              />
            </div>
          </div>

          {/* Environmental Block */}
          <div className="bg-zinc-950 border border-zinc-900 p-8 rounded-[2.5rem] space-y-8">
            <h3 className="text-[#ec4899] text-[10px] font-black uppercase tracking-[0.4em]">
              Environment
            </h3>
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-zinc-600 tracking-widest flex items-center gap-2">
                  <MapPin size={14} /> Location
                </label>
                <input
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-4 text-white uppercase font-bold text-xs outline-none focus:border-[#ec4899] transition-all"
                />
              </div>
              <SelectMenu
                label="Lighting Style"
                name="lighting"
                value={formData.lighting}
                options={menuOptions.lighting}
                onChange={handleChange}
                icon={<Camera size={14} />}
              />
            </div>
          </div>

          {/* Narrative Block */}
          <div className="lg:col-span-3 bg-zinc-950 border border-zinc-900 p-8 rounded-[2.5rem] space-y-4">
            <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-600">
              <Sparkles size={14} /> Narrative Logic
            </label>
            <textarea
              name="contentIdea"
              value={formData.contentIdea}
              onChange={handleChange}
              className="w-full h-40 bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 text-white font-black uppercase text-2xl focus:border-[#ec4899] outline-none transition-all resize-none"
            />
          </div>
        </div>

        {/* Submit Action */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-white text-black py-8 rounded-[2rem] text-xs font-black uppercase tracking-[0.5em] hover:bg-[#ec4899] hover:text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-4"
        >
          {isSubmitting ? (
            <Loader2 className="animate-spin" size={20} />
          ) : (
            <Save size={20} />
          )}
          {isSubmitting ? "Syncing..." : "Push Update to Server"}
        </button>
      </form>
    </div>
  );
};

/* --- UI COMPONENTS --- */

const SelectMenu = ({ label, name, value, options, onChange, icon }: any) => (
  <div className="space-y-3">
    <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-600">
      {icon} {label}
    </label>
    <div className="relative group">
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-4 text-white font-bold uppercase text-xs focus:border-[#ec4899] outline-none appearance-none cursor-pointer group-hover:border-zinc-700 transition-colors"
      >
        {options.map((opt: string) => (
          <option
            key={opt}
            value={opt}
            className="bg-zinc-950 text-white uppercase"
          >
            {opt}
          </option>
        ))}
      </select>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500 text-[8px]">
        ▼
      </div>
    </div>
  </div>
);

const CustomInput = ({ name, placeholder, onChange }: any) => (
  <input
    name={name}
    onChange={onChange}
    placeholder={placeholder}
    className="w-full bg-zinc-900/50 border border-[#ec4899]/30 rounded-xl px-4 py-3 text-white font-bold uppercase text-[10px] outline-none animate-in fade-in slide-in-from-top-1"
  />
);

export default EditPage;
