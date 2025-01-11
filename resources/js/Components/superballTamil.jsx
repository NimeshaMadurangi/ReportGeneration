import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../css/superball.css";

const SuperballTamil = ({ name = "Superball" }) => {
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
    <div className="superball-ticket-container">
      <div className="superball-ticket-card">
        <div className="superball-ticket-header">
          <div className="superball-ticket-logo-container">
            <img
              src="/images/superball.png"
              alt={name}
              className="superball-ticket-logo"
            />
          </div>
          <div className="superball-ticket-draw-number-container">
            <div className="superball-ticket-draw-number">
              <div className="superball-ticket-draw-number-text">
                வெற்றி வாரம் ▶ {lottery.number || "Loading..."}
              </div>
            </div>
            <div className="superball-ticket-color">
              <div className="superball-ticket-colour-text">
                வர்ணம் ▶ {translateColor(lottery.color) || "Loading..."}
              </div>
            </div>
            <div className="superball-ticket-winning-numbers">
              <div className="superball-ticket-winning-numbers-title">
                ---- வெற்றி எண்கள் ----
              </div>
              <div className="superball-ticket-winning-numbers-container">
                {balls.length > 0
                  ? balls.map((ball, index) => (
                      <div
                        key={index}
                        className="superball-ticket-winning-number"
                      >
                        <div className="superball-ticket-winning-number-text">
                          {ball}
                        </div>
                      </div>
                    ))
                  : "Loading..."}
              </div>
            </div>
            <div className="superball-ticket-special">
              <div className="superball-ticket-bottom">
                <div className="superball-ticket-next-jackpot">
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

export default SuperballTamil;
