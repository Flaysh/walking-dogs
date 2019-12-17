import React from "react";
import wings1 from "../../assets/MainPage/wings1.png";
import wings2 from "../../assets/MainPage/wings2.png";
import wings3 from "../../assets/MainPage/wings3.png";
import "./Wings.css";

const Wings = props => {
  switch (props.logokey) {
    case 0:
      return (
        <img
          src={wings1}
          alt="logo"
          className="none"
          onClick={props.logocounter}
        />
      );
    case 1:
      return (
        <img
          src={wings1}
          alt="logo1"
          className="logo"
          onClick={props.logocounter}
        />
      );
    case 2:
      return (
        <img
          src={wings2}
          alt="logo2"
          className="logo"
          onClick={props.logocounter}
        />
      );
    default:
      return (
        <img
          src={wings3}
          alt="logo2"
          className="logo"
          onClick={props.logocounter}
        />
      );
  }
};

export default Wings;
