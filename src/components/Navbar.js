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
              <a href="/#features"> Features</a>
            </li>
            <li className="navitem">
              <a href="/#benefits"> Benefits</a>
            </li>
            <li className="navitem">
              <a href="/#pricing">Pricing</a>{" "}
            </li>
            <li className="navitem">
              <a href="/#contactus">Contact</a>
            </li>
          </ul>
        </div>
        <div className="right widt">
          <div className="currencyselector" onClick={dropdowncheck}>
            <div className="currencyimg">
              <img src="flagcurrency.png" alt="IND" />
              IND
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
