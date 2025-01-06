import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../css/lagna.css";

const LagnaWasanaTamil = ({ name = "Lagna Wasanawa" }) => {
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

  // Function to translate color to Tamil
  const translateColor = (color) => {
    if (color === "Green") {
      return "பச்சை";
    }
    else if (color === "Red") {
        return "சிவப்பு";
    }
    return color;
  };

  const ballImageMap = {
    CAPRICORN: "/images/lagnaimages/capricorn.png",
    // AQUARIUS: "/images/lagnaimages/aquarius.png",
    // PISCES: "/images/lagnaimages/pisces.png",
    // ARIES: "/images/lagnaimages/aries.png",
    // TAURUS: "/images/lagnaimages/taurus.png",
    // GEMINI: "/images/lagnaimages/gemini.png",
    // CANCER: "/images/lagnaimages/cancer.png",
    // LEO: "/images/lagnaimages/leo.png",
    // VIRGO: "/images/lagnaimages/virgo.png",
    // LIBRA: "/images/lagnaimages/libra.png",
    // SCORPIO: "/images/lagnaimages/scorpio.png",
    // SAGITTARIUS: "/images/lagnaimages/sagittarius.png",
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
                  வெற்றி வாரம் ▶ {lottery.number || "Loading..."}
              </div>
            </div>
            <div className="lagna-ticket-color">
              <div className="lagna-ticket-colour-text">
              வர்ணம் ▶ {translateColor(lottery.color) || "Loading..."}
              </div>
            </div>
            <div className="lagna-ticket-winning-numbers">
              <div className="lagna-ticket-winning-numbers-title">
                  வெற்றி எண்கள்
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
                  அடுத்த சுப்பர் ஐக்பொட் : ரூ.{lottery.next_super || "Loading..."}
                </div>
              </div>
              <div className="lagna-ticket-special-prize-container">
                <img
                  src="/images/sc.png"
                  alt="Special Prize"
                  className="lagna-ticket-special-prize-icon"
                />
                <div>
                  ரூ 50,000/- பணம் பரிசுகான <br/> வீசேட இலக்கங்கள்
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LagnaWasanaTamil;
