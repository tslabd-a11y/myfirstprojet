import React from "react";

const AboutImg = () => {
  return (
    <div className="relative w-fit h-fit">
      <div>
        <img
          src="images/aboutMe.png"
          className="h-[500px] w-[400px]"
          alt="AboutMe"
        />
      </div>
      <div className="shadow-orangeMidumShadow absolute  top-0 left-0 animate-pulse  "></div>
      <div className="shadow-cyanMidumShadow absolute  buttom-0 right-0 animate-pulse  "></div>
    </div>
  );
};

export default AboutImg;
