import React from "react";
import About from "./About/About";
import Donation from "./Donation/Donation";
import Help from "./Help/Help";
import Pets from "./Pets/Pets";
import StartscreenContent from "./StartscreenContent/StartscreenContent";

function StartscreenPage() {
  return (
    <>
      <StartscreenContent />
      <About />
      <Pets />
      <Help />
      <Donation />
    </>
  );
}

export default StartscreenPage;
