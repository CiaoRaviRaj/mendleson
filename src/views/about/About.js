import React from "react";



import aboutMain from "../../assets/images/about/img1.png";
import Engagement from "../../assets/images/about/Enagagement.png";
import coomunication from "../../assets/images/about/coomunication.png";

import line from "../../assets/images/line.png";

import "./about.css";
import SectionLine from "../../components/sectionLine/SectionLine";

function About() {
  return (
    <section className="about" id="About">
      <div className="container section_wrapper">
        <div className="row about_wrapper">
          <div className="col-md-6 col-12 about_left">
            <div className="about_left_image">
              <img src={aboutMain} alt="about" />
            </div>
          </div>
          <div className="col-md-6 col-12 about_right">
            <h1>ABOUT US</h1>
            <span>
              <img src={line} alt="line" />
            </span>
            <p>
              We love what we do and are driven by achieving great results for
              our clients. Our awards and impressive client list are testament
              to our high quality approach. We deliver value, creaKvity, results
              and excepKonal levels of customer service and professionalism. We
              specialise in infrastructure development, energy and natural
              resources.
            </p>

            <div className="about_right_card_container d-flex gap-5">
              <div className="card">
                <div className="card-header bg-white">
                  <img src={Engagement} alt="Engagement" />
                </div>
                <div className="card-body">
                  <div className="card-title">Engagement</div>
                  <div className="card-subTitle">
                    We are engagement specialists, who have led projects at all
                    levels of the IAP2 spectrum. READ MORE
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-header bg-white">
                  <img src={coomunication} alt="Engagement" />
                </div>
                <div className="card-body">
                  <div className="card-title">Communications</div>
                  <div className="card-subTitle">
                    We are award-winning leaders in communications and campaign
                    management. READ MORE
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
