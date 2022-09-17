import React from "react";
import "../css/services.css";
import Creditcard from "./Creditcard";
import Smallsections from "./smallsections";
export default function Services() {
  return (
    <div className="servicescontainer">
      <div className="headertext">
        <div className="normal">We provide the best </div>
        <div className="secondline">
          <div className="normal">experience through</div>
          <div className="colorchangetext">Bandhu Card</div>
        </div>
      </div>
      <div className="contentarea">
        <div className="firstcolumn">
          <Creditcard type={1} />
          <Creditcard type={2} />
          <Creditcard type={3} />
        </div>
        <div className="secondcolumn">
          <Smallsections
            heading="Bandhu card made with best materials"
            submsg="Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
        tenetur esse eos eaque dolores, quos architecto delectus cumque itaque
        consequuntur cum. Expedita cumque voluptas veritatis laborum corporis.
        Iure sit ullam, voluptate voluptatem earum labore."
            link="/"
          />
          <Smallsections
            heading="Designed with love so we produce premium high quality designs"
            submsg="Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
        tenetur esse eos eaque dolores, quos architecto delectus cumque itaque
        consequuntur cum. Expedita cumque voluptas veritatis laborum corporis.
        Iure sit ullam, voluptate voluptatem earum labore."
            link="/"
          />
          <Smallsections
            heading="Launching our new product with special benefits"
            submsg="Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
        tenetur esse eos eaque dolores, quos architecto delectus cumque itaque
        consequuntur cum. Expedita cumque voluptas veritatis laborum corporis.
        Iure sit ullam, voluptate voluptatem earum labore."
            link="/"
          />
        </div>
      </div>
    </div>
  );
}
