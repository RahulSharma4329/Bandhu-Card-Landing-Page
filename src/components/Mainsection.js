import React from "react";
import "../css/mainsection.css";
import Creditcard from "./Creditcard";

export default function Mainsection() {
  return (
    <div className="mainsection">
      <div className="bigtitle">
        <div className="leftcolumn">
          <div className="firstrow">
            <div className="text1">Make Simple</div>
            <img src="iconstar.png" alt="" className="iconstar" />
          </div>
          <div className="secondrow">
            <div className="">with One </div>
            <div className="word1"> Card</div>
          </div>
        </div>
        <div className="rightcolumn">
          <div className="leftcolumninner">
            <a href="/">Get started now</a>
          </div>
          <div className="goicon">
            <a href="/" id="arrowimg">
              <img src="right-arrow.png" alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="cardsdisplay">
        <div className="txtplace">
          <div className="logotxt">Bandhu Card</div>is a seamless card for all
          your financial needs. Use a single card for all your payments and
          enjoy many benefits.
        </div>
        <Creditcard type={1} />
        <Creditcard type={2} />
        <Creditcard type={3} />
      </div>
      <div className="testi">
        <div className="firstestrow">
          <div className="icodiv ico1">
            <img src="person1.jpg" alt="" />
          </div>
          <div className="icodiv ico2">
            <img src="person2.jpg" alt="" />
          </div>
          <div className="icodiv ico3">
            <img src="person3.jpg" alt="" />
          </div>
          <div className="count">20k+</div>
        </div>
        <div className="secondestrow">
          <div className="dot"></div> Recommended by people
        </div>
      </div>
    </div>
  );
}
