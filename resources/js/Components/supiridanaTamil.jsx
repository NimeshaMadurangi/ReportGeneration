import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../css/supiridana.css";

const SupiridanaTamil = ({ name = "Supiri Dhana Sampatha" }) => {
  const [lottery, setLottery] = useState({
    number: null,
    color: null,
    ball1: null,
    ball2: null,
    ball3: null,
    ball4: null,
    ball5: null,
    ball6: null,
    ball7: null,
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

 
  const balls = [lottery.ball1, lottery.ball2, lottery.ball3, lottery.ball4, lottery.ball5, lottery.ball6, lottery.ball7].filter(
    (ball) => ball !== null
  );

  return (
    <div className="supiridana-ticket-container">
      <div className="supiridana-ticket-card">
        <div className="supiridana-ticket-header">
          <div className="supiridana-ticket-logo-container">
            <img
              src="/images/supiridana.png"
              alt={name}
              className="supiridana-ticket-logo"
            />
          </div>
          <div className="supiridana-ticket-draw-number-container">
            <div className="supiridana-ticket-draw-number">
              <div className="supiridana-ticket-draw-number-text">
                Draw Number ▶ {lottery.number || "Loading..."}
              </div>
            </div>
            <div className="supiridana-ticket-color">
              <div className="supiridana-ticket-colour-text">
                Colour ▶ {lottery.color || "Loading..."}
              </div>
            </div>
            <div className="supiridana-ticket-winning-numbers">
              <div className="supiridana-ticket-winning-numbers-title">
                English Letter, Super Number & Winning Numbers
              </div>
              <div className="supiridana-ticket-winning-numbers-container">
                {balls.length > 0
                  ? balls.map((ball, index) => (
                      <div
                        key={index}
                        className="supiridana-ticket-winning-number"
                      >
                        <div className="supiridana-ticket-winning-number-text">
                          {ball}
                        </div>
                      </div>
                    ))
                  : "Loading..."}
              </div>
            </div>
            <div className="supiridana-ticket-special">
              <div className="supiridana-ticket-bottom">
                <div className="supiridana-ticket-next-jackpot">
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

export default SupiridanaTamil;
