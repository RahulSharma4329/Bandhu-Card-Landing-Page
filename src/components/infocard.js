import React from "react";
import "../css/infocard.css";

export default function Infocard(props) {
  let cardstyle = {
    backgroundColor: props.color,
  };
  let textstyle = {
    color: "white",
  };
  if (props.color === "rgb(227,227,227)") {
    textstyle = {
      color: "black",
    };
  }
  return (
    <div className="cardcon" style={cardstyle}>
      <div className="firstrow customrow" style={textstyle}>
        {props.heading}
      </div>
      <div className="secondtrow custom2row" style={textstyle}>
        {props.details}
      </div>
      <div className="thirdrow">
        <img src="card bg.jpg" alt="" />
      </div>
    </div>
  );
}
