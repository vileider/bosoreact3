import "./styles/Projects.css";
import "../reusable_styles/BackgroundGlow.css";
import { useState } from "react";
import Carousel from "nuka-carousel";

export function Projects() {
  const body = (
    <div className="projectBody">
      <div className="projectTitle">Our Projects</div>

      <div className="projectsSlider">
      <Carousel
    wrapAround={true}
          slidesToShow={3}>
           <img onClick={() => {console.log("image clicked")}} src={require("../assets/images/personImg/blondeGirl.jpg")} alt="blonde" />
          <img onClick={() => {console.log("image clicked")}} src={require("../assets/images/personImg/blondeGirl.jpg")} alt="blonde" />
          <img onClick={() => {console.log("image clicked")}} src={require("../assets/images/personImg/blondeGirl.jpg")} alt="blonde" />
          <img src={require("../assets/images/personImg/blondeGirl.jpg")} alt="blonde" />
          <img src={require("../assets/images/personImg/blondeGirl.jpg")} alt="blonde" /> 
        {/* <div className="project backgroundGlow"> <img onClick={() => {console.log("image clicked")}} src={require("../assets/images/personImg/blondeGirl.jpg")} alt="blonde" /> </div>
        <div className="project backgroundGlow"> 2nd</div>
        <div className="project backgroundGlow"> 3rd</div>
        <div className="project backgroundGlow"> 4rd</div>
  <div className="project backgroundGlow"> 5rd</div> */}
        </Carousel>  
        </div>
    </div>
  );

  // <Carousel
  //   wrapAround={true}
  //   slidesToShow={3}
  // >
  //   <img src="/image1.png" />
  //   <img src="/image2.png" />
  //   <img src="/image3.png" />
  //   <img src="/image4.png" />
  //   <img src="/image5.png" />
  // </Carousel> 


  return body;
}
