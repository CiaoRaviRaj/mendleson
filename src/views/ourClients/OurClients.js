import React from "react";

import "./OurClients.css";

import OurClientsImage1 from "../../assets/images/ourClients/row1/ourClients1.png";
import OurClientsImage2 from "../../assets/images/ourClients/row1/ourClients2.png";
import OurClientsImage3 from "../../assets/images/ourClients/row1/ourClients3.png";
import OurClientsImage4 from "../../assets/images/ourClients/row1/ourClients4.png";
import OurClientsImage5 from "../../assets/images/ourClients/row1/ourClients5.png";
import OurClientsImage6 from "../../assets/images/ourClients/row2/ourClients6.png";
import OurClientsImage7 from "../../assets/images/ourClients/row2/ourClients7.png";
import OurClientsImage8 from "../../assets/images/ourClients/row2/ourClients8.png";
import OurClientsImage9 from "../../assets/images/ourClients/row2/ourClients9.png";
import layeringImage11 from "../../assets/images/layeringImage/Asset11.png";
import SettingImageWithAbsoluteValue from "../../components/SettingImageWithAbsoluteValue";
import line from "../../assets/images/line.png";

function OurClients() {
  return (
    <div className="ourClients">
      <SettingImageWithAbsoluteValue
        imgUrl={layeringImage11}
        top={-66}
        left={-26}
      />
      <div className="container section_wrapper">
        <div className="ourClients_wrapper">
          <h1 className="ourClients_title">
          
            Our clients
            <span>
              <img src={line} alt="line" />
            </span>
          </h1>

          <div className="ourClients_logos_row1">
            <img src={OurClientsImage1} alt="Our Client 1" />
            <img src={OurClientsImage2} alt="Our Client 2" />
            <img src={OurClientsImage3} alt="Our Client 3" />
            <img src={OurClientsImage4} alt="Our Client 4" />
            <img src={OurClientsImage5} alt="Our Client 5" />
          </div>
          <div className="ourClients_logos_row2">
            <img src={OurClientsImage6} alt="Our Client 6" />
            <img src={OurClientsImage7} alt="Our Client 7" />
            <img src={OurClientsImage8} alt="Our Client 8" />
            <img src={OurClientsImage9} alt="Our Client 9" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurClients;
