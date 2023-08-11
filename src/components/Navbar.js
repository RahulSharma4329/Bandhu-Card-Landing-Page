import React from "react";
import "../css/navbar.css";

export default function Navbar() {
  const dropdowncheck = () => {};
  return (
    <div>
      <nav className="navbar">
        <div className="left widt">
          <div className="logo">
            <img src="logo.svg" alt="" />
          </div>
        </div>
        <div className="center widt">
          <ul className="navbarelements">
            <li className="navitem">
              <a href="/#features" className="hover-underline-animation"> Features</a>
            </li>
            <li className="navitem">
              <a href="/#benefits" className="hover-underline-animation"> Benefits</a>
            </li>
            <li className="navitem">
              <a href="/#pricing" className="hover-underline-animation">Pricing</a>{" "}
            </li>
            <li className="navitem">
              <a href="/#contactus" className="hover-underline-animation">Contact</a>
            </li>
          </ul>
        </div>
        <div className="right widt">
          <div className="currencyselector" onClick={dropdowncheck}>
            <div className="currencyimg glow">
              <img src="flagcurrency.png" alt="IND" />
              IND
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
