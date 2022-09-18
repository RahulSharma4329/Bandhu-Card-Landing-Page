import React from "react";
import "../css/footer.css";

export default function Footer() {
  return (
    <div className="footercontainer">
      <div className="coluone">
        <div className="footerlogo">
          <a href="/">
            <img src="logo.svg" alt="" />
          </a>
        </div>
        <div className="footerele">
          <a href="/">Contact Us</a>
        </div>
        <div className="footerele">
          <a href="/">FAQ</a>
        </div>
        <div className="footerele">
          <a href="/">Privacy Policy</a>
        </div>
        <div className="footerele">
          <a href="/">Legal Terms</a>
        </div>
      </div>
      <div className="colutwo">©2022 Bandhu Cards - all rights reserved</div>
    </div>
  );
}
