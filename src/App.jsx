import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { isDearPunePath, syncHiddenForestTag } from "./lib/hiddenForestTag";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Journey from "./components/Journey";
import DearPune from "./pages/DearPune";
import HiddenForestThankYou from "./pages/HiddenForestThankYou";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetail from "./pages/ProjectDetail";
import GalleryPage from "./pages/Gallery";
import Career from "./pages/Career";
import Disclaimer from "./pages/Disclaimer";
import Terms from "./pages/Terms";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}

function InnerPage() {
  const { pathname } = useLocation();
  const title = pathname
    .replace(/^\//, "")
    .replace(/-/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());

  return (
    <main className="min-h-[60vh] bg-[#FFFCF5] px-6 pt-36 pb-20 text-center text-[#2B1B12]">
      <h1 className="text-4xl md:text-5xl font-light">{title || "Page"}</h1>
    </main>
  );
}

export default function App() {
  const { pathname } = useLocation();
  const campaign = isDearPunePath(pathname);

  useEffect(() => {
    syncHiddenForestTag(pathname);
  }, [pathname]);

  return (
    <div className="overflow-x-hidden bg-[#FFFCF5]">
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dear-pune" element={<DearPune />} />
        <Route path="/dear-pune/thank-you" element={<HiddenForestThankYou />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:projectId" element={<ProjectDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/career" element={<Career />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/terms-and-conditions" element={<Terms />} />
        <Route path="*" element={<InnerPage />} />
      </Routes>
      {!campaign && <Journey />}
      {!campaign && <Footer />}
    </div>
  );
}
