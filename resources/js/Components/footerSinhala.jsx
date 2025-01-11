import React from "react";
import "../../css/footersin.css";

const FooterSinhala = () => {
  return (
    <div className="footersin-container">
      <div className="footersin-image-container">
        <img
          src="/images/footer.png"
          alt="Company Logo"
          className="footersin-logo"
        />
        <div className="footersin-header-text">
            සංවර්ධන ලොතරැයි මණ්ඩලය
            <br />356, ආචාර්ය කොල්වින් ආර්. ද සිල්වා මාවත, 
            <br />යූනියන් පෙදෙස, කොළඹ 02
            <div className="footersin-header-text1">
            දුරකථන: 0112 333 546-47 ක්ෂණික: 0114 824 824, 0112 333 778 හෝ 191
            <div className="footersin-header-text2">
            ස්වයංක්‍රීය හඬ සම්බන්ධතා සඳහා 0114 825 825 අමතන්න.
            </div>
            </div>
        </div>
        <div className="footersin-date-container">
        <div className="footersin-date-text">
        ජයග්‍රාහී ටිකට්පත් මාස 6ක් වලංගු වේ.
        <hr />
        🌟 මේ වන විට සුපිරි ජයමල්ල දිනාගෙන ඇත්නම් එදිනට පවතින ජයමල්ල වලංගු වේ.
        </div>
      </div>
      </div>
    </div>
  );
};

export default FooterSinhala;
