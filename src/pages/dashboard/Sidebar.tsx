import { motion, AnimatePresence } from "framer-motion";
import {
  MessageSquarePlus,
  Trash2,
  ChevronLeft,
  Sparkles,
  User,
  CheckSquare,
  Square,
  Folder,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

interface SidebarProps {
  isSidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  deleteMode: boolean;
  setDeleteMode: (mode: boolean) => void;
  selectedChats: string[];
  toggleSelect: (id: string) => void;
  chats: { id: string; title: string }[];
  activeProjectId?: string;
  onSelectProject: (id: string) => void;
  onNewProject: () => void;
  profileData: any;
  onOpenSubModal: () => void;
  onConfirmDelete: () => void; // Added this prop
}

const Sidebar = ({
  isSidebarOpen,
  setSidebarOpen,
  deleteMode,
  setDeleteMode,
  selectedChats,
  toggleSelect,
  chats,
  activeProjectId,
  onSelectProject,
  onNewProject,
  profileData,
  onOpenSubModal,
  onConfirmDelete,
}: SidebarProps) => {
  const navigate = useNavigate();

  const handleSelection = (id: string) => {
    onSelectProject(id);
    if (window.innerWidth < 1024) setSidebarOpen(false);
  };

  const handleNew = () => {
    onNewProject();
    if (window.innerWidth < 1024) setSidebarOpen(false);
  };

  return (
    <>
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-[60] lg:hidden"
          />
        )}
      </AnimatePresence>

      <motion.aside
        initial={false}
        animate={{
          x: isSidebarOpen ? 0 : -320,
          width: isSidebarOpen ? 300 : 0,
        }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed lg:relative inset-y-0 left-0 z-[70] h-full bg-[#050505] border-r border-white/5 flex flex-col overflow-hidden shrink-0"
      >
        <div className="w-[300px] p-6 flex flex-col h-full">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-white rounded-2xl flex items-center justify-center">
                <Sparkles size={20} className="text-black" />
              </div>
              <span className="text-lg font-black text-white tracking-tighter">NEURAL.</span>
            </div>
            <button onClick={() => setSidebarOpen(false)} className="p-2 text-zinc-500 hover:text-white lg:hidden">
              <ChevronLeft size={20} />
            </button>
          </div>

          <button
            onClick={handleNew}
            className={`flex items-center gap-4 px-5 py-4 border rounded-[20px] transition-all text-[11px] font-black tracking-[0.2em] mb-10 ${
              !activeProjectId ? "bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.1)]" : "bg-white/5 border-white/10 text-white hover:bg-white/10"
            }`}
          >
            <MessageSquarePlus size={20} className={!activeProjectId ? "text-black" : "text-purple-500"} />
            NEW PROJECT
          </button>

          <div className="flex items-center justify-between px-2 mb-6 text-[10px] font-black tracking-[0.2em] text-zinc-600 uppercase">
            <span>{deleteMode ? `${selectedChats.length} Selected` : "Archives"}</span>
            <div className="flex items-center gap-2">
              {deleteMode && selectedChats.length > 0 && (
                <button 
                  onClick={onConfirmDelete}
                  className="text-[9px] bg-red-600 text-white px-2 py-1 rounded-md hover:bg-red-500 transition-colors"
                >
                  CONFIRM
                </button>
              )}
              <button
                onClick={() => {
                    setDeleteMode(!deleteMode);
                    if (deleteMode) toggleSelect(""); // Just to trigger a clear if needed
                }}
                className={`hover:text-white transition-colors ${deleteMode ? "text-pink-500" : ""}`}
              >
                {deleteMode ? "CANCEL" : <Trash2 size={16} />}
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto space-y-2 pr-2 custom-scrollbar no-scrollbar">
            {chats.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-10 border border-dashed border-white/5 rounded-3xl opacity-20">
                <Folder size={24} className="mb-3" />
                <p className="text-[10px] font-black uppercase tracking-widest">No Projects</p>
              </div>
            ) : (
              chats.map((chat) => (
                <div
                  key={chat.id}
                  onClick={() => deleteMode ? toggleSelect(chat.id) : handleSelection(chat.id)}
                  className={`group flex items-center gap-4 px-4 py-4 rounded-2xl cursor-pointer transition-all border ${
                    activeProjectId === chat.id ? "bg-white/10 border-white/20 shadow-inner" : "hover:bg-white/5 border-transparent hover:border-white/5"
                  } ${deleteMode && selectedChats.includes(chat.id) ? "bg-pink-500/10 border-pink-500/30" : ""}`}
                >
                  {deleteMode ? (
                    <div className="text-pink-500">
                      {selectedChats.includes(chat.id) ? <CheckSquare size={16} /> : <Square size={16} />}
                    </div>
                  ) : (
                    <div className={`w-1.5 h-1.5 rounded-full ${activeProjectId === chat.id ? "bg-purple-500 animate-pulse" : "bg-zinc-800"}`} />
                  )}
                  <span className={`text-sm font-semibold truncate ${activeProjectId === chat.id ? "text-white" : "text-zinc-500 group-hover:text-white"}`}>
                    {chat.title}
                  </span>
                </div>
              ))
            )}
          </div>

          <div className="pt-6 border-t border-white/5 mt-6">
            <button onClick={() => navigate("/profile")} className="w-full flex items-center gap-4 p-3 rounded-[24px] hover:bg-white/5 transition-all group">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-zinc-800 to-zinc-700 flex items-center justify-center text-white font-black">
                <User size={16} />
              </div>
              <div className="text-left flex-1 overflow-hidden">
                <p className="text-xs font-black text-white uppercase tracking-wider truncate group-hover:text-purple-400">
                  {profileData?.firstName || "Nexus"} {profileData?.lastName || "User"}
                </p>
              </div>
            </button>
            <button onClick={onOpenSubModal} className="w-full py-2 mt-1">
              <p className="text-[9px] text-zinc-600 font-black uppercase tracking-widest hover:text-white transition-colors">View Subscriptions</p>
            </button>
          </div>
        </div>
      </motion.aside>
    </>
  );
};

export default Sidebar;