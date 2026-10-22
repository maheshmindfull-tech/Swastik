import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Journey from "./components/Journey";
import DearPune from "./pages/DearPune";
import HiddenForestThankYou from "./pages/HiddenForestThankYou";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";

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
  const campaign = pathname === "/dear-pune" || pathname.startsWith("/dear-pune/");

  return (
    <div className="overflow-x-hidden bg-[#FFFCF5]">
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dear-pune" element={<DearPune />} />
        <Route path="/dear-pune/thank-you" element={<HiddenForestThankYou />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<InnerPage />} />
      </Routes>
      {!campaign && <Journey />}
      {!campaign && <Footer />}
    </div>
  );
}
