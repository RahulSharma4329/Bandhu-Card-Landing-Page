import React from "react";
import "../css/smallsection.css";

export default function Smallsections(props) {
  let heading = props.heading;
  let submsg = props.submsg;
  let link = props.link;
  return (
    <div className="sectioncontainer">
      <div className="heading">{heading}</div>
      <div className="submsg">{submsg}</div>
      <div className="getstartedlogo">
        <div className="leftcolumninner">
          <a href={link}>Learn More</a>
        </div>
        <div className="goicon">
          <a href={link}>
            <img src="right-arrow.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}
