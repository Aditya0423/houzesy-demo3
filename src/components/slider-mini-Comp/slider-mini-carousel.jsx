import React, { useState } from "react";
import "./slider-mini-carousel.scss";
import ImageMiniComponant from "./image-mini-componant.jsx";
import images from "./slider-mini-imageData.js";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function SliderMiniCarousel() {
  const [x, setX] = useState(0);

  function handleLeft() {
    x === 0 ? setX(-100 * (images.length - 1)) : setX(x + 100);
  }
  function handleRight() {
    x === -100 * (images.length - 1) ? setX(0) : setX(x - 100);
  }

  return (
    <div className="main">
      <div className="mini-slider">
        {images.map((item, index) => {
          return (
            <div
              className="mini-slide"
              key={index}
              style={{ transform: `translateX(${x}%)` }}
            >
              <ImageMiniComponant src={item.imgURL} />
              <button className="seeMoreBtn">See More</button>
            </div>
          );
        })}
        <button id="slidesBtnLeft" onClick={handleLeft}>
          <ArrowBackIosIcon />
        </button>
        <button id="slidesBtnRight" onClick={handleRight}>
          <ArrowForwardIosIcon />
        </button>
      </div>
    </div>
  );
}
