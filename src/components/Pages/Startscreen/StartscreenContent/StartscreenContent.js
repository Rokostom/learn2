import React from "react";

import startscreenBackground from "./items/startscreenBackground.svg";
import startscreenPuppy from "./items/startscreenPuppy.svg";
import "./style.css";

function StartscreenContent(props) {
  return (
    <div className="startscreen-container">
      <img id="startscreen-background" src={startscreenBackground} alt="" />
      <div className="startscreen-content">
        <div className="text-container">
          <h1>Not only people need a house</h1>
          <p>
            We offer to give a chance to a little and nice puppy with an
            extremely wide and open heart. He or she will love you more than
            anybody else in the world, you will see!
          </p>
          <button>Make a friend</button>
        </div>
        <img id="startscreen-puppy" src={startscreenPuppy} alt=""></img>
      </div>
    </div>
  );
}

export default StartscreenContent;
