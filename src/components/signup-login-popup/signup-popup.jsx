import React, { useState } from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import "./signup-popup.scss";

export default function SignUpPopUp(props) {
  let [inputSignupTxt, setSignupInputTxt] = useState({
    email: "",
    password: "",
    re_password: ""
  });
  function handleChange(event) {
    let { name, value } = event.target;
    setSignupInputTxt((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }

  //------------------------Check Box Hook----------------------------
  let [isChecked, setIsChecked] = useState(false);
  function handleChecked() {
    setIsChecked((prevValue) => {
      return !prevValue;
    });
    setSignupInputTxt("");
  }
  //--------------------------Clear Input Fields--------------------
  function handleClear() {
    setSignupInputTxt("");
  }
  //---------------------------Return Codes---------------------------
  return (
    <div
      className="signup-popup-box"
      style={{ visibility: props.Signup ? "visible" : "hidden" }}
    >
      <p className="signup-input-details">{inputSignupTxt.email}</p>
      <p className="signup-input-details">{inputSignupTxt.password}</p>
      <p className="signup-input-details">{inputSignupTxt.re_password}</p>
      <div className="signup-popup-content">
        <CloseRoundedIcon
          className="signup-cross-btn"
          sx={{
            fontSize: "30px",
            color: "#DFDFDE",
            "&:hover": {
              color: "#151D3B"
            }
          }}
          // clearSignupText={}
          onClick={() => {
            props.onhandleSignup();
            handleClear();
          }}
        />

        <h2 className="signup-heading">SIGN UP</h2>
        <p className="signup-para">Email</p>
        <input
          className="signup-txt-input"
          type="email"
          name="email"
          onChange={handleChange}
          placeholder="Enter Email"
          value={inputSignupTxt.email}
        />

        <p className="signup-para">Password</p>
        <input
          className="signup-txt-input"
          type="password"
          name="password"
          onChange={handleChange}
          placeholder="Enter Password"
          value={inputSignupTxt.password}
        />

        <p className="signup-para">Re-Password</p>
        <input
          className="signup-txt-input"
          type={!isChecked ? "password" : "text"}
          name="re_password"
          onChange={handleChange}
          placeholder="Re-enter Password"
          value={inputSignupTxt.repassword}
        />

        <input
          className="signup-checkbox"
          type="checkbox"
          onChange={handleChecked}
        />
        <p className="signup-show-password">show password</p>

        <button className="signup-btn" onClick={handleClear}>
          Sign up →
        </button>
      </div>
    </div>
  );
}
