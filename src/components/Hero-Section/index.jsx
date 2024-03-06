import React from "react";
import lezthen from "../../images/lezthen.svg";
import mobile from "../../images/mobile.svg";
import apple from "../../images/apple.svg";
import e from "../../images/e.svg";
import whiteline from "../../images/whiteline.svg";
const HeroSection = () => {
  return (
    <div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-3">
            <div>
              <p>
                Woman’s Fashion
                <img className="ms-4 ps-4" src={lezthen} alt="" />
              </p>
            </div>
            <div>
              <p>
                Men’s Fashion
                <img className="ms-5 ps-4" src={lezthen} alt="" />
              </p>
            </div>
            <div>

              <p>Electronics</p>
              <p>Home & Lifestyle</p>
              <p>Medicine</p>
              <p>Sports & Outdoor</p>
              <p>Baby’s & Toys </p>
              <p>Groceries & Pets</p>
              <p>Health & Beauty</p>
            </div>
          </div>
          <div style={{backgroundColor: "black"}} className="col-md-4">
<div className="d-flex mt-5 ms-5">
 <img src={apple} alt="" className="mt-4"/>
 <p className="text-white mt-5 ms-4 ">iPhone 14 Series</p>
</div>
<div>
    <h2 className="text-white ms-5 mt-4">Up to 10% <br /> off Voucher</h2>
  </div>
  <div className="ms-5">

<p className="text-white mt-3">Shop Now <img src={e} className="ms-4" alt="" /></p>
  <img src={whiteline} className="ms-5" alt="" />
</div>

          </div>
          <div  style={{backgroundColor: "black"}} className="col-md-5">
          <div className="  ">
<img src={mobile} className="mt-5 img-fluid " width={600}  alt="" />
  </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
