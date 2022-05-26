import React from "react";
import "./card.scss";

export default function Card(props) {
  return (
    <>
      <div className="card">
        <div className="top">
          <img src={props.src} alt=" gallary_img" className="profileImg" />
        </div>
        <div className="name">
          <p>{props.name}</p>
        </div>
      </div>
    </>
  );
}
