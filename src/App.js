import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import ResumeTimeline from "./ResumeTimeline";
import Privacy from "./Privacy";
import Showroom from "./Showroom";
import CookieBanner from "./components/CookieBanner";
import NotFound from "./NotFound";

function AppContent() {
  const location = useLocation();
  const showCookieBanner = location.pathname === "/";

  useEffect(() => {
    if (location.pathname === "/") {
      window.gtag?.("event", "page_view", {
        page_path: "/",
        page_title: "Resume",
      });
    }
  }, [location.pathname]);

  return (
    <>
      <Routes>
        <Route path="/" element={<ResumeTimeline />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/showroom" element={<Showroom />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>

      {showCookieBanner && <CookieBanner />}
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}