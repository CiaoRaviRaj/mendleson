import React from 'react'
import "./Service.css"
import ServiceElement from './subComponents/ServiceElement';

import engagementImage from "../../assets/images/service/Engagement.png";
import ConsultationImage from "../../assets/images/service/Consultation.png";
import CoominucationImage from "../../assets/images/service/Coominucation.png";
import facilationImage from "../../assets/images/service/facilation.png";
import TrainingImage from "../../assets/images/service/Training.png";
import SectionLine from '../../components/sectionLine/SectionLine';

function Service() {
  return (
    <section className="service" id="Service">
      <div className="container section_wrapper">
        <div className="service_wrapper">
          <div className="service_Title">
            <h1>Service</h1>

            <div className="">
              <SectionLine width={156} />
            </div>
          </div>
          <ServiceElement
            title="Engagement"
            description="We love what we do and are driven by achieving great results for our clients. Our awards and impressive client list are testament to our high quality approach. We deliver value, creaKvity, results and excepKonal levels of customer service and professionalism. We specialise in infrastructure development, energy and natural resources."
            img={engagementImage}
            imgOrder={2}
          />

          <ServiceElement
            title="Communications"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus quam quis egestas orci. Scelerisque eu, vitae sapien, pellentesque et. Sit ac fames facilisis nibh faucibus. "
            img={CoominucationImage}
            imgOrder="1"
          />

          <ServiceElement
            title="facilitation"
            description="We love what we do and are driven by achieving great results for our clients. Our awards and impressive client list are testament to our high quality approach. We deliver value, creaKvity, results and excepKonal levels of customer service and professionalism. We specialise in infrastructure development, energy and natural resources."
            img={facilationImage}
            imgOrder="2"
          />

          <ServiceElement
            title="Consultation and Research"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus quam quis egestas orci. Scelerisque eu, vitae sapien, pellentesque et. Sit ac fames facilisis nibh faucibus. "
            img={ConsultationImage}
            imgOrder="1"
          />

          <ServiceElement
            title="Traning & Mentoring"
            description="We love what we do and are driven by achieving great results for our clients. Our awards and impressive client list are testament to our high quality approach. We deliver value, creaKvity, results and excepKonal levels of customer service and professionalism. We specialise in infrastructure development, energy and natural resources."
            img={TrainingImage}
            imgOrder="2"
          />
        </div>
      </div>
    </section>
  );
}

export default Service