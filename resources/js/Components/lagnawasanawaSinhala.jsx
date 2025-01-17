import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../css/lagna.css";

const LagnaWasanaSinhala = ({ name = "Lagna Wasanawa" }) => {
  // State for lottery data
  const [lottery, setLottery] = useState({
    number: null,
    color: null,
    ball1: null,
    ball2: null,
    ball3: null,
    ball4: null,
    ball5: null,
    next_super: null,
    special1: null,
  });

  // Fetch lottery data on component mount
  useEffect(() => {
    const fetchLottery = async () => {
      try {
        const response = await axios.get(`/api/lottery`, { params: { name } });
        setLottery(response.data); // Update state with fetched data
      } catch (error) {
        console.error("Error fetching lottery data:", error);
      }
    };

    fetchLottery();
  }, [name]);

  // Combine individual balls into an array
  const balls = [lottery.ball1, lottery.ball2, lottery.ball3, lottery.ball4, lottery.ball5].filter(
    (ball) => ball !== null
  );

  // Function to translate color to Sinhala
  const translateColor = (color) => {
    if (color === "Green") {
      return "කොළ";
    }
    else if (color === "Red") {
        return "රතු";
    }
    else if (color === "Blue") {
      return "නිල්";
    }
    else if (color === "Brown") {
      return "දුඹුරු";
    }
    return color;
  };

  const ballImageMap = {
    CAPRICORN: "/images/lagnaimages/capricorn.png",
    AQUARIUS: "/images/lagnaimages/aquarius.png",
    PISCES: "/images/lagnaimages/pisces.png",
    ARIES: "/images/lagnaimages/aries.png",
    TAURUS: "/images/lagnaimages/taurus.png",
    GEMINI: "/images/lagnaimages/gemini.png",
    CANCER: "/images/lagnaimages/cancer.png",
    LEO: "/images/lagnaimages/leo.png",
    VIRGO: "/images/lagnaimages/virgo.png",
    LIBRA: "/images/lagnaimages/libra.png",
    SCORPIO: "/images/lagnaimages/scorpio.png",
    SAGITTARIUS: "/images/lagnaimages/sagittarius.png",
  };

  return (
    <div className="lagna-ticket-container">
      <div className="lagna-ticket-card">
        <div className="lagna-ticket-header">
          <div className="lagna-ticket-logo-container">
            <img
              src="/images/lag.png"
              alt={name}
              className="lagna-ticket-logo"
            />
          </div>
          <div className="lagna-ticket-draw-number-container">
            <div className="lagna-ticket-draw-number">
              <div className="lagna-ticket-draw-number-text">
                දිනුම් වාරය ▶ {lottery.number || "Loading..."}
              </div>
            </div>
            <div className="lagna-ticket-color">
              <div className="lagna-ticket-colour-text1">
                වර්ණය ▶ {translateColor(lottery.color) || "Loading..."}
              </div>
            </div>
            <div className="lagna-ticket-winning-numbers">
              <div className="lagna-ticket-winning-numbers-title">
                ජයග්‍රාහී අංක
              </div>
              <div className="lagna-ticket-winning-numbers-container">
                  {balls.length > 0
                    ? balls.map((ball, index) => (
                        <div key={index} className="lagna-ticket-winning-number">
                          {index === 4 && ballImageMap[ball] ? ( // Check if it's ball5 and a valid image exists
                            <img
                              src={ballImageMap[ball]}
                              alt={`Ball ${ball}`}
                              className="lagna-ticket-ball-image"
                            />
                          ) : (
                            <div className="lagna-ticket-winning-number-text">{ball}</div> // Render text for other balls
                          )}
                        </div>
                      ))
                    : "Loading..."}
              </div>
            </div>
            <div className="lagna-ticket-special">
              <div className="lagna-ticket-bottom">
                <div className="lagna-ticket-next-jackpot">
                  මීළඟ සුපිරි ජයමල්ල රු. {lottery.next_super || "Loading..."}
                </div>
              </div>
              <div className="lagna-ticket-special-prize-container">
                <img
                  src="/images/scsinhala.png"
                  alt="Special Prize"
                  className="lagna-ticket-special-prize-icon"
                />
                <div>
                  රු. 50,000/- සඳහා <br /> විශේෂ අංකය : {lottery.special1 || "Loading..."}
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
