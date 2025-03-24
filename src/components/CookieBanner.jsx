import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookie-accepted");
    const declined = localStorage.getItem("cookie-declined");
    if (!accepted && !declined) {
      const timer = setTimeout(() => {
        setVisible(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-accepted", "true");
    setVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookie-declined", "true");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className={`fixed z-50 w-[190px] bg-white/90 dark:bg-zinc-900/90 border border-gray-200 dark:border-zinc-700 backdrop-blur-md shadow-xl rounded-xl px-4 py-5 text-sm text-gray-800 dark:text-gray-100 flex flex-col items-center
            ${isMobile ? "bottom-6 left-1/2 -translate-x-1/2" : "bottom-6 left-6"}`}
        >
          <div className="w-10 h-10 rounded-full bg-blue-500/20 dark:bg-blue-500/30 flex items-center justify-center text-xl mb-3">
            🍪
          </div>

          <p className="text-center text-sm leading-snug mb-1">
            We use cookies to enhance your experience
          </p>
          <p className="text-center text-xs text-blue-600 dark:text-blue-400 underline hover:opacity-80 mb-2">
            <Link to="/privacy">Learn more</Link>
          </p>

          <div className="flex flex-col gap-2 mt-2 w-full">
            <button
              onClick={acceptCookies}
              className="w-full px-3 py-2 text-xs font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
            >
              Accept
            </button>
            <button
              onClick={declineCookies}
              className="w-full px-3 py-2 text-xs font-medium bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-lg transition"
            >
              Decline
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}