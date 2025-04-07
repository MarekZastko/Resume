import React, { useEffect, useRef } from "react";

export default function About() {
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          window.gtag?.("event", "section_view", {
            section: "about",
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
      <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">About Me</h2>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
        I’m a results-oriented <strong>Product Owner</strong> and <strong>Engineer</strong> who loves bringing <strong>structure</strong> to chaos, turning ideas into outcomes, and helping people thrive.
        My background spans <strong>tech, business, and strategy</strong>, with hands-on experience from companies like <strong>GymBeam</strong>, <strong>Dell Technologies</strong>, and <strong>Global Payments</strong>. I enjoy optimizing, leading, and building things that make a difference
      </p>
    </section>
  );
}