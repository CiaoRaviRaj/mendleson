import React from "react";

import HeroMain from "../../assets/images/hero/img1.png";
import SettingImageWithAbsoultValue from "../../components/SettingImageWithAbsoluteValue";
import "./Hero.css";
import heroimage1 from "../../assets/images/hero/hero1.png";
import layeringImage4 from "../../assets/images/layeringImage/Asset4.png";
import layeringImage3 from "../../assets/images/layeringImage/Asset3.png";
import layeringImage1 from "../../assets/images/layeringImage/Asset1.png";
import layeringImage2 from "../../assets/images/layeringImage/Asset2.png";

const Hero = () => {
  return (
    <section className="hero" id="Home">
      <SettingImageWithAbsoultValue imgUrl={layeringImage1} top={0} left={0} />
      <SettingImageWithAbsoultValue
        imgUrl={layeringImage2}
        top={-14}
        right={0}
      />
      <SettingImageWithAbsoultValue imgUrl={layeringImage3} bottom={0} />
      <SettingImageWithAbsoultValue
        imgUrl={layeringImage4}
        top={650}
        right={0}
      />
      <div className="container section_wrapper">
        <div className="row hero_wrapper justify-content-md-start justify-content-center justify-content-md-start">
          <div className="col-md-6 col-12  hero_left">
            <div className="hero_left_image">
              <img src={HeroMain} alt="Hero" />
            </div>
          </div>
          <div className="col-md-6 col-12 hero_right align-items-center align-items-md-start ">
            <h1>
              Mendleson <br />
              Communication <br />
              and Engagement
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada
              sed ipsum, ut quam volutpat, tortor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
