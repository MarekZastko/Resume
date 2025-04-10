import React, { useEffect } from "react";
import {
  Cpu,
  Paintbrush,
  Zap,
  Code2,
  MonitorSmartphone,
  Smartphone,
  Tablet,
  Monitor,
  Settings2,
  Layers3,
  Text,
  MousePointerClick,
  Film,
  Repeat,
  Lightbulb,
  LayoutGrid,
  Server,
  UploadCloud
} from "lucide-react";

export default function Showroom() {
  useEffect(() => {
    document.title = "Showroom | Marek Zastko";

    const canonical = document.createElement("link");
    canonical.rel = "canonical";
    canonical.href = "https://www.marekzastko.com/showroom";
    document.head.appendChild(canonical);

    const cookieIcon = document.getElementById("cookie-icon");
    if (window.location.pathname === "/showroom" && cookieIcon) {
      cookieIcon.style.display = "none";
    }

    window.gtag?.("event", "page_view", {
      page_path: "/showroom",
      page_title: "Showroom",
    });

    return () => {
      document.head.removeChild(canonical);
    };
  }, []);

  const handleBackClick = () => {
    window.gtag?.("event", "click_back_from_showroom");
  };

  return (
    <main className="max-w-6xl mx-auto px-6 py-12 text-gray-800 dark:text-gray-100">
      <h1 className="text-4xl font-bold mb-12 text-left tracking-tight">Showroom</h1>

      <section className="mb-20">
        <div className="flex items-center gap-3 mb-4">
          <Cpu size={20} className="text-blue-600 dark:text-blue-400" />
          <h2 className="text-2xl font-semibold tracking-tight">Technology Stack</h2>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { icon: <Code2 size={20} />, title: "React", desc: "Vite, JSX, functional components" },
            { icon: <Paintbrush size={20} />, title: "Tailwind CSS", desc: "Dark/light mode, print styling" },
            { icon: <Film size={20} />, title: "Framer Motion", desc: "Component animations and transitions" },
            { icon: <MousePointerClick size={20} />, title: "Lucide Icons", desc: "Icon set used across UI" },
            { icon: <LayoutGrid size={20} />, title: "Recharts", desc: "CareerTimeline visualization" },
            { icon: <Server size={20} />, title: "Node.js", desc: "Lightweight backend logic" },
            { icon: <UploadCloud size={20} />, title: "Vercel", desc: "Hosting, CI/CD, preview deploys" },
            { icon: <Layers3 size={20} />, title: "GitHub", desc: "Repo, commit workflow" },
            { icon: <Repeat size={20} />, title: "LocalStorage", desc: "Persisted theme mode" }
          ].map(({ icon, title, desc }, i) => (
            <div key={i} className="flex items-start gap-3 p-4 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 rounded-xl shadow-sm">
              <div className="text-blue-600 dark:text-blue-400 mt-1">{icon}</div>
              <div>
                <p className="font-medium text-sm mb-1 text-gray-800 dark:text-gray-200">{title}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-20">
        <div className="flex items-center gap-3 mb-4">
          <Paintbrush size={20} className="text-blue-600 dark:text-blue-400" />
          <h2 className="text-2xl font-semibold tracking-tight">Design System</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {[
            { label: "Deep Blue", color: "#2563EB" },
            { label: "Primary Blue", color: "#3b82f6" },
            { label: "Accent Blue", color: "#60a5fa" },
            { label: "Dark Background", color: "#171717" },
            { label: "Zinc Gray", color: "#27272a" },
            { label: "Slate Gray", color: "#9ca3af" },
            { label: "Light Gray", color: "#f3f4f6" },
            { label: "White", color: "#ffffff" },
          ].map(({ label, color }, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 shadow-sm hover:shadow-md transition-all"
            >
              <div className="h-16" style={{ backgroundColor: color }} />
              <div className="p-3 flex justify-between items-center">
                <p className="text-sm text-gray-700 dark:text-gray-300">{label}</p>
                <button
                  onClick={() => navigator.clipboard.writeText(color)}
                  className="text-xs font-mono text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition"
                  title="Click to copy"
                >
                  {color}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-20">
        <div className="flex items-center gap-3 mb-4">
          <Settings2 size={20} className="text-blue-600 dark:text-blue-400" />
          <h2 className="text-2xl font-semibold tracking-tight">Visual System Details</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {[ 
            { icon: <Text size={20} />, title: "Fonts", desc: "System UI Sans-serif, responsive sizes (sm, base, xl, 2xl, 3xl)" },
            { icon: <MousePointerClick size={20} />, title: "Icons", desc: "Lucide icons set used throughout (Mail, Github, Linkedin...)" },
            { icon: <Film size={20} />, title: "Animations", desc: "Framer Motion for fade-in, float, and delay effects" },
            { icon: <Repeat size={20} />, title: "Transitions", desc: "Smooth theme switching via localStorage and meta tag sync" }
          ].map(({ icon, title, desc }, i) => (
            <div key={i} className="flex items-start gap-3 p-4 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 rounded-xl shadow-sm">
              <div className="text-blue-600 dark:text-blue-400 mt-1">{icon}</div>
              <div>
                <p className="font-medium text-sm mb-1 text-gray-800 dark:text-gray-200">{title}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-20">
        <div className="flex items-center gap-3 mb-4">
          <Zap size={20} className="text-blue-600 dark:text-blue-400" />
          <h2 className="text-2xl font-semibold tracking-tight">UX / UI Principles</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { icon: <Lightbulb size={18} />, text: "Simplicity and readability" },
            { icon: <Lightbulb size={18} />, text: "Whitespace and visual focus" },
            { icon: <Lightbulb size={18} />, text: "Subtle animations and theming" },
            { icon: <Lightbulb size={18} />, text: "Mobile-first responsive design" },
            { icon: <Lightbulb size={18} />, text: "Print optimization via @media print" },
            { icon: <Lightbulb size={18} />, text: "Accessibility considerations for inclusive UX" },
          ].map(({ icon, text }, i) => (
            <div
              key={i}
              className="flex items-start gap-3 p-4 border rounded-xl bg-white dark:bg-zinc-900 border-gray-200 dark:border-zinc-700 shadow-sm"
            >
              <div className="text-blue-600 dark:text-blue-400 mt-1">{icon}</div>
              <p className="text-sm text-gray-700 dark:text-gray-300">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-20">
        <div className="flex items-center gap-3 mb-4">
          <MonitorSmartphone size={20} className="text-blue-600 dark:text-blue-400" />
          <h2 className="text-2xl font-semibold tracking-tight">Responsiveness</h2>
        </div>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { icon: <Smartphone size={20} />, label: "Mobile" },
            { icon: <Tablet size={20} />, label: "Tablet & Small Screens" },
            { icon: <Monitor size={20} />, label: "Desktop" },
          ].map(({ icon, label }, i) => (
            <div
              key={i}
              className="flex items-center gap-3 p-4 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 rounded-xl shadow-sm"
            >
              <div className="text-blue-600 dark:text-blue-400">{icon}</div>
              <p className="text-sm text-gray-700 dark:text-gray-300">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-20 flex justify-center">
        <a
          href="/"
          onClick={handleBackClick}
          className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium shadow-md transition-all duration-300"
        >
          Back
        </a>
      </div>
    </main>
  );
}