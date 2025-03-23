import React from "react";

export default function Footer() {
  return (
    <footer className="text-center text-sm text-gray-400 mt-8">
      &copy; {new Date().getFullYear()} Designed & built with ❤️ by Marek Zastko
    </footer>
  );
}