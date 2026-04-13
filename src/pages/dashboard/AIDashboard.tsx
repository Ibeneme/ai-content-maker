import { useEffect, useState, useRef, type ChangeEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  Menu,
  Loader2,
  Paperclip,
  X,
  Sparkles,
  Download,
  Maximize2,
  AlertCircle,
  RefreshCcw,
  FileText,
  Trash2,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile } from "../../redux/slices/profileSlice";
import {
  generateProjectImage,
  fetchUserProjects,
  setActiveProject,
  deleteProject,
} from "../../redux/slices/projectSlice";
import { type AppDispatch, type RootState } from "../../redux/store";
import Sidebar from "./Sidebar";
import SubscriptionModal from "./SubscriptionModal";

interface FilePreview {
  id: string;
  file: File;
  preview: string;
  type: "image" | "video";
}

interface FailedRequest {
  prompt: string;
  files: FilePreview[];
}

const AIDashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(window.innerWidth >= 1024);
  const [inputText, setInputText] = useState("");
  const [selectedFiles, setSelectedFiles] = useState<FilePreview[]>([]);
  const [showSubModal, setShowSubModal] = useState(false);
  const [deleteMode, setDeleteMode] = useState(false);
  const [selectedChats, setSelectedChats] = useState<string[]>([]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [lastFailedRequest, setLastFailedRequest] =
    useState<FailedRequest | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const endOfMessagesRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch<AppDispatch>();

  const { data: profileData } = useSelector(
    (state: RootState) => state.profile
  );
  const { isGenerating, projects, activeProject } = useSelector(
    (state: RootState) => state.projects
  );

  useEffect(() => {
    dispatch(fetchProfile());
    dispatch(fetchUserProjects());
    const handleResize = () => {
      if (window.innerWidth >= 1024) setSidebarOpen(true);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [dispatch]);

  useEffect(() => {
    if (endOfMessagesRef.current) {
      endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [activeProject?.generatedAssets, isGenerating]);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      const newPreviews = filesArray.map((file) => ({
        id: Math.random().toString(36).substring(2, 11),
        file,
        preview: URL.createObjectURL(file),
        type: file.type.startsWith("video")
          ? ("video" as const)
          : ("image" as const),
      }));
      setSelectedFiles((prev) => [...prev, ...newPreviews]);
    }
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSend = async (retryData?: FailedRequest) => {
    const promptToSend = retryData ? retryData.prompt : inputText;
    const filesToPreview = retryData ? retryData.files : selectedFiles;
    if ((!promptToSend.trim() && filesToPreview.length === 0) || isGenerating)
      return;

    const filesToUpload = filesToPreview.map((f) => f.file);
    if (!retryData) {
      setInputText("");
      setSelectedFiles([]);
    }
    setLastFailedRequest(null);

    try {
      await dispatch(
        generateProjectImage({
          prompt: promptToSend || "Synthesize vision",
          files: filesToUpload,
          projectId: activeProject?._id,
        })
      ).unwrap();
    } catch (err) {
      setLastFailedRequest({ prompt: promptToSend, files: filesToPreview });
    }
  };

  // Logic for the custom modal confirmation
  const handleConfirmDelete = async () => {
    if (selectedChats.length === 0) return;

    setIsDeleting(true);
    try {
      await Promise.all(
        selectedChats.map((id) => dispatch(deleteProject(id)).unwrap())
      );
      setSelectedChats([]);
      setDeleteMode(false);
    } catch (err) {
      console.error("Purge failed:", err);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className="flex h-screen w-full bg-[#020202] text-zinc-300 font-sans overflow-hidden">
      <SubscriptionModal
        isOpen={showSubModal}
        onClose={() => setShowSubModal(false)}
      />

      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setSidebarOpen={setSidebarOpen}
        chats={projects.map((p: any) => ({ id: p._id, title: p.projectName }))}
        activeProjectId={activeProject?._id}
        onSelectProject={(id) =>
          dispatch(
            setActiveProject(projects.find((p: any) => p._id === id) || null)
          )
        }
        onNewProject={() => dispatch(setActiveProject(null))}
        profileData={profileData}
        onOpenSubModal={() => setShowSubModal(true)}
        deleteMode={deleteMode}
        setDeleteMode={setDeleteMode}
        selectedChats={selectedChats}
        toggleSelect={(id) =>
          setSelectedChats((prev) =>
            prev.includes(id)
              ? prev.filter((i) => i !== id)
              : id
              ? [...prev, id]
              : []
          )
        }
        onConfirmDelete={handleConfirmDelete}
      />

      <main className="flex-1 flex flex-col min-w-0 bg-[#050505] relative w-full">
        {/* Warning/Error Area */}
        <div className="absolute top-0 left-0 right-0 z-[60] p-4 pointer-events-none">
          <AnimatePresence>
            {lastFailedRequest && !isGenerating && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="max-w-2xl mx-auto p-4 rounded-2xl border border-red-500/20 bg-red-950/40 backdrop-blur-md flex items-center justify-between gap-4 pointer-events-auto shadow-2xl"
              >
                <div className="flex items-center gap-3">
                  <AlertCircle className="text-red-500" size={20} />
                  <div>
                    <p className="text-[10px] font-black text-white uppercase tracking-tighter">
                      System Interruption
                    </p>
                    <p className="text-[9px] text-zinc-400 uppercase">
                      Failed to synchronize with neural core.
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => handleSend(lastFailedRequest)}
                  className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-xl text-[10px] font-black uppercase hover:bg-zinc-200 transition-all"
                >
                  <RefreshCcw size={12} /> Retry
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <AnimatePresence>
          {!isSidebarOpen && (
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              onClick={() => setSidebarOpen(true)}
              className="absolute top-6 left-6 p-3 bg-white/5 border border-white/10 rounded-2xl text-white z-50 backdrop-blur-md"
            >
              <Menu size={20} />
            </motion.button>
          )}
        </AnimatePresence>

        <div
          ref={scrollRef}
          className="flex-1 overflow-y-auto no-scrollbar scroll-smooth"
        >
          <div className="max-w-4xl mx-auto px-6 md:px-12 py-24 space-y-12">
            {!activeProject && (
              <div className="h-[60vh] flex flex-col items-center justify-center text-center opacity-40">
                <Sparkles
                  size={48}
                  className="text-purple-500 animate-pulse mb-4"
                />
                <h2 className="text-2xl font-black tracking-tighter text-white">
                  READY FOR SYNTHESIS
                </h2>
                <p className="text-xs uppercase tracking-widest mt-2">
                  Create or select a project to begin
                </p>
              </div>
            )}

            {activeProject?.generatedAssets.map((asset: any) => (
              <motion.div
                key={asset._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col space-y-6"
              >
                <div className="px-6 py-4 rounded-[2rem] bg-zinc-900/50 border border-white/5 text-[15px] w-fit max-w-[80%] font-medium">
                  {asset.prompt}
                </div>
                <div className="group relative w-full rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl bg-black min-h-[150px] flex items-center justify-center">
                  {asset.url ? (
                    <>
                      <img
                        src={asset.url}
                        className="w-full h-auto object-cover"
                        alt="Generated"
                      />
                      <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-3 bg-black/50 backdrop-blur-md rounded-xl text-white hover:bg-white hover:text-black transition-all">
                          <Download size={18} />
                        </button>
                        <button className="p-3 bg-black/50 backdrop-blur-md rounded-xl text-white hover:bg-white hover:text-black transition-all">
                          <Maximize2 size={18} />
                        </button>
                      </div>
                    </>
                  ) : (
                    <div className="text-center p-12 flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full bg-amber-500/10 flex items-center justify-center mb-4">
                        <FileText className="text-amber-500" size={28} />
                      </div>
                      <p className="text-sm font-black text-white uppercase tracking-widest text-center">
                        IMAGE SYNTHESIS ENGINE
                      </p>
                      <p className="text-[11px] text-zinc-500 mt-2 max-w-xs leading-relaxed uppercase">
                        {asset.analysis ||
                          "Visual asset restricted. Synthesis saved as conceptual text."}
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}

            {(isGenerating || isDeleting) && (
              <div className="flex items-center gap-4 animate-pulse">
                <div className="w-10 h-10 rounded-2xl bg-purple-600 flex items-center justify-center">
                  {isDeleting ? <Trash2 size={16} /> : <Sparkles size={16} />}
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-purple-500">
                  {isDeleting
                    ? "Purging Neural Assets..."
                    : "Neural Synthesis in Progress..."}
                </span>
              </div>
            )}
            <div ref={endOfMessagesRef} />
          </div>
        </div>

        <div className="w-full max-w-4xl mx-auto pb-10 px-6">
          <AnimatePresence>
            {selectedFiles.length > 0 && (
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                className="flex gap-3 overflow-x-auto pb-4 no-scrollbar"
              >
                {selectedFiles.map((file) => (
                  <div
                    key={file.id}
                    className="relative flex-shrink-0 w-20 h-20 rounded-2xl border border-purple-500/40 bg-zinc-900 overflow-hidden group"
                  >
                    <img
                      src={file.preview}
                      className="w-full h-full object-cover"
                      alt="preview"
                    />
                    <button
                      onClick={() =>
                        setSelectedFiles((prev) =>
                          prev.filter((f) => f.id !== file.id)
                        )
                      }
                      className="absolute top-1 right-1 p-1 bg-black rounded-full text-white"
                    >
                      <X size={10} />
                    </button>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          <div className="relative flex items-end gap-2 bg-zinc-900/80 backdrop-blur-3xl border border-white/5 rounded-[2.5rem] p-2 shadow-2xl">
            <button
              onClick={() => fileInputRef.current?.click()}
              className="p-4 text-zinc-500 hover:text-white transition-colors"
            >
              <Paperclip size={20} />
            </button>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              multiple
              className="hidden"
              accept="image/*"
            />
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSend();
                }
              }}
              placeholder={
                activeProject
                  ? `Project: ${activeProject.projectName}`
                  : "Synthesize new manifest..."
              }
              className="flex-1 bg-transparent border-none focus:ring-0 text-white py-4 px-2 text-[15px] outline-none no-scrollbar resize-none max-h-40"
              rows={1}
            />
            <button
              onClick={() => handleSend()}
              disabled={
                (!inputText.trim() && selectedFiles.length === 0) ||
                isGenerating ||
                isDeleting
              }
              className={`p-4 rounded-full transition-all ${
                inputText.trim() || selectedFiles.length > 0
                  ? "bg-white text-black"
                  : "bg-zinc-800 text-zinc-600 opacity-20"
              }`}
            >
              {isGenerating ? (
                <Loader2 className="animate-spin" size={20} />
              ) : (
                <Send size={20} />
              )}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AIDashboard;
