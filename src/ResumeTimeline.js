import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Certificates from "./components/Certificates";
import Languages from "./components/Languages";
import Footer from "./components/Footer";
import DownloadButton from "./components/DownloadButton";
import ScrollToTop from "./components/ScrollToTop";
import ThemeToggle from "./components/ThemeToggle";

export default function ResumeTimeline() {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "Marek_Zastko_Resume",
  });

  return (
    <>
      <ThemeToggle />
      <DownloadButton onClick={handlePrint} />
      <ScrollToTop />

      <div
        ref={componentRef}
        id="resume-content"
        className="p-4 md:p-8 max-w-5xl mx-auto font-sans transition-colors duration-300"
      >
        <Header />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Certificates />
        <Languages />
        <Footer />
      </div>
    </>
  );
}