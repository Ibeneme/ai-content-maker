import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import IndexHome from "./pages/home/IndexHome";
import Footer from "./components/Footer";
import Login from "./pages/auth/Login";

// --- Layout Wrapper to handle conditional rendering ---
const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  
  // Define the routes where we DON'T want the Navbar and Footer to show
  const isAuthPage = location.pathname === "/login";

  return (
    <div className="min-h-screen bg-[#000000] selection:bg-[#ec4899] selection:text-white">
      {/* Background Ambient Glows */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full bg-[#d8b4fe]/10 blur-[120px]" />
        <div className="absolute -bottom-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-[#ec4899]/10 blur-[120px]" />
      </div>

      {/* Only show Navbar if not on Login page */}
      {!isAuthPage && <Navbar />}

      <main>{children}</main>

      {/* Only show Footer if not on Login page */}
      {!isAuthPage && <Footer />}
    </div>
  );
};

function App() {
  return (
    <Router>
      <LayoutWrapper>
        <Routes>
          <Route path="/" element={<IndexHome />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </LayoutWrapper>
    </Router>
  );
}

export default App;