import React from "react";
import { Download } from "lucide-react";

export default function DownloadButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-4 left-4 z-50 p-2 rounded-full bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300 print:hidden"
      title="Download CV"
    >
      <Download size={18} className="text-gray-700 dark:text-gray-200" />
    </button>
  );
}