import React from "react";
import "../css/stats.css";

export default function Stats() {
  return (
    <div className="statssection">
      <div className="statselement">
        <div className="bignum">
          <div className="numstat">2.4K</div>
          <div className="colorchangestat">+</div>
        </div>
        <div className="shrttext">Total Customer</div>
      </div>
      <div className="statselement">
        <div className="bignum">
          <div className="numstat">4.9/ </div>
          <div className="colorchangestat">5</div>
        </div>
        <div className="shrttext">Custmer review</div>
      </div>
      <div className="statselement">
        <div className="bignum">
          <div className="colorchangestat">+</div>
          <div className="numstat">796</div>
        </div>
        <div className="shrttext">Partner & Investors</div>
      </div>
      <div className="statselement">
        <div className="bignum">
          <div className="numstat">89</div>
          <div className="colorchangestat">%</div>
        </div>
        <div className="shrttext">Company Growth</div>
      </div>
    </div>
  );
}
