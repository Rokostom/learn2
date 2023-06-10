import React from "react";
import { HelpDataList } from "../../../Generals/DataList/DataList";

import "./style.css";

function Help(props) {
  const HelpTypesMapRender = () => {
    return HelpDataList.map((item, index) => (
      <div className="help-types-element" id={index}>
        <img src={item.image} alt="" />
        <p>{item.heading}</p>
      </div>
    ));
  };
  return (
    <div className="help-container">
      <div className="help-content">
        <h1>How you cans help our shelter</h1>
        <div className="help-types">{HelpTypesMapRender()}</div>
      </div>
    </div>
  );
}

export default Help;
