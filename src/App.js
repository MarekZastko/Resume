import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import ResumeTimeline from "./ResumeTimeline";
import Privacy from "./Privacy";
import CookieBanner from "./components/CookieBanner";

function AppContent() {
  const location = useLocation();
  const showCookieBanner = location.pathname !== "/privacy";

  return (
    <>
      <Routes>
        <Route path="/" element={<ResumeTimeline />} />
        <Route path="/privacy" element={<Privacy />} />
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