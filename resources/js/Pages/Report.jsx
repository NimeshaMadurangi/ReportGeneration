import React, { useRef } from "react";
import "../../css/report.css";

// Component Imports
import LagnaWasanaEnglish from "../Components/LagnaWasanaEnglish";
import LagnaWasanaTamil from "../Components/lagnawasanawaTamil";
import LagnaWasanaSinhala from "../Components/lagnawasanawaSinhala";
import SasiriEnglish from "../Components/sasiriEnglish";
import SasiriSinhala from "../Components/sasiriSinhala";
import SasiriTamil from "../Components/sasiriTamil";
import KaprukaEnglish from "../Components/kaprukaEnglish";
import KaprukaSinhala from "../Components/kaprukaSinhala";
import KaprukaTamil from "../Components/kaprukaTamil";
import ShanidaEnglish from "../Components/shanidaEnglish";
import ShanidaSinhala from "../Components/shanidaSinhala";
import ShanidaTamil from "../Components/shanidaTamil";
import SuperballEnglish from "../Components/superballEnglish";
import SuperballSinhala from "../Components/superballSinhala";
import SuperballTamil from "../Components/superballTamil";
import AdakotipathiEnglish from "../Components/adakotipathiEnglish";
import AdakotipathiSinhala from "../Components/adakotipathiSinhala";
import AdakotipathiTamil from "../Components/adakotipathiTamil";
import SupiridanaEnglish from "../Components/supiridanaEnglish";
import SupiridanaSinhala from "../Components/supiridanaSinhala";
import SupiridanaTamil from "../Components/supiridanaTamil";
import HeaderEnglish from "../Components/headerEnglish";
import HeaderSinhala from "@/Components/headerSinhala";
import HeaderTamil from "@/Components/headerTamil";
import FooterSinhala from "@/Components/footerSinhala";
import FooterEnglish from "@/Components/footerEnglish";
import FooterTamil from "@/Components/footerTamil";


const Report = () => {
  const englishRef = useRef(null);
  const sinhalaRef = useRef(null);
  const tamilRef = useRef(null);

 

  const renderSection = (ref, components) => (
    <div ref={ref} className="section-container">
      {components.map((Component, index) => (
        <div key={index} className="component-wrapper">
          <Component />
        </div>
      ))}
    </div>
  );

  return (
    <div className="report-wrapper">
      {/* <button onClick={downloadPDF} className="download-button">
        Download as PDF
      </button> */}

      <div className="report-sections">
        {/* English Section */}
        {renderSection(englishRef, [
          HeaderEnglish,
          LagnaWasanaEnglish,
          SasiriEnglish,
          KaprukaEnglish,
          ShanidaEnglish,
          SuperballEnglish,
          AdakotipathiEnglish,
          SupiridanaEnglish,
          FooterEnglish,
        ])}

        <br />

        {/* Sinhala Section */}
        {renderSection(sinhalaRef, [
          HeaderSinhala,
          LagnaWasanaSinhala,
          SasiriSinhala,
          KaprukaSinhala,
          ShanidaSinhala,
          SuperballSinhala,
          AdakotipathiSinhala,
          SupiridanaSinhala,
          FooterSinhala,
        ])}

        <br />

        {/* Tamil Section */}
        {renderSection(tamilRef, [
          HeaderTamil,
          LagnaWasanaTamil,
          SasiriTamil,
          KaprukaTamil,
          ShanidaTamil,
          SuperballTamil,
          AdakotipathiTamil,
          SupiridanaTamil,
          FooterTamil,
        ])}
      </div>
    </div>
  );
};

export default Report;
