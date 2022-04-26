import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import style from "./Header.module.css";

function Header() {
  let [active, setActive] = useState(false);

  const toggleActive = () => {
    setActive(!active);
  };

  return (
    <div className={style.wrap}>
      <div
        className={
          active ? `${style.nav_list} ${style.active}` : style.nav_list
        }
      >
        <NavLink className={style.nav_link} to="/pre-junior">
          {" "}
          PreJunior
        </NavLink>
        <NavLink className={style.nav_link} to="/junior-plus">
          JuniorPlus
        </NavLink>
        <button className={style.btn} onClick={toggleActive}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  );
}

export default Header;
