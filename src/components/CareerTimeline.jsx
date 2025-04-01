import React from "react";

const jobs = [
  {
    company: "GymBeam",
    start: new Date("2023-12-01"),
    end: new Date("2025-01-31"),
    color: "bg-blue-400"
  },
  {
    company: "Global Payments",
    start: new Date("2023-06-01"),
    end: new Date("2023-12-31"),
    color: "bg-blue-500"
  },
  {
    company: "Dell Technologies",
    start: new Date("2022-08-01"),
    end: new Date(),
    color: "bg-blue-600"
  }
];

const startYear = 2022;
const endYear = 2025;
const yearMonths = (endYear - startYear + 1) * 12;

export default function CareerTimeline() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white text-left">
        Career Timeline
      </h2>
      <div className="space-y-6">
        {jobs.map((job, i) => {
          const start = (job.start.getFullYear() - startYear) * 12 + job.start.getMonth();
          const end = (job.end.getFullYear() - startYear) * 12 + job.end.getMonth();
          const width = ((end - start + 1) / yearMonths) * 100;
          const marginLeft = (start / yearMonths) * 100;

          return (
            <div key={i} className="w-full">
              <p className="mb-1 text-sm text-gray-700 dark:text-gray-300 font-medium">
                {job.company}
              </p>
              <div className="relative h-4 bg-gray-200 dark:bg-zinc-800 rounded overflow-hidden">
                <div
                  className={`absolute top-0 h-full ${job.color} rounded`}
                  style={{ width: `${width}%`, left: `${marginLeft}%` }}
                ></div>
              </div>
            </div>
          );
        })}
        <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-2">
          {[2022, 2025].map((year) => (
            <span key={year}>{year}</span>
          ))}
        </div>
      </div>
    </section>
  );
}