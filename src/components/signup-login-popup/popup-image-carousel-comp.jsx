import React from "react";

export default function PopupImageCarouselComp(props) {
  return (
    <img
      src={props.src}
      alt="carousel_img"
      style={{ width: "100%", height: "100%" }}
    />
  );
}
