import React from "react";

import aboutDogImage from "./items/aboutDogImage.svg";
import "./style.css";

function About(props) {
  return (
    <div className="about-container">
      <div className="about-content">
        <img id="about-dog-image" src={aboutDogImage} alt="" />
        <div className="about-text-container">
          <h1>About the Shelter "Cozy House"</h1>
          <p>
            Currently we have 121 dogs and 342 cats on our hands and statistics
            show that only 20% of them will find a family. The others will
            continue to live with us and will be waiting for a lucky chance to
            become dearly loved.
          </p>
          <p>
            We feed our wards with the best food and make sure that they do not
            get sick, feel comfortable (including psychologically) and well. We
            are supported by 87 volunteers and 28 employees of various skill
            levels. About 12% of the animals are taken by the shelter staff.
            Taking care of the animals, they become attached to the pets and
            would hardly ever leave them alone.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
