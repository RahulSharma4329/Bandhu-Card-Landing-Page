import React from "react";
import Navbar from "../components/Navbar";
import Mainsection from "../components/Mainsection";
import Stats from "../components/stats";
import Infosection from "../components/infosection";

export default function Homepage() {
  return (
    <div>
      <Navbar />
      <Mainsection />
      <Stats />
      <Infosection />
    </div>
  );
}
