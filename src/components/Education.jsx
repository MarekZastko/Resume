import React from "react";
import { education } from "../data/data";

export default function Education() {
  return (
    <section className="mb-12 break-before-page print:break-before-page">
      <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Education</h2>
      {education.map((edu, idx) => (
        <div key={idx} className="mb-8 border-l-2 pl-6 relative">
          <div className="flex items-center mb-3">
            {edu.school.includes("Comenius") ? (
              <div className="relative w-8 h-8 mr-3">
                <img
                  src="/logos/ComeniusDark.png"
                  alt="Comenius University"
                  className="absolute w-8 h-8 object-contain dark:hidden"
                />
                <img
                  src="/logos/ComeniusLight.png"
                  alt="Comenius University (dark)"
                  className="absolute w-8 h-8 object-contain hidden dark:block"
                />
              </div>
            ) : edu.school.includes("Technical University of Košice") ? (
              <div className="relative w-8 h-8 mr-3">
                <img
                  src="/logos/TechnicalDark.png"
                  alt="TUKE"
                  className="absolute w-8 h-8 object-contain dark:hidden"
                />
                <img
                  src="/logos/TechnicalLight.png"
                  alt="TUKE (dark)"
                  className="absolute w-8 h-8 object-contain hidden dark:block"
                />
              </div>
            ) : edu.logo ? (
              <img
                src={edu.logo}
                alt={edu.school}
                className="w-8 h-8 mr-3 object-contain"
              />
            ) : null}

            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{edu.school}</h3>
          </div>

          <div className="mb-2">
            <h4 className="font-medium text-lg text-gray-800 dark:text-gray-200">{edu.degree}</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {edu.date} | {edu.location}
            </p>
          </div>

          <p className="text-sm italic text-gray-500 dark:text-gray-400">
            Thesis: {edu.thesis}
          </p>

          {edu.description && (
            <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">{edu.description}</p>
          )}
        </div>
      ))}
    </section>
  );
}