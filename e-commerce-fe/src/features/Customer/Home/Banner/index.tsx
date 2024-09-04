import React, { useState } from "react";
import "./style.css";
import landingImage from "../../../../assets/Home/landingImage.png";
import landingSecondaryImage from "../../../../assets/Home/New1.png";
import ThirdImage from "../../../../assets/Home/new2.png";
import ForthImage from "../../../../assets/Home/new3.png";


function Banner() {


  let i:number;
  const ImageList =[landingImage,landingSecondaryImage,ThirdImage,ForthImage]
  const[currentImage, setCurrentImage] = useState(ImageList[0]);
  function startImageTransition(){
  }

  return (
    <section className="Banner-section">
      <div className="white-wrapper"></div>
      <div className="bg-container">
      <img src={landingSecondaryImage} alt="" className="landing-image-container " />
        <div className="image-holder">
          <img src={landingImage} alt="" className="landing-image" />
        </div>
        <div className="info-holder">
          <h1 className="info-title">Fashion</h1>
          <h1 className="info-heading">Style That</h1>
          <h1 className="info-heading">Speaks </h1>
          <div className="btn-holder">
              <button className="btn-primary">Shop Now</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
