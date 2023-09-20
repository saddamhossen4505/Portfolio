import { links } from "../data";
import { NavLink } from "react-router-dom";
import "./navBar.css";
import { useState } from "react";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState();
  return (
    <>
      <nav className="nav">
        <div className={`${showMenu ? "nav_menu show-menu" : "nav_menu"}`}>
          <ul className="nav_list">
            {links.map((item, index) => {
              return (
                <li key={index} className="nav_item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "nav_link active-nav" : "nav_link"
                    }
                    to={item.path}
                    onClick={() => setShowMenu(!showMenu)}
                  >
                    {item.icon}
                    <h3 className="nav_name">{item.name}</h3>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
        <div
          className={`${showMenu ? "nav_toggle animate_toggle" : "nav_toggle"}`}
          onClick={() => setShowMenu(!showMenu)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
