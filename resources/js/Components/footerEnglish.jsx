import React from "react";
import "../../css/footeren.css";

const FooterEnglish = () => {
  return (
    <div className="footeren-container">
      <div className="footeren-image-container">
        <img
          src="/images/logo.png"
          alt="Company Logo"
          className="footeren-logo"
        />
        <div className="footeren-header-text">
                Development Lotteries Board
            <br />356, Dr. Colvin R. De Silva Mawatha,
            <br />Union Place, Colombo 02
            <div className="footeren-header-text1">
                Tel: 0112 333 546-47 Hotline: 0114 824 824
                <br /> Result Hotline:0112 333 778 or 191
            <div className="footeren-header-text2">
                Interactive Voice Response Service: 0114 825 825
            </div>
            </div>
        </div>
        <div className="footeren-date-container">
        <div className="footeren-date-text">
            The winning tickets will be valid for 6 months.
        <hr />
        🌟 If the super prize has already been won, the starting jackpot will be applicable.
        </div>
      </div>
      </div>
    </div>
  );
};

export default FooterEnglish;
