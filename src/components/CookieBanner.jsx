import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showIcon, setShowIcon] = useState(false);
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookie-accepted");
    const declined = localStorage.getItem("cookie-declined");
    if (!accepted && !declined) {
      const timer = setTimeout(() => setVisible(true), 3000);
      return () => clearTimeout(timer);
    } else {
      setShowIcon(true);
    }
  }, []);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();

    const handleScroll = () => {
      const bottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;
      setIsBottom(bottom);
    };

    window.addEventListener("resize", checkMobile);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-accepted", "true");
    setVisible(false);
    setShowIcon(true);
    window.gtag?.("event", "cookie_accept");
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-declined", "true");
    setVisible(false);
    setShowIcon(true);
    window.gtag?.("event", "cookie_decline");
  };

  const resetChoice = () => {
    localStorage.removeItem("cookie-accepted");
    localStorage.removeItem("cookie-declined");
    setVisible(true);
    setShowIcon(false);
    window.gtag?.("event", "cookie_settings_reopened");
  };

  const handlePrivacyClick = () => {
    window.gtag?.("event", "cookie_learn_more");
  };

  return (
    <>
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className={`
              fixed z-50 bg-white/90 dark:bg-zinc-900/90 border border-gray-200 dark:border-zinc-700 backdrop-blur-md shadow-xl rounded-xl text-sm text-gray-800 dark:text-gray-100 print:hidden
              ${isMobile
                ? "bottom-8 left-0 right-0 mx-auto w-[90%] max-w-sm px-5 py-4"
                : "bottom-6 left-0 right-0 mx-auto w-[95%] max-w-4xl px-6 py-4"
              }
              flex flex-col items-center
            `}
          >
            <div className="w-10 h-10 rounded-full bg-blue-500/20 dark:bg-blue-500/30 flex items-center justify-center text-xl mb-3">
              🍪
            </div>

            <p className="text-center text-sm leading-snug mb-1">
              We use cookies to enhance your experience
            </p>
            <p className="text-center text-xs text-blue-600 dark:text-blue-400 underline hover:opacity-80 mb-2">
              <Link
                to="/privacy"
                onClick={handlePrivacyClick}
                aria-label="Read our full Privacy Policy"
              >
                Learn more
              </Link>
            </p>

            <div className="flex flex-col gap-2 mt-2 w-full">
              <button
                onClick={handleAccept}
                className="w-full px-3 py-2 text-xs font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
              >
                Accept
              </button>
              <button
                onClick={handleDecline}
                className="w-full px-3 py-2 text-xs font-medium bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-lg transition"
              >
                Decline
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {showIcon && (
        <button
          onClick={resetChoice}
          className={`fixed z-40 w-10 h-10 flex items-center justify-center rounded-full
            bg-blue-600 hover:bg-blue-700 dark:bg-white/10 dark:hover:bg-white/20
            text-white text-lg shadow-md hover:shadow-lg transition print:hidden
            ${isMobile ? (isBottom ? "bottom-4 left-4" : "hidden") : "bottom-4 left-4"}`}
          title="Cookie settings"
        >
          🍪
        </button>
      )}
    </>
  );
}