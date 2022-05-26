import React from "react";
import PopupImageData from "./popup-image-data.js";
import PopupImageCarouselComp from "./popup-image-carousel-comp.jsx";
import "./popup-carousel.scss";

export default function PopUpCarousel(props) {
  return (
    <div
      className="popup-carousel-main"
      style={{
        visibility: props.isVisible ? "hidden" : "visible"
      }}
    >
      <div className="popup-carousel-slider">
        {PopupImageData.map((item, index) => {
          return (
            <div
              className="popup-carousel-slide"
              key={index}
              style={{ transform: `translateX(${props.z}%)` }}
            >
              <PopupImageCarouselComp src={item.imgURL} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
