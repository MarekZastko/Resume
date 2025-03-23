import React from "react";
import { certificates } from "../data/data";

export default function Certificates() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Certificates</h2>

      <div className="space-y-4 text-sm text-gray-800 dark:text-gray-300">
        {certificates.map((cert, idx) => (
          <div key={idx}>
            <p className="font-medium text-gray-900 dark:text-white">{cert.course}</p>
            <p className="text-gray-500 dark:text-gray-400">Course by {cert.provider}</p>
          </div>
        ))}
      </div>
    </section>
  );
}