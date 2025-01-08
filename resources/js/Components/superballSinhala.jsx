import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../css/superball.css";

const SuperballEnglish = ({ name = "Superball" }) => {
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
      return "කොළ";
    }
    else if (color === "Red") {
        return "රතු";
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
                දිනුම් වාරය ▶ {lottery.number || "Loading..."}
              </div>
            </div>
            <div className="superball-ticket-color">
              <div className="superball-ticket-colour-text">
                වර්ණය ▶ {translateColor(lottery.color) || "Loading..."}
              </div>
            </div>
            <div className="superball-ticket-winning-numbers">
              <div className="superball-ticket-winning-numbers-title">
                ------- ජයග්‍රාහී අංක -------
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
                  මීළඟ සුපිරි ජයමල්ල රු. {lottery.next_super || "Loading..."}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuperballEnglish;
