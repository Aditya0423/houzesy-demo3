import React from "react";
import "./footer.scss";
//import logo from "./logo.png";

export default function Footer() {
  return (
    <>
      <footer className="footer-distributed">
        <div className="row">
          <div className="col-md-3 col-lg-3 col-sm-6 col-xm-8 col-6">
            <div className="footer-left ">
              <img src="" alt="" />
            </div>
          </div>

          <div className="col-md-2 col-lg-2 col-sm-4 col-xm- col-6">
            <div className="footer-center">
              <h3>About us</h3>
              <p>
                Houzesy is a one stop platform for Home Design Interior & Decor
              </p>
            </div>
          </div>
          <div className="col-md-2 col-lg-2 col-sm-4 col-xm-6 col-6">
            <div className="footer-center">
              <h3>Pages </h3>

              <div>
                {/* <p>Phone: +91 9911189974 Email: real.houzesy@gmail.com</p> */}

                <p>Home Page</p>
                <p>Professional</p>
                <p>Project</p>
                <p>Blogs</p>
                <p>Contact Us</p>
              </div>
            </div>
          </div>
          <div className="col-md-2 col-lg-2 col-sm-4 col-xm-6 col-6 ">
            <div className="footer-right">
              <h3>Support</h3>

              <p>FAQ</p>
              <p>Support Center</p>
              <p>Security</p>

              {/*  */}
            </div>
          </div>
          <div className="col-md-3 col-lg-3 col-sm-6 col-xm-8 col-6">
            <div className="footer-right">
              <h3>Contact Details</h3>
              <div className="footer-icons">
                <a href="###">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="###">
                  <i className="fa fa-twitter"></i>
                </a>
                <a href="###">
                  <i className="fa fa-instagram"></i>
                </a>
                <a href="###">
                  <i className="fa fa-linkedin"></i>
                </a>
                <a href="###">
                  <i className="fa fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">{/*  */}</div>
        <div className="row">
          <div className="col-md-5 col-lg-5 col-sm-6 col-xm-6 col-6">
            <p className="text-left"> ©Houzesy 2022| Made with love in INDIA</p>
          </div>

          <div className="col-md-7 col-lg-7 ">
            <ul className="abcd">
              <li>
                <a href="###">Privacy Policy</a>
              </li>
              <li>
                <a href="###">Home Decor</a>
              </li>
              <li>
                <a href="###">Architect Planning</a>
              </li>
              <li>
                <a href="###">Interior Design</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
