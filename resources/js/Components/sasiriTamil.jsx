import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../css/sasiri.css";

const SasiriTamil = ({ name = "Sasiri" }) => {
  const [lottery, setLottery] = useState({
    number: null,
    color: null,
    ball1: null,
    ball2: null,
    ball3: null,
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

  // Combine individual balls into an array
  const balls = [lottery.ball1, lottery.ball2, lottery.ball3].filter(
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
    <div className="sasiri-ticket-container">
      <div className="sasiri-ticket-card">
        <div className="sasiri-ticket-header">
          <div className="sasiri-ticket-logo-container">
            <img
              src="/images/sasiritamil.png"
              alt={name}
              className="sasiri-ticket-logo"
            />
          </div>
          <div className="sasiri-ticket-draw-number-container">
            <div className="sasiri-ticket-draw-number">
              <div className="sasiri-ticket-draw-number-text">
                வெற்றி வாரம் ▶ {lottery.number || "Loading..."}
              </div>
            </div>
            <div className="sasiri-ticket-color">
              <div className="sasiri-ticket-colour-text">
                வர்ணம் ▶ {translateColor(lottery.color) || "Loading..."}
              </div>
            </div>
            <div className="sasiri-ticket-winning-numbers">
              <div className="sasiri-ticket-winning-numbers-title">
              ---- வெற்றி எண்கள் ----
              </div>
              <div className="sasiri-ticket-winning-numbers-container">
                {balls.length > 0
                  ? balls.map((ball, index) => (
                      <div
                        key={index}
                        className="sasiri-ticket-winning-number"
                      >
                        <div className="sasiri-ticket-winning-number-text">
                          {ball}
                        </div>
                      </div>
                    ))
                  : "Loading..."}
                  <div className="sasiri-ticket-winner-container">
                    <div className="sasiri-ticket-winner">
                        Total no.of <br/> Rs. 200,000 winners : {lottery.total_value || "Loading..."}
                    </div>
                  </div>
              </div>
            </div>
            <div className="sasiri-ticket-special">
              <div className="sasiri-ticket-bottom">
                <div className="sasiri-ticket-next-jackpot">
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

export default SasiriTamil;
