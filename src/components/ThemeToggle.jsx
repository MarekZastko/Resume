import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return savedTheme === "dark" || (!savedTheme && prefersDark);
  });

  const [showMobile, setShowMobile] = useState(true);
  const [originalTheme, setOriginalTheme] = useState("light");

  const isMobileSafari = () => {
    const ua = navigator.userAgent;
    const isSafari = /^((?!chrome|android).)*safari/i.test(ua);
    return /iPhone|iPad|iPod/.test(ua) && isSafari;
  };

  useEffect(() => {
    if (isMobileSafari()) {
      document.documentElement.classList.add("disable-transitions");
      setTimeout(() => {
        document.documentElement.classList.remove("disable-transitions");
      }, 200);
    }

    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");

    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute("content", dark ? "#171717" : "#ffffff");
    }
  }, [dark]);

  useEffect(() => {
    const handleScroll = () => {
      const isMobile = window.innerWidth <= 768;
      if (isMobile) {
        setShowMobile(window.scrollY < 20);
      }
    };

    const handleBeforePrint = () => {
      setOriginalTheme(dark ? "dark" : "light");
      document.documentElement.classList.remove("dark");
    };

    const handleAfterPrint = () => {
      if (originalTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }

      const metaThemeColor = document.querySelector('meta[name="theme-color"]');
      if (metaThemeColor) {
        metaThemeColor.setAttribute("content", originalTheme === "dark" ? "#171717" : "#ffffff");
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    window.addEventListener("beforeprint", handleBeforePrint);
    window.addEventListener("afterprint", handleAfterPrint);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      window.removeEventListener("beforeprint", handleBeforePrint);
      window.removeEventListener("afterprint", handleAfterPrint);
    };
  }, [dark, originalTheme]);

  const handleToggle = () => {
    const newTheme = !dark ? "dark" : "light";
    setDark(!dark);

    window.gtag?.("event", "theme_toggle", {
      mode: newTheme,
    });
  };

  return (
    <button
      onClick={handleToggle}
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