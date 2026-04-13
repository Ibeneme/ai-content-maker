import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import IndexHome from "./pages/home/IndexHome";
import Footer from "./components/Footer";
//import Login from "./pages/auth/Login";
import NotFound from "./pages/404/NotFound";
import AIDashboard from "./pages/dashboard/AIDashboard";
import PlatformFeatures from "./pages/dashboard/PlatformFeatures";
import CreationsPage from "./pages/dashboard/Creations"; // Added Import
import ProfilePage from "./pages/dashboard/Profile"; // Added Import
import StudioPage from "./pages/dashboard/StudioPage";
import Storyboard from "./pages/dashboard/StoryBoard";

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  // Updated to include /creations and /profile to hide standard layout
  const hideLayout =
    location.pathname === "/login" ||
    location.pathname === "/dashboard" ||
    location.pathname === "/features" ||
    location.pathname === "/creations" ||
    location.pathname === "/settings" ||
    location.pathname === "/story-board" ||
    location.pathname === "/profile";

  return (
    <div className="min-h-screen bg-[#000000] selection:bg-[#ec4899] selection:text-white">
      {/* Background Glows */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full bg-[#d8b4fe]/10 blur-[120px]" />
        <div className="absolute -bottom-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-[#ec4899]/10 blur-[120px]" />
      </div>

      {!hideLayout && <Navbar />}

      <main>{children}</main>

      {!hideLayout && <Footer />}
    </div>
  );
};

function App() {
  return (
    <Router>
      <LayoutWrapper>
        <Routes>
          <Route path="/" element={<IndexHome />} />
          <Route path="/login" element={<IndexHome />} />

          {/* Neural Engine Routes */}
          <Route path="/dashboard" element={<AIDashboard />} />
          <Route path="/features" element={<PlatformFeatures />} />
          <Route path="/creations" element={<CreationsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/settings" element={<StudioPage />} />
          <Route path="/story-board" element={<Storyboard />} />

          {/* 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </LayoutWrapper>
    </Router>
  );
}

export default App;
