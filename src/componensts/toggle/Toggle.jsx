import React from "react";
import sun from "../../images/sun.png";
import moon from "../../images/moon.png";
import "./toggle.css";

const Toggle = () => {
  return (
    <div className="t">
      <button className="light"></button>
      <img className="sun" src={sun} alt="" />
      <img className="moon" src={moon} alt="" />
      <button className="dark"></button>
    </div>
  );
};

export default Toggle;
