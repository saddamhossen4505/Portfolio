import { themes } from "../data";
import ThemeItem from "./ThemeItem";
import { FaCog } from "react-icons/fa";
import { BsSun, BsMoon } from "react-icons/bs";
import "./themes.css";
import { useEffect, useState } from "react";

// Get colorValue from localStorage.
const getStorageColor = () => {
  let color = `hsl(252, 35%, 51%)`;

  if (localStorage.getItem("color")) {
    color = localStorage.getItem("color");
  }

  return color;
};

// Get Theme from localStorage.
const getStorageTheme = () => {
  let theme = `light-theme`;

  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }

  return theme;
};

const Themes = () => {
  const [showSwitch, setShowSwitch] = useState(false);
  const [color, setColor] = useState(getStorageColor());
  const [theme, setTheme] = useState(getStorageTheme());

  // ColorChange function.
  const colorChange = (color) => {
    setColor(color);
  };

  // ToggleTheme function.
  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };

  useEffect(() => {
    document.documentElement.style.setProperty("--first-color", color);
    localStorage.setItem("color", color);
  }, [color]);

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div>
      <div className={`${showSwitch ? "show_switch" : ""} style_switch`}>
        <div
          className="style_switch_toggle"
          onClick={() => setShowSwitch(!showSwitch)}
        >
          <FaCog />
        </div>

        <div className="theme_toggle" onClick={toggleTheme}>
          {theme === "light-theme" ? <BsMoon /> : <BsSun />}
        </div>

        <h3 className="style_switch_title">Switch Style</h3>

        <div className="style_switch_item">
          {themes.map((themes, index) => {
            return (
              <ThemeItem key={index} {...themes} colorChange={colorChange} />
            );
          })}
        </div>

        <div
          className="close_style_switch"
          onClick={() => setShowSwitch(!showSwitch)}
        >
          &times;
        </div>
      </div>
    </div>
  );
};

export default Themes;
