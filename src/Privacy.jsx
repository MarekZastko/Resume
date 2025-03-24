import React from "react";

export default function Privacy() {
  return (
    <main className="min-h-screen px-6 py-10 max-w-2xl mx-auto text-gray-800 dark:text-gray-100">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <p className="mb-4">
        We respect your privacy. This website does not use personal tracking, does not share data with third parties, and only uses basic analytics to understand usage patterns. No personally identifiable information is collected.
      </p>

      <p className="mb-4">
        Cookies are used solely to enhance user experience. You can choose to accept or decline them.
      </p>

      <p className="mb-4">
        For questions, feel free to contact <a href="mailto:zastkomarek@gmail.com" className="text-blue-600 dark:text-blue-400 underline">zastkomarek@gmail.com</a>.
      </p>

      <p className="text-sm text-gray-500 dark:text-gray-400">Last updated: March 2025</p>
    </main>
  );
}