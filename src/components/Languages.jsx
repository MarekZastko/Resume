import React from "react";
import { languages } from "../data/data";

const getLevelPercent = (level) => {
  switch (level) {
    case "C2":
      return 100;
    case "C1":
      return 85;
    case "B2":
      return 70;
    case "B1":
      return 40;
    default:
      return 40;
  }
};

export default function Languages() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Languages</h2>
      <div className="space-y-4">
        {languages.map((lang, idx) => (
          <div key={idx} className="flex flex-col gap-1">
            <div className="flex justify-between items-center text-gray-800 dark:text-gray-200 font-medium">
              <span>{lang.name}</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">{lang.level}</span>
            </div>
            <div className="w-full h-2 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-800">
              <div
                className="h-full rounded-full bg-blue-500 dark:bg-blue-400 transition-all duration-300"
                style={{ width: `${getLevelPercent(lang.level)}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}