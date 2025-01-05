import React from "react";
import "../../css/lagna.css";

const LagnaWasanaSinhala = () => {
  return (
    <div className="lagna-ticket-container">
      <div className="lagna-ticket-card">
        <div className="lagna-ticket-header">
          <div className="lagna-ticket-logo-container">
            <img
              src="/images/lag.png"
              alt="Lagna Wasanawa"
              className="lagna-ticket-logo"
            />
          </div>
          <div className="lagna-ticket-draw-number-container">
            <div className="lagna-ticket-draw-number">
              <div className="lagna-ticket-draw-number-text">
                Draw Number ▶ 12345
              </div>
            </div>
            <div className="lagna-ticket-color">
              <div className="lagna-ticket-colour-text">Colour ▶ green</div>
            </div>
            <div className="lagna-ticket-winning-numbers">
              <div className="lagna-ticket-winning-numbers-title">
                Winning Numbers
              </div>
              <div className="lagna-ticket-winning-numbers-container">
                {[...Array(5)].map((_, index) => (
                  <div key={index} className="lagna-ticket-winning-number" />
                ))}
              </div>
            </div>
            <div className="lagna-ticket-special">
              <div className="lagna-ticket-bottom">
                <div className="lagna-ticket-next-jackpot">
                  Next Super Jackpot : Rs.
                </div>
              </div>
              <div className="lagna-ticket-special-prize-container">
                <img
                  src="/images/sc.png"
                  alt="Special Prize"
                  className="lagna-ticket-special-prize-icon"
                />
                <div>
                  Special number for <br /> Rs. 50,000/- cash prize
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LagnaWasanaSinhala;
