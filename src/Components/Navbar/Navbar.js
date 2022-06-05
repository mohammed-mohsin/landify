import React from "react";
import Logo from "../../Assets/Images/Dark.png";
import googlePlay from "../../Assets/Images/Google Play Badge.png";
import appleStore from "../../Assets/Images/App Store Badge.png";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-transparent">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={Logo} alt="" width="105px" height="28px" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Jobs
                </a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  More
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>

            <ul className="d-flex flex-row">
              <a
                className="nav-link me-3"
                target="_blank"
                href="https://play.google.com/store/games"
              >
                <img src={googlePlay} alt="" width="135px" height="40px" />
              </a>
              <a
                className="nav-link"
                target="_blank"
                href="https://support.apple.com/en-sg/apps"
              >
                <img src={appleStore} alt="" width="135px" height="40px" />
              </a>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
