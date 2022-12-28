import React from "react";

import "./OurProjects.css";

import projectImage1 from "../../assets/images/ourProjects/OurProject1.png";
import projectImage2 from "../../assets/images/ourProjects/OurProject2.png";
import projectImage3 from "../../assets/images/ourProjects/OurProject3.png";
import layeringImage10 from "../../assets/images/layeringImage/Asset10.png";
import SettingImageWithAbsoluteValue from "../../components/SettingImageWithAbsoluteValue";
import line from "../../assets/images/line.png";

function OurProjects() {
  return (
    <div className="ourProjects">
      <SettingImageWithAbsoluteValue
        imgUrl={layeringImage10}
        top={-323}
        right={0}
      />
      <div className="container section_wrapper">
        <div className="ourProjects_wrapper">
          <h1 className="ourProjects_title">
            our projects
            <span>
              <img src={line} alt="line" />
            </span>
          </h1>

          <div className="row ourProjects_images_container">
            <div className="col-md-6 col-12 ourProjects_images_container_left">
              <img src={projectImage1} alt="our project" />
              <div className="ourProjects_images_container_left_hover">
                <h3 className="ourProjects_images_container_left_hover_title">
                  Projects <br /> Name
                </h3>
              </div>
            </div>
            <div className="col-md-6 col-12 ourProjects_images_container_right">
              <div className="ourProjects_right_image1">
                <img src={projectImage2} alt="our project" />
                <div className="ourProjects_images_container_right_hover">
                  <h3 className="ourProjects_images_container_right_hover_title">
                    works Name
                  </h3>
                </div>
              </div>

              <div className="ourProjects_right_image2">
                <img src={projectImage3} alt="our project" />
                <div className="ourProjects_images_container_right_hover">
                  <h3 className="ourProjects_images_container_right_hover_title">
                    Team Name
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurProjects;
