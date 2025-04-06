import React, { useEffect, useRef } from "react";

export default function Footer() {
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          window.gtag?.("event", "section_view", {
            section: "footer",
          });
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleClick = () => {
    window.gtag?.("event", "navigate_showroom", {
      label: "Showroom Link Clicked",
    });
  };

  return (
    <footer
      ref={ref}
      className="text-center text-sm text-gray-400 mt-8 print:hidden"
    >
      <a
        href="/showroom"
        rel="noopener noreferrer"
        onClick={handleClick}
        className="no-underline text-inherit font-semibold"
      >
        Made
      </a>{" "}
      with{" "}
      <span className="dark:hidden">🖤</span>
      <span className="hidden dark:inline">🤍</span>{" "}
      by Marek Zastko
    </footer>
  );
}