import React from "react";

const ThemeItem = ({ img, color, colorChange }) => {
  return (
    <img
      src={img}
      alt="Theme icon"
      className="theme_img"
      onClick={() => {
        colorChange(color);
      }}
    />
  );
};

export default ThemeItem;
