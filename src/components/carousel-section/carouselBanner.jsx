import React from "react";
import "./carousel.scss";
const styles = {
  color: "#FDEFF4"
};

export default function CarouselBanner(props) {
  return (
    <p className="carosel-banner" style={styles}>
      {props.banner}
    </p>
  );
}
