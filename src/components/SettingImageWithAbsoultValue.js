import React from "react";

function SettingImageWithAbsoultValue({
  imgUrl,
  top = top !== "auto" && `${top}px`,
  bottom = "auto",
  right = "auto",
  left = "auto",
}) {
    console.log(top)
  return (
    <div
      className=""
      style={{
        position: "absolute",
        top: top === "auto" ? `auto` : `${top}px`,
        right: right === "auto" ? `auto` : `${top}px`,
        left: left === "auto" ? `auto` : `${top}px`,
        bottom: bottom === "auto" ? `auto` : `${top}px`,
      }}
    >
      <img src={imgUrl} alt="#" />
    </div>
  );
}

export default SettingImageWithAbsoultValue;
