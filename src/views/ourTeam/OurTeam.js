import React from "react";

import "./OurTeam.css";

import personImage1 from "../../assets/images/ourTeam/Person1.png";
import personImage2 from "../../assets/images/ourTeam/Person2.png";
import personImage3 from "../../assets/images/ourTeam/Person3.png";

function OurTeam() {
  return (
    <section className="ourTeam">
      <div className="container section_wrapper">
        <div className="ourTeam_wrapper">
            <h1 className="ourTeam_title">OUR TEAM</h1>
          <div className="ourTeam_card_container">
            <div className="card">
              <div className="card-img-top">
                <img src={personImage1} alt="Our team" />
              </div>
              <div className="card-body">
                <div className="card-title">Jessica D’suza</div>
              </div>
            </div>

            <div className="card">
              <div className="card-img-top">
                <img src={personImage2} alt="Our team" />
              </div>
              <div className="card-body">
                <div className="card-title">Johny Williams</div>
              </div>
            </div>

            <div className="card">
              <div className="card-img-top">
                <img src={personImage3} alt="Our team" />
              </div>
              <div className="card-body">
                <div className="card-title">Sanya R,</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurTeam;
