import React from "react";
import "../css/creditcard.css";

export default function Creditcard(type) {
  let clas = "cardborder type" + type["type"].toString();
  let typetext;
  if (type.type === 1) {
    typetext = "Silver";
  } else if (type.type === 2) {
    typetext = "Gold";
  } else if (type.type === 3) {
    typetext = "Platinum";
  }
  return (
    <div className={clas}>
      <div className="firstrowcard">
        <div className="logoandcompany">
          <img src="logo.svg" alt="" />
        </div>
        <div className="typeofcard">{typetext}</div>
      </div>
      <div className="secondrowcard">
        <img src="sim.png" alt="" />
      </div>
      <div className="thirdrowcard">
        <div className="column1">2415 1241 7932 5281</div>
        <div className="column2">
          <div className="row1">Valid Thru</div>
          <div className="row2">01/27</div>
        </div>
      </div>
      <div className="fourthrowcard">Rahul Sharma</div>
    </div>
  );
}
