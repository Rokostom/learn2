import React from "react";

import donationDog from "./items/donationDog.svg";
import creditIcon from "./items/creditIcon.svg";

import "./style.css";

function Donation(props) {
  return (
    <div className="donation-container">
      <div className="donation-content">
        <img src={donationDog} alt="" />
        <div className="donation-text-content">
          <h1>You can also make a donation</h1>
          <h4>Name of the bank / Type of bank account</h4>
          <button>
            <img src={creditIcon} alt="" />
            8380 2880 8028 8791 7435
          </button>
          <p>
            Legal information and lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Maecenas a ipsum at libero sagittis dignissim sed
            ac diam. Praesent ultrices maximus tortor et vulputate. Interdum et
            malesuada fames ac ante ipsum primis in faucibus.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Donation;
