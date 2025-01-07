import React, { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import LagnaWasanaEnglish from "../Components/LagnaWasanaEnglish";
import LagnaWasanaTamil from "@/Components/lagnawasanawaTamil";
import LagnaWasanaSinhala from "@/Components/lagnawasanawaSinhala";
import SasiriEnglish from "@/Components/sasiriEnglish";
import SasiriSinhala from "@/Components/sasiriSinhala";
import SasiriTamil from "@/Components/sasiriTamil";
import KaprukaEnglish from "@/Components/kaprukaEnglish";
import KaprukaSinhala from "@/Components/kaprukaSinhala";
import KaprukaTamil from "@/Components/kaprukaTamil";
import ShanidaEnglish from "@/Components/shanidaEnglish";
import ShanidaSinhala from "@/Components/shanidaSinhala";
import ShanidaTamil from "@/Components/shanidaTamil";
import SuperballEnglish from "@/Components/superballEnglish";
import SuperballSinhala from "@/Components/superballSinhala";
import SuperballTamil from "@/Components/superballTamil";
import AdakotipathiEnglish from "@/Components/adakotipathiEnglish";
import AdakotipathiSinhala from "@/Components/adakotipathiSinhala";
import AdakotipathiTamil from "@/Components/adakotipathiTamil";

const Report = () => {
  const englishRef = useRef(null);
  const sinhalaRef = useRef(null);
  const tamilRef = useRef(null);

  const downloadPDF = async () => {
    const pdf = new jsPDF("p", "mm", "a4");
    const width = 210; // A4 width in mm
    let yOffset = 0;

    const generatePage = async (ref) => {
      const element = ref.current;
      const canvas = await html2canvas(element);
      const imgData = canvas.toDataURL("image/png");
      const imgHeight = (canvas.height * width) / canvas.width;

      if (yOffset !== 0) {
        pdf.addPage();
      }

      pdf.addImage(imgData, "PNG", 0, 0, width, imgHeight);
      yOffset += imgHeight;
    };

    await generatePage(englishRef); // First page
    await generatePage(sinhalaRef); // Second page
    await generatePage(tamilRef); // Third page

    pdf.save("Report.pdf");
  };

  return (
    <div>
      <button
        onClick={downloadPDF}
        className="bg-blue-800 text-white px-4 py-2 rounded mb-4"
      >
        Download as PDF
      </button>

      <div>
        {/* English Section */}
        <div ref={englishRef} className="grid grid-cols-7 sm:grid-cols-2 md:grid-cols-1 gap-x-3 gap-y-3 mt-8">
          <LagnaWasanaEnglish />
          <SasiriEnglish />
          <KaprukaEnglish />
          <ShanidaEnglish />
          <SuperballEnglish />
          <AdakotipathiEnglish />
        </div>

        {/* Sinhala Section */}
        <div ref={sinhalaRef} className="grid grid-cols-7 sm:grid-cols-2 md:grid-cols-1 gap-x-3 gap-y-3 mt-8">
          <LagnaWasanaSinhala />
          <SasiriSinhala />
          <KaprukaSinhala />
          <ShanidaSinhala />
          <SuperballSinhala />
          <AdakotipathiSinhala />
        </div>

        {/* Tamil Section */}
        <div ref={tamilRef} className="grid grid-cols-7 sm:grid-cols-2 md:grid-cols-1 gap-x-3 gap-y-3 mt-8">
          <LagnaWasanaTamil />
          <SasiriTamil />
          <KaprukaTamil />
          <ShanidaTamil />
          <SuperballTamil />
          <AdakotipathiTamil />
        </div>
      </div>
    </div>
  );
};

export default Report;
