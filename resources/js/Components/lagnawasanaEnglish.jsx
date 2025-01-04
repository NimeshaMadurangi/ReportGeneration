import React from "react";
import "../../css/lagna.css"; // Import the CSS file

const LagnaWasanaTicket = () => {
  return (
    <div className="lagna-ticket-container">
      <div className="lagna-ticket-card">
        {/* Header Section */}
        <div className="lagna-ticket-header">
          {/* Left section with logo */}
          <div className="lagna-ticket-logo-container">
            <img
              src="/images/lag.png"
              alt="Lagna Wasanawa"
              className="lagna-ticket-logo"
            />
          </div>

          {/* Middle section with draw number */}
          <div className="lagna-ticket-draw-number-container">
              <div className="lagna-ticket-draw-number">
                <div className="lagna-ticket-draw-number-text">Draw Number ▶</div>
              </div>
            
              <div className="lagna-ticket-color">
                <div className="lagna-ticket-colour-text">
                  Colour ▶ 
                </div>
              </div>
              <div className="lagna-ticket-winning-numbers">
            <div className="lagna-ticket-winning-numbers-title">Winning Numbers</div>
            <div className="lagna-ticket-winning-numbers-container">
              {[...Array(5)].map((_, index) => (
                <div key={index} className="lagna-ticket-winning-number" />
              ))}
            </div>
            </div>
            
            <div className="lagna-ticket-special">
              <div className="lagna-ticket-bottom">
              {/* Jackpot Section */}
                <div className="lagna-ticket-next-jackpot">
                  Next Super Jackpot : Rs.
                </div>
              </div>
              {/* Special Prize Section */}
              <div className="lagna-ticket-special-prize-container">
                <img
                  src="/images/sc.png"
                  alt="Special Prize"
                  className="lagna-ticket-special-prize-icon"
                />
                Special number for <br /> Rs. 50,000/- cash prize             
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default LagnaWasanaTicket;
