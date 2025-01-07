import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../css/kapruka.css";

const KaprukaTamil = ({ name = "Kapruka" }) => {
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

  return (
    <div className="kapruka-ticket-container">
      <div className="kapruka-ticket-card">
        <div className="kapruka-ticket-header">
          <div className="kapruka-ticket-logo-container">
            <img
              src="/images/kaprukalogo.png"
              alt={name}
              className="kapruka-ticket-logo"
            />
          </div>
          <div className="kapruka-ticket-draw-number-container">
            <div className="kapruka-ticket-draw-number">
              <div className="kapruka-ticket-draw-number-text">
                Draw Number ▶ {lottery.number || "Loading..."}
              </div>
            </div>
            <div className="kapruka-ticket-color">
              <div className="kapruka-ticket-colour-text">
                Colour ▶ {lottery.color || "Loading..."}
              </div>
            </div>
            <div className="kapruka-ticket-winning-numbers">
              <div className="kapruka-ticket-winning-numbers-title">
                English Letter, Super Number & Winning Numbers
              </div>
              <div className="kapruka-ticket-winning-numbers-container">
                {balls.length > 0
                  ? balls.map((ball, index) => (
                      <div
                        key={index}
                        className="kapruka-ticket-winning-number"
                      >
                        <div className="kapruka-ticket-winning-number-text">
                          {ball}
                        </div>
                      </div>
                    ))
                  : "Loading..."}
              </div>
            </div>
            <div className="kapruka-ticket-special">
              <div className="kapruka-ticket-bottom">
                <div className="kapruka-ticket-next-jackpot">
                  Next Super Jackpot : Rs. {lottery.next_super || "Loading..."}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KaprukaTamil;
