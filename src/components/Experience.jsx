import React from "react";
import { workExperience } from "../data/data";

export default function Experience() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Work Experience</h2>
      {workExperience.map((company, idx) => (
        <div key={idx} className="mb-8 border-l-2 pl-6 relative border-gray-300 dark:border-gray-600">
          <div className="flex items-center mb-3">
            <img src={company.logo} alt={company.company} className="h-8 w-auto mr-3" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{company.company}</h3>
          </div>
          {company.roles.map((role, index) => (
            <div key={index} className="mb-4">
              <h4 className="font-medium text-lg text-gray-800 dark:text-gray-100">{role.title}</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {role.date} | {role.location}
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700 dark:text-gray-300">
                {role.responsibilities.slice(0, 4).map((res, i) => (
                  <li key={i}>{res}</li>
                ))}
              </ul>
              {role.responsibilities.length > 4 && (
                <>
                  <p className="font-semibold text-sm text-gray-600 dark:text-gray-400 mt-3">Key Achievements:</p>
                  <ul className="list-disc list-inside mt-1 text-gray-700 dark:text-gray-300 space-y-1">
                    {role.responsibilities.slice(4).map((res, i) => (
                      <li key={`achieve-${i}`}>{res}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          ))}
        </div>
      ))}
    </section>
  );
}