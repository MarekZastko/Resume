import React, { useEffect, useRef } from "react";
import { languages } from "../data/data";

const languageLevels = {
  A1: 1,
  A2: 2,
  B1: 3,
  B2: 4,
  C1: 5,
  C2: 6
};

const levelColors = {
  C2: "bg-blue-600",
  C1: "bg-blue-500",
  B1: "bg-blue-400",
  B2: "bg-blue-400",
  A2: "bg-blue-300",
  A1: "bg-blue-200"
};

export default function LanguageTimeline() {
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          window.gtag?.("event", "section_view", {
            section: "languages",
          });
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="mb-12">
      <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white text-left">
        Languages
      </h2>
      <div className="space-y-6">
        {languages.map((lang, i) => {
          const levelValue = languageLevels[lang.level] || 0;
          const width = (levelValue / 6) * 100;
          const color = levelColors[lang.level] || "bg-blue-300";

          return (
            <div key={i} className="w-full">
              <p className="mb-1 text-sm text-gray-700 dark:text-gray-300 font-medium">
                {lang.name} ({lang.level})
              </p>
              <div className="relative h-4 bg-gray-200 dark:bg-zinc-800 rounded overflow-hidden">
                <div
                  className={`absolute top-0 h-full ${color} rounded`}
                  style={{ width: `${width}%`, left: 0 }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}