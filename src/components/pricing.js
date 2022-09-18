import React from "react";
import "../css/pricing.css";
import Creditcard from "./Creditcard.js";

export default function Pricing() {
  return (
    <div className="pricingcontainer">
      <div className="header">
        <div className="firstword">Choose the right</div>
        <div className="secondword">Pricing</div>
        <div className="thirdword">for you</div>
      </div>
      <div className="subheader">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe veritatis
        nulla ipsum voluptate eveniet provident aliquam fugiat reprehenderit
        doloribus assumenda.
      </div>
      <div className="priceboxes">
        <div className="pricebox">
          <div className="pricename">Silver</div>
          <div className="priceamt">₹ 15000</div>
          <div className="learnmore">
            <a href="/">Learn More</a>
            <img src="right-arrow.png" alt="" />
          </div>
        </div>
        <div className="pricebox">
          <div className="pricename">Gold</div>
          <div className="priceamt">₹ 30000</div>
          <div className="learnmore">
            <a href="/">Learn More</a>
            <img src="right-arrow.png" alt="" />
          </div>
        </div>
        <div className="pricebox">
          <div className="pricename">Platinum</div>
          <div className="priceamt">₹ 50000</div>
          <div className="learnmore">
            <a href="/">Learn More</a>
            <img src="right-arrow.png" alt="" />
          </div>
        </div>
      </div>
      <div className="differencebox">
        <div className="firstcolu">
          <Creditcard type={1} />
        </div>
        <div className="secondcolu">
          <div className="heading">Whats the difference?</div>
          <div className="getstartedlogo">
            <div className="leftcolumninner">
              <a href="/">Learn More</a>
            </div>
            <div className="goicon">
              <a href="/">
                <img src="right-arrow.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
