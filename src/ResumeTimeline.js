import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import Header from "./components/Header";
import About from "./components/About";
import CareerTimeline from "./components/CareerTimeline";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Certificates from "./components/Certificates";
import Languages from "./components/Languages";
import Footer from "./components/Footer";
import DownloadButton from "./components/DownloadButton";
import ScrollToTop from "./components/ScrollToTop";
import ThemeToggle from "./components/ThemeToggle";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react"

export default function ResumeTimeline() {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "Resume_Marek_Zastko",
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
        <CareerTimeline />
        <Experience />
        <Skills />
        <Education />
        <Certificates />
        <Languages />
        <Footer />
        <SpeedInsights/>
        <Analytics/>
      </div>
    </>
  );
}