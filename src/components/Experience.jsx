import React from "react";
import { workExperience } from "../data/data";

export default function Experience() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
        Work Experience
      </h2>

      {workExperience.map((company, idx) => {
        const isGlobalPayments = company.company === "Global Payments";

        return (
          <div
            key={idx}
            className={`mb-8 ${isGlobalPayments ? "break-before-page print:break-before-page" : ""}`}
          >
            <div className={`relative ${isGlobalPayments ? "print:pt-5" : ""}`}>
              <div className="border-l-2 pl-6">
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
                  const showAchievements =
                    (company.company === "GymBeam" && index === 0) ||
                    (company.company === "Global Payments" && index === 0);

                  const achievements =
                    company.company === "GymBeam"
                      ? [
                          "Relaunched agile processes, resulting in a 100% increase in team delivery and overall efficiency",
                          "Successfully cleaned up over 200 outdated tickets and bugs, streamlining the team’s backlog and improving focus",
                          "Oversaw both engineering and analytics teams from a product perspective, ensuring alignment and consistent delivery",
                          "Set up and maintained the company Atlassian ecosystem, standardizing workflows and improving cross-team collaboration",
                        ]
                      : company.company === "Global Payments"
                      ? [
                          "Developed a machine learning model for churn prediction",
                          "Identified trends and behavior for product launches in Malta and Hungary",
                        ]
                      : [];

                  return (
                    <div key={index} className="mb-4">
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
            </div>
          </div>
        );
      })}
    </section>
  );
}