import React from "react";
import Navbar from "../components/Navbar";
import Mainsection from "../components/Mainsection";
import Stats from "../components/stats";

export default function Homepage() {
  return (
    <div>
      <Navbar />
      <Mainsection />
      <Stats />
    </div>
  );
}
