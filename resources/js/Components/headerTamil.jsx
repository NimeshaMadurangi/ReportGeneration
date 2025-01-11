import React from "react";
import "../../css/headerTamil.css";

const HeaderTamil = () => {
  return (
    <div className="headertamil-container">
      <div className="image-container2">
        <img
          src="/images/logo.png"
          alt="Company Logo"
          className="headertamil-logo"
        />
      <div className="headertamil-text-container">
            அபிவிருத்தி லொத்தர் சபை
        <div className="headertamil-text2">
            www.dlb.lk
        </div>
      </div>
      <div className="date-container2">
        <div className="date-text2">
            உத்தியோகபூர்வ முடிவுகள் <br/> செவ்வாய்க்கிமூமை
        </div>
      </div>
      </div>
    </div>
  );
};

export default HeaderTamil;
