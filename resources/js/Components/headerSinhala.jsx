// import React from "react";
// import "../../css/headersin.css";

// const HeaderSinhala = () => {
//   return (
//     <div className="headersin-container">
//       <div className="image-container1">
//         <img
//           src="/images/logo.png"
//           alt="Company Logo"
//           className="headersin-logo"
//         />
//       <div className="headersin-text-container">
//             සංවර්ධන ලොතරැයි මණ්ඩලය
//         <div className="headersin-text2">
//             www.dlb.lk
//         </div>
//       </div>
//       <div className="date-container1">
//         <div className="date-text1">
//             වන නිල ප්‍රතිඵල
//         </div>
//       </div>
//       </div>
//     </div>
//   );
// };

// export default HeaderSinhala;


import React, { useEffect, useState } from "react";
import "../../css/headersin.css";

const HeaderSinhala = () => {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const formatDate = () => {
      const date = new Date();
      const options = { weekday: "long" };
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      const weekday = date.toLocaleDateString("en-US", options);

      return `${year}-${month}-${day} ${weekday}`;
    };

    setCurrentDate(formatDate());
  }, []);

  return (
    <div className="headersin-container">
      <div className="image-container1">
        <img
          src="/images/logo.png"
          alt="Company Logo"
          className="headersin-logo"
        />
        <div className="header-text-container">
          DEVELOPMENT LOTTERIES BOARD
          <div className="headersin-text2">www.dlb.lk</div>
        </div>
        <div className="date-container1">
          <div className="date-text1">
            {currentDate || "Loading..."} නිල ප්‍රතිඵල
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSinhala;
