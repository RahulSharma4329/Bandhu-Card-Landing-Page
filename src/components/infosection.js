import React from "react";
import "../css/infosection.css";
import Infocard from "./infocard";

export default function () {
  return (
    <div className="infosectioncontainer">
      <div className="firstrow inforow">
        <div className="firstcol w-70">
          <div className="line1">Great advantages</div>
          <div className="line2">
            <div className="normalline"> of becoming a</div>
            <div className="colorchangestat">member</div>
          </div>
        </div>
        <div className="secondcol w-30">
          <p className="msgpara">
            Become a member now and earn 1% rewards for every transaction and
            use the rewards to avail heavy discounts on all the partner outlets.
          </p>
        </div>
      </div>
      <div className="secondrow infogetstarted">
        <div className="leftcolumninner">
          <a href="">Get started now</a>
        </div>
        <div className="goicon">
          <a href="">
            <img src="right-arrow.png" alt="" />
          </a>
        </div>
      </div>
      <div className="cardsdisplay">
        <Infocard
          color="#292929"
          heading="All payment solution"
          details="One single solution for all the payment needs use the cards dor apyment on all the payment outlets supported with visa. Earn rewards on purchasing on all the outlets and use the rewards to avail "
        />
        <Infocard
          color="rgb(227,227,227)"
          heading="Take control of your card"
          details="Take the control in your hand with our app. Use the app to control the limt per transactions, switch on and off the card at anytime and control many more features of your card with our app."
        />
      </div>
    </div>
  );
}
