import React from "react";
import "./navbar.css";
//import logo from "./logo.png";

export default function Navbar() {
  return (
    <div>
      <nav>
        <div className="wrapper">
          <div className="logo">
            <img src="" alt="icon" />
          </div>
          {/* <img className="logo1" src={logo} />
      <a href="#">HOUZ<span>ESY</span></a></div> */}
          <input type="radio" name="slider" id="menu-btn" />
          <input type="radio" name="slider" id="close-btn" />

          <div className="navbar-right-panel">
            {/* <div className="nav-search-box">
              <form className="navbar-form " role="search">
                <div className="form-group">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search"
                    />
                    <span className="input-group-btn">
                      <button type="submit" className="btn btn-default">
                        Submit
                      </button>
                    </span>
                  </div>
                </div>
              </form>
            </div> */}

            <ul className="nav-links">
              <label for="close-btn" className="btn close-btn">
                <i className="fas fa-times"></i>
              </label>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>

              <li>
                <a href="#" className="desktop-item">
                  Photos
                </a>
                <input type="checkbox" id="showDrop" />
                <label for="showDrop" className="mobile-item">
                  Photos
                </label>
                <ul className="drop-menu">
                  <li>
                    <a href="#">KITCHEN & DINING</a>
                  </li>
                  <li>
                    <a href="#">LIVING</a>
                  </li>
                  <li>
                    <a href="#">BEDROOM</a>
                  </li>
                  <li>
                    <a href="#">MORE ROOMS</a>
                  </li>
                </ul>
              </li>

              <li>
                <a href="#" className="desktop-item">
                  Professional
                </a>
                <input type="checkbox" id="showMega" />
                <label for="showMega" className="mobile-item">
                  Professional
                </label>
                <div className="mega-box">
                  <div className="content">
                    {/* <div className="row">
              <img src="img.jpg" alt="" />
            </div> */}
                    <div className="row">
                      <header>DESIGN & RENOVATION</header>
                      <ul className="mega-links">
                        <li>
                          <a href="#">Architects & Building Designers</a>
                        </li>
                        <li>
                          <a href="#">Interior Designers & Decorators</a>
                        </li>
                        <li>
                          <a href="#">Civil Engineers & Contractors</a>
                        </li>
                        <li>
                          <a href="#">Design-Build Firms</a>
                        </li>
                      </ul>
                    </div>
                    <div className="row">
                      <header>HOME IMPROVEMENT</header>
                      <ul className="mega-links">
                        <li>
                          <a href="#">Furniture & Accessories</a>
                        </li>
                        <li>
                          <a href="#">Flooring & Carpet</a>
                        </li>
                        <li>
                          <a href="#">Tile, Stone & Countertop</a>
                        </li>
                        <li>
                          <a href="#">Bedding & Bath</a>
                        </li>
                      </ul>
                    </div>
                    <div className="row">
                      <header>SOME MORE SERVICES</header>
                      <ul className="mega-links">
                        <li>
                          <a href="#">Kitchen & Bath Designers</a>
                        </li>
                        <li>
                          <a href="#">Landscape Architects & Contractors</a>
                        </li>
                        <li>
                          <a href="#">Home Builders & Construction Companies</a>
                        </li>
                        <li>
                          <a href="#">Specialty Contractors</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Blogs</a>
              </li>

              <li>
                <a href="#">
                  {" "}
                  <input type="submit" value="Submit" className="text-right" />
                  Sign in
                </a>
              </li>
              {/* <li><a href="#"><input type="submit" value="Submit" />Sign Out</a></li> */}
            </ul>
          </div>
          <label for="menu-btn" className="btn menu-btn">
            <i className="fas fa-bars"></i>
          </label>
        </div>
        <div>
          <div className="nav-search-box">
            <form className="navbar-form " role="search">
              <div className="form-group">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                  />
                  <span className="input-group-btn">
                    <button type="submit" className="btn btn-default">
                      {/* <i class="fa-solid fa-magnifying-glass"></i> */}
                      submit
                    </button>
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
