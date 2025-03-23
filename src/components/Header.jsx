import React from "react";
import { Mail, Linkedin, Github } from "lucide-react";

export default function Header() {
  return (
    <header className="flex flex-col items-center text-center mb-10">
      <img
        src="/MarekZastko.jpg"
        alt="Marek Zastko"
        className="w-28 h-28 rounded-full shadow mb-4 object-cover"
      />
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Marek Zastko</h1>
      <p className="text-gray-600 dark:text-gray-300 text-base">Product Owner & Engineer</p>

      <div className="text-sm text-gray-500 dark:text-gray-400 mt-2 mb-4">
        Bratislava, Slovakia |{" "}
        <span className="hidden sm:inline">+421 907 040 156</span>
        <a
          href="tel:+421907040156"
          className="inline sm:hidden no-underline text-gray-500 dark:text-gray-400"
        >
          +421 907 040 156
        </a>
      </div>

      <div className="flex gap-4">
        <a href="mailto:zastkomarek@gmail.com" className="hover:text-blue-600">
          <Mail />
        </a>
        <a
          href="https://www.linkedin.com/in/marekzastko"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-600"
        >
          <Linkedin />
        </a>
        <a
          href="https://github.com/marekzastko"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-600"
        >
          <Github />
        </a>
      </div>
    </header>
  );
}