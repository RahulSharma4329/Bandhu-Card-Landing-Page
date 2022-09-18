import React from "react";
import "../css/collect.css";

export default function Collect() {
  return (
    <div className="collectcontainer">
      <div className="leftcollect">
        <div className="firstwor ele">Let's</div>
        <div className="secondwor ele">Collect</div>
        <div className="thirdwor ele">the card now</div>
      </div>
      <div className="rightcollect">
        <img src="right-arrow.png" alt="" />
      </div>
    </div>
  );
}
