import React, { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isMobile = window.innerWidth <= 768;
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      if (isMobile) {
        setShow(scrollTop + windowHeight >= fullHeight - 300);
      } else {
        setShow(scrollTop > 200);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    window.gtag?.("event", "scroll_to_top");
  };

  if (!show) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-4 right-4 z-50 w-10 h-10 flex items-center justify-center 
        rounded-full bg-blue-600 hover:bg-blue-700 dark:bg-white/10 dark:hover:bg-white/20 
        text-white transition-all duration-300 shadow-md print:hidden"
      title="Scroll to top"
    >
      <ChevronUp size={18} />
    </button>
  );
}