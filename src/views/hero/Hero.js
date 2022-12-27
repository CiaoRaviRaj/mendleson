import React from 'react'

import HeroMain from "../../assets/images/hero/img1.png"
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero" id="Home">
      <div className="container section_wrapper">
        <div className="row hero_wrapper ">
          <div className="col-6 hero_left">
            <div className="hero_left_image">
              <img src={HeroMain} alt="hero"/>
            </div>
          </div>
          <div className="col-6 hero_right">
            <h1>Mendleson Communication and Engagement</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada
              sed ipsum, ut quam volutpat, tortor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero