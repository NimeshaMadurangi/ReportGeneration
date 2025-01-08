import React, { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "../../css/report.css";

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
import SupiridanaEnglish from "@/Components/supiridanaEnglish";
import SupiridanaSinhala from "@/Components/supiridanaSinhala";
import SupiridanaTamil from "@/Components/supiridanaTamil";

const Report = () => {
  const englishRef = useRef(null);
  const sinhalaRef = useRef(null);
  const tamilRef = useRef(null);

  const downloadPDF = async () => {
    try {
      const pdf = new jsPDF("p", "mm", "a4");
      const width = 210; // PDF width in mm
      let yOffset = 0;

      const generatePage = async (ref) => {
        if (!ref.current) {
          console.error("Reference element not found.");
          return;
        }
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

      await generatePage(englishRef);
      await generatePage(sinhalaRef);
      await generatePage(tamilRef);

      pdf.save("Report.pdf");
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };

  const renderSection = (ref, components) => (
    <div ref={ref} className="section-container">
      {components.map((Component, index) => (
        <Component key={index} />
      ))}
    </div>
  );

  return (
    <div className="report-wrapper">
      <button onClick={downloadPDF} className="download-button">
        Download as PDF
      </button>

      <div className="report-sections">
        {renderSection(englishRef, [
          LagnaWasanaEnglish,
          SasiriEnglish,
          KaprukaEnglish,
          ShanidaEnglish,
          SuperballEnglish,
          AdakotipathiEnglish,
          SupiridanaEnglish,
        ])}

        {renderSection(sinhalaRef, [
          LagnaWasanaSinhala,
          SasiriSinhala,
          KaprukaSinhala,
          ShanidaSinhala,
          SuperballSinhala,
          AdakotipathiSinhala,
          SupiridanaSinhala,
        ])}

        {renderSection(tamilRef, [
          LagnaWasanaTamil,
          SasiriTamil,
          KaprukaTamil,
          ShanidaTamil,
          SuperballTamil,
          AdakotipathiTamil,
          SupiridanaTamil,
        ])}
      </div>
    </div>
  );
};

export default Report;
