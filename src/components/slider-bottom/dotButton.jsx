import React, { useState } from "react";
import "./dotButton.scss";

export default function DotButton(props) {
  const [dotState, setDotState] = useState(false);
  function handleClick(event) {
    setDotState((prev) => {
      return !prev;
    });
    //alert(props.itemId);
  }
  return (
    <>
      <button
        className="dotButton"
        style={{ backgroundColor: dotState ? "black" : "white" }}
        onClick={() => {
          props.handleDotNav(props.itemId);
          handleClick();
        }}
      ></button>
    </>
  );
}
