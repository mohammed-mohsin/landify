import React from "react";
import phone from "../../Assets/Images/iPhone X.png"
import "./Header.css";
const Header = () => {
  return (
    <>
      <div className="container ">
        <div className="d-flex justify-content-center flex-column text-center">
          <div class=" text-wrap header_text">
            Track your product sales from
            <div>anywhere, anytime.</div>
          </div>
        </div>
          <div className="btn_primary text-center">Start Selling</div>

        <div className="d-flex justify-content-center mobile_section ">
         <img className="phone img-fluid" src={phone} alt="" />

          <div className="circle"></div>
        </div>
      </div>

    </>
  );
};

export default Header;
