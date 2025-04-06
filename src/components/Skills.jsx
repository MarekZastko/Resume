import React, { useEffect, useRef } from "react";
import { hardSkills, softSkills } from "../data/data";

export default function Skills() {
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          window.gtag?.("event", "section_view", {
            section: "skills",
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
    <section ref={ref} className="mb-12 print:break-inside-avoid">
      <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white print:text-black">
        Skills
      </h2>

      <div className="mb-4">
        <h3 className="text-sm font-semibold mb-2 text-gray-600 dark:text-gray-400 print:text-black">
          Hard Skills
        </h3>
        <div className="flex flex-wrap gap-2">
          {hardSkills.map((skill, idx) => (
            <span
              key={idx}
              className="bg-blue-100 dark:bg-blue-800 dark:text-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm print:text-blue-800 print:bg-blue-100 print:rounded-full print:px-3 print:py-1"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold mb-2 text-gray-600 dark:text-gray-400 print:text-black">
          Soft Skills
        </h3>
        <div className="flex flex-wrap gap-2">
          {softSkills.map((skill, idx) => (
            <span
              key={idx}
              className="bg-gray-100 dark:bg-gray-700 dark:text-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm print:text-gray-800 print:bg-gray-100 print:rounded-full print:px-3 print:py-1"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}