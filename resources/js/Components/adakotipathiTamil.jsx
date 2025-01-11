import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../css/adakotipathi.css";

const AdakotipathiTamil = ({ name = "Ada kotipathi" }) => {
  const [lottery, setLottery] = useState({
    number: null,
    color: null,
    ball1: null,
    ball2: null,
    ball3: null,
    ball4: null,
    ball5: null,
    next_super: null,
  });

  useEffect(() => {
    const fetchLottery = async () => {
      try {
        const response = await axios.get(`/api/lottery`, { params: { name } });
        setLottery(response.data);
      } catch (error) {
        console.error("Error fetching lottery data:", error);
      }
    };

    fetchLottery();
  }, [name]);

 
  const balls = [lottery.ball1, lottery.ball2, lottery.ball3, lottery.ball4, lottery.ball5].filter(
    (ball) => ball !== null
  );

  const translateColor = (color) => {
    if (color === "Green") {
      return "பச்சை";
    }
    else if (color === "Red") {
        return "சிவப்பு";
    }
    return color;
  };

  return (
    <div className="adakotipathi-ticket-container">
      <div className="adakotipathi-ticket-card">
        <div className="adakotipathi-ticket-header">
          <div className="adakotipathi-ticket-logo-container">
            <img
              src="/images/adakotipathi.png"
              alt={name}
              className="adakotipathi-ticket-logo"
            />
          </div>
          <div className="adakotipathi-ticket-draw-number-container">
            <div className="adakotipathi-ticket-draw-number">
              <div className="adakotipathi-ticket-draw-number-text">
                வெற்றி வாரம் ▶ {lottery.number || "Loading..."}
              </div>
            </div>
            <div className="adakotipathi-ticket-color">
              <div className="adakotipathi-ticket-colour-text">
                வர்ணம் ▶ {translateColor(lottery.color) || "Loading..."}
              </div>
            </div>
            <div className="adakotipathi-ticket-winning-numbers">
              <div className="adakotipathi-ticket-winning-numbers-title">
                ----- வெற்றி எண்கள் -----
              </div>
              <div className="adakotipathi-ticket-winning-numbers-container">
                {balls.length > 0
                  ? balls.map((ball, index) => (
                      <div
                        key={index}
                        className="adakotipathi-ticket-winning-number"
                      >
                        <div className="adakotipathi-ticket-winning-number-text">
                          {ball}
                        </div>
                      </div>
                    ))
                  : "Loading..."}
              </div>
            </div>
            <div className="adakotipathi-ticket-special">
              <div className="adakotipathi-ticket-bottom">
                <div className="adakotipathi-ticket-next-jackpot">
                  அடுத்த சுப்பர் ஐக்பொட் : ரூ. {lottery.next_super || "Loading..."}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdakotipathiTamil;
