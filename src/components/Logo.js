import React from "react";
import LogoView from "../usepopcorn-logo.png";

function Logo() {
  return (
    <div className="logo">
      <img src={LogoView} alt="usepopcorn logo" className="logo-view" />
    </div>
  );
}

export default Logo;
