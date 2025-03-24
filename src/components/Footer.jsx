import React from "react";

export default function Footer() {
  return (
    <footer className="text-center text-sm text-gray-400 mt-8 print:hidden">
      Made with{" "}
      <span className="dark:hidden">🖤</span>
      <span className="hidden dark:inline">🤍</span>{" "}
      by Marek Zastko
    </footer>
  );
}