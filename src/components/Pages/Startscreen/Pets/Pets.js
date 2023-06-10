import React from "react";
import PetsSlider from "./features/PetsSlider";

import "./style.css";

function Pets(props) {
  return (
    <div className="pets-container">
      <PetsSlider />
    </div>
  );
}

export default Pets;
