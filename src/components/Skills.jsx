import React from "react";
import { hardSkills, softSkills } from "../data/data";

export default function Skills() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Skills</h2>

      <div className="mb-4">
        <h3 className="text-lg font-medium mb-2 text-gray-700 dark:text-gray-300">Hard Skills</h3>
        <div className="flex flex-wrap gap-2">
          {hardSkills.map((skill, idx) => (
            <span
              key={idx}
              className="bg-blue-100 dark:bg-blue-800 dark:text-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-2 text-gray-700 dark:text-gray-300">Soft Skills</h3>
        <div className="flex flex-wrap gap-2">
          {softSkills.map((skill, idx) => (
            <span
              key={idx}
              className="bg-gray-100 dark:bg-gray-700 dark:text-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}