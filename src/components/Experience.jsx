import React from "react";
import { workExperience } from "../data/data";

export default function Experience() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Work Experience</h2>
      {workExperience.map((company, idx) => (
        <div key={idx} className="mb-8 border-l-2 pl-6 relative">
          <div className="flex items-center mb-3">
            <img
              src={company.logo}
              alt={company.company}
              className="w-8 h-8 mr-3 object-contain"
            />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              {company.company}
            </h3>
          </div>

          {company.roles.map((role, index) => {
            const isSE1 = role.title === "Software Engineer 1";
            const showAchievements =
              (company.company === "GymBeam" && index === 0) ||
              (company.company === "Global Payments" && index === 0);

            const achievements =
              company.company === "GymBeam"
                ? [
                    "Relaunched agile processes, resulting in a 100% increase in team delivery and overall efficiency",
                    "Successfully cleaned up over 200 outdated tickets and bugs, streamlining the team’s backlog and improving focus",
                    "Oversaw both engineering and analytics teams from a product perspective, ensuring alignment and consistent delivery",
                  ]
                : company.company === "Global Payments"
                ? [
                    "Developed a machine learning model for churn prediction",
                    "Identified trends and behavior for product launches in Malta and Hungary",
                  ]
                : [];

            return (
              <div
                key={index}
                className={`mb-4 ${isSE1 ? "break-before-page print:break-before-page" : ""}`}
              >
                <h4 className="font-medium text-lg text-gray-800 dark:text-gray-200">
                  {role.title}
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {role.date} | {role.location}
                </p>
                <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-300 space-y-1">
                  {role.responsibilities.map((res, i) => (
                    <li key={i}>{res}</li>
                  ))}
                </ul>

                {showAchievements && (
                  <>
                    <p className="font-semibold text-sm text-gray-600 dark:text-gray-400 mt-3">
                      Key Achievements:
                    </p>
                    <ul className="list-disc list-inside mt-1 text-gray-700 dark:text-gray-300 space-y-1">
                      {achievements.map((ach, i) => (
                        <li key={i}>{ach}</li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            );
          })}
        </div>
      ))}
    </section>
  );
}