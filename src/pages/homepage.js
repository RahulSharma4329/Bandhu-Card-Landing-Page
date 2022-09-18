import React from "react";
import Navbar from "../components/Navbar";
import Mainsection from "../components/Mainsection";
import Stats from "../components/stats";
import Infosection from "../components/infosection";
import Services from "../components/services";
import Pricing from "../components/pricing";
import Collect from "../components/collect";
import Footer from "../components/footer";

export default function Homepage() {
  return (
    <div>
      <Navbar />
      <Mainsection />
      <Stats />
      <Infosection />
      <Services />
      <Pricing />
      <Collect />
      <Footer />
    </div>
  );
}
