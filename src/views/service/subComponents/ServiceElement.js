import React from "react";

import "./ServiceElement.css";

function ServiceElement({ title, description, img, imgOrder }) {
  const imageOrder = Number(imgOrder);
    return (
      <div className="row serviceElement">
        <div
          className="col-6 serviceElement_description"
          style={imageOrder === 1 ? { order: 2, textAlign: "left" } : {}}
        >
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <div
          className="col-6 serviceElement_image"
          style={{ order: { imgOrder } }}
        >
          <div className="serviceElement_image_container">
            <img src={img} alt={title} />
          </div>
        </div>
      </div>
    );
}

export default ServiceElement;
