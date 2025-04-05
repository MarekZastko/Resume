import React from "react";
import { Mail, Linkedin, Github } from "lucide-react";

export default function Header() {
  return (
    <header className="flex flex-col items-center text-center mb-10">
      <div className="relative w-28 h-28 mb-4">
        <img
          src="/MarekZastko.jpg"
          alt="Marek Zastko"
          loading="eager"
          className="rounded-full shadow object-cover w-full h-full animate-float print:animate-none print:shadow-none"
        />

        <div
          className="bubble print:hidden"
          style={{ top: "0.25rem", left: "0.75rem", animationDelay: "0s" }}
        ></div>
        <div
          className="bubble print:hidden"
          style={{ bottom: "0.5rem", right: "0.5rem", animationDelay: "1s" }}
        ></div>
        <div
          className="bubble print:hidden"
          style={{ top: "0.5rem", right: "1rem", animationDelay: "2s" }}
        ></div>
      </div>

      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Marek Zastko</h1>
      <p className="text-gray-600 dark:text-gray-300 text-base">Product Owner & Engineer</p>

      <div className="text-sm text-gray-500 dark:text-gray-400 mt-2 mb-4 text-center">
        <span className="block sm:inline">Bratislava, Slovakia</span>
        <span className="hidden sm:inline"> | </span>
        <span className="block sm:hidden">
          {" "}
          <a href="tel:+421907040156" className="hover:underline">
            +421 907 040 156
          </a>
        </span>
        <span className="hidden sm:inline">{" "}+421 907 040 156</span>
      </div>

      <div className="flex gap-4">
        <a href="mailto:zastkomarek@gmail.com" className="hover:text-blue-600" aria-label="Email Marek Zastko">
          <Mail />
        </a>
        <a
          href="https://www.linkedin.com/in/marekzastko"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-600"
          aria-label="LinkedIn Marek Zastko"
        >
          <Linkedin />
        </a>
        <a
          href="https://github.com/marekzastko"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-600"
          aria-label="GitHub Marek Zastko"
        >
          <Github />
        </a>
      </div>
    </header>
  );
}