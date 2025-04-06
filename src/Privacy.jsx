import React, { useEffect } from "react";
import { Lock } from "lucide-react";

export default function Privacy() {
  useEffect(() => {
    const cookieIcon = document.getElementById("cookie-icon");
    if (window.location.pathname === "/privacy" && cookieIcon) {
      cookieIcon.style.display = "none";
    }

    window.gtag?.("event", "page_view", {
      page_path: "/privacy",
      page_title: "Privacy",
    });
  }, []);

  const handleBackClick = () => {
    window.gtag?.("event", "click_back_from_privacy");
  };

  return (
    <main className="max-w-5xl mx-auto px-6 py-12 text-gray-800 dark:text-gray-100">
      <h1 className="text-4xl font-bold mb-10 text-left tracking-tight">Privacy Policy</h1>

      <section className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <Lock size={20} className="text-blue-600 dark:text-blue-400" />
          <h2 className="text-2xl font-semibold tracking-tight">Your Privacy</h2>
        </div>
        <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
          We respect your privacy. This website does not use personal tracking, does not share data with third parties,
          and only uses basic analytics to understand usage patterns. No personally identifiable information is collected.
        </p>

        <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
          Cookies are used solely to enhance user experience. You can choose to accept or decline them. No third-party cookies are used.
        </p>

        <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
          For any privacy-related questions, feel free to contact me at{" "}
          <a
            href="mailto:zastkomarek@gmail.com"
            className="text-blue-600 dark:text-blue-400 underline"
          >
            zastkomarek@gmail.com
          </a>
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">Last updated: March 2025</p>
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