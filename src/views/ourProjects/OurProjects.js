import React from "react";

import "./OurProjects.css";

import projectImage1 from "../../assets/images/ourProjects/OurProject1.png";
import projectImage2 from "../../assets/images/ourProjects/OurProject2.png";
import projectImage3 from "../../assets/images/ourProjects/OurProject3.png";

function OurProjects() {
  return (
    <div className="ourProjects">
      <div className="container section_wrapper">
        <div className="ourProjects_wrapper">
          <h1 className="ourProjects_title">our projects</h1>

          <div className="row ourProjects_images_container">
            <div className="col-6 ourProjects_images_container_left">
              <img src={projectImage1} alt="our project" />
              <div className="ourProjects_images_container_left_hover">
                <h3 className="ourProjects_images_container_left_hover_title">
                  Projects <br /> Name
                </h3>
              </div>
            </div>
            <div className="col-6 ourProjects_images_container_right">
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
