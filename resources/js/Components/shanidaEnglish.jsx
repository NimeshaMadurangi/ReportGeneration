import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../css/shanida.css";

const ShanidaEnglish = ({ name = "Shanida" }) => {
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

  return (
    <div className="shanida-ticket-container">
      <div className="shanida-ticket-card">
        <div className="shanida-ticket-header">
          <div className="shanida-ticket-logo-container">
            <img
              src="/images/shanida.png"
              alt={name}
              className="shanida-ticket-logo"
            />
          </div>
          <div className="shanida-ticket-draw-number-container">
            
              <div className="shanida-ticket-draw-number-text">
                Draw Number
              </div>
              <div className="shanida-ticket-draw-number-text1">
                {lottery.number || "Loading..."}
              </div>
            
            
              <div className="shanida-ticket-colour-text">
                Colour
              </div>
              <div className="shanida-ticket-colour-text1">
                {lottery.color || "Loading..."}
              </div>
            
            <div className="shanida-ticket-winning-numbers">
              <div className="shanida-ticket-winning-numbers-title">
                ---- Winning Numbers ----
              </div>
              <div className="shanida-ticket-winning-numbers-container">
                {balls.length > 0
                  ? balls.map((ball, index) => (
                      <div
                        key={index}
                        className="shanida-ticket-winning-number"
                      >
                        <div className="shanida-ticket-winning-number-text">
                          {ball}
                        </div>
                      </div>
                    ))
                  : "Loading..."}
              </div>
            </div>
            <div className="shanida-ticket-special">
                <div className="shanida-ticket-bottom">
                  Next Super Jackpot : Rs. {lottery.next_super || "Loading..."}
                </div>
                {lottery.special1 && (
                  <div className="shanida-ticket-special-prize-container">
                    <img
                      src="/images/sc.png"
                      alt="Special Prize"
                      className="shanida-ticket-special-prize-icon"
                    />
                    <div className="special-numbers">
                      Special number for Rs. 50,000/- cash prize : {lottery.special1}
                    </div>
                  </div>
                )}
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShanidaEnglish;
