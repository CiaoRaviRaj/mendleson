import React from "react";

function SettingImageWithAbsoluteValue({
  imgUrl,
  top = "auto",
  bottom = "auto",
  right = "auto",
  left = "auto",
  unit="px"
}) {
    
  return (
    <div
      className=""
      style={{
        position: "absolute",
        zIndex: -1,
        top: top === "auto" ? `auto` : `${top}${unit}`,
        right: right === "auto" ? `auto` : `${right}${unit}`,
        left: left === "auto" ? `auto` : `${left}${unit}`,
        bottom: bottom === "auto" ? `auto` : `${bottom}${unit}`,
      }}
    >
      <img src={imgUrl} alt="#" style={{ objectFit: "contain" } }/>
    </div>
  );
}

export default SettingImageWithAbsoluteValue;
