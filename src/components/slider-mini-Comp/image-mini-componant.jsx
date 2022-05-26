import React from "react";

export default function ImageMiniComponant(props) {
  return (
    <>
      <img
        className="slide-images"
        src={props.src}
        alt="slider-img"
        style={{ width: "100%", height: "100%" }}
      />
    </>
  );
}
