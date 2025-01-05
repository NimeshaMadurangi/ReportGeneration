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
              දිනුම් වාරය ▶ 12345
              </div>
            </div>
            <div className="lagna-ticket-color">
              <div className="lagna-ticket-colour-text">වර්ණය ▶ කොළ </div>
            </div>
            <div className="lagna-ticket-winning-numbers">
              <div className="lagna-ticket-winning-numbers-title">
              ජයග්‍රාහී අංක
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
                මීළඟ සුපිරි ජයමල්ල රු.
                </div>
              </div>
              <div className="lagna-ticket-special-prize-container">
                <img
                  src="/images/sc.png"
                  alt="Special Prize"
                  className="lagna-ticket-special-prize-icon"
                />
                <div>
                රු. 50,000/= සඳහා <br/> විශේෂ අංකය
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
