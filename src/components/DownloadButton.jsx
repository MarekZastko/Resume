import React, { useEffect, useState } from "react";
import { Download } from "lucide-react";

export default function DownloadButton({ onClick }) {
  const [showMobile, setShowMobile] = useState(true);

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
    <>
      <button
        onClick={onClick}
        className="hidden md:flex fixed top-4 left-4 z-50 p-2 rounded-full bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300 print:hidden"
        title="Download CV"
      >
        <Download size={18} className="text-gray-700 dark:text-gray-200" />
      </button>

      {showMobile && (
        <button
          onClick={onClick}
          className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-full bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300 print:hidden"
          title="Download CV"
        >
          <Download size={18} className="text-gray-700 dark:text-gray-200" />
        </button>
      )}
    </>
  );
}