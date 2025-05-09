import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "404 | Marek Zastko";

    const canonical = document.createElement("link");
    canonical.rel = "canonical";
    canonical.href = "https://www.marekzastko.com/404";
    document.head.appendChild(canonical);

    const robots = document.createElement("meta");
    robots.name = "robots";
    robots.content = "noindex";
    document.head.appendChild(robots);

    window.gtag?.("event", "page_view", {
      page_path: "/404",
      page_title: "404",
    });

    return () => {
      document.head.removeChild(canonical);
      document.head.removeChild(robots);
    };
  }, []);

  const handleBackClick = () => {
    window.gtag?.("event", "click_back_from_404");
    navigate("/");
  };

  return (
    <section className="flex flex-col items-center justify-center h-screen text-center px-4">
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="text-5xl mb-6 select-none"
      >
        🛰️
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-6xl mb-4 font-bold text-gray-900 dark:text-white"
      >
        404
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
        className="text-xl text-gray-600 dark:text-gray-300 mb-6"
      >
        Looks like you've wandered off the path
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
      >
        <button
          onClick={handleBackClick}
          className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium shadow-md transition-all"
        >
          Back
        </button>
      </motion.div>
    </section>
  );
}