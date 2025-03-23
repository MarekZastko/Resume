import React, { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!show) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-4 right-4 z-50 p-2 rounded-full bg-blue-600 hover:bg-blue-700 dark:bg-white/10 dark:hover:bg-white/20 text-white transition-all duration-300 shadow-md print:hidden"
      title="Scroll to top"
    >
      <ChevronUp size={18} className="text-white" />
    </button>
  );
}