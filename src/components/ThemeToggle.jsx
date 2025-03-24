import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);
  const [showMobile, setShowMobile] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  useEffect(() => {
    const handleScroll = () => {
      const isMobile = window.innerWidth <= 768;
      if (isMobile) {
        setShowMobile(window.scrollY < 20);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <button
      onClick={() => setDark(!dark)}
      className={`
        fixed top-4 right-4 z-50 p-2 rounded-full bg-transparent
        hover:bg-gray-100 dark:hover:bg-white/10
        transition-colors duration-300 print:hidden
        ${!showMobile ? "hidden md:flex" : "flex"}
      `}
      title={dark ? "Light mode" : "Dark mode"}
    >
      {dark ? (
        <Sun size={18} className="text-white" />
      ) : (
        <Moon size={18} className="text-gray-700 dark:text-white" />
      )}
    </button>
  );
}