import { DataList } from "../../../../Generals/DataList/DataList";

import "./style.css";

export default function PetsSlider() {
  const SliderCardMapRender = () => {
    return DataList.map((item, index) => (
      <div className="pet-card" key={index}>
        <img src={item.petimg} alt="" />
        <h3>{item.name}</h3>
        <button>Learn more</button>
      </div>
    ));
  };

  return (
    <div className="pets-content">
      <h2>
        Our friends who <br /> are looking for a house
      </h2>
      <div className="pet-list">
        <button className="side-button">←</button>
        {SliderCardMapRender()}
        <button className="side-button">→</button>
      </div>
      <button className="pets-content-button">Get to know the rest</button>
    </div>
  );
}
