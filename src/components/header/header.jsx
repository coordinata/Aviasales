import React from "react";
import Logo from "../../img/Logo.svg";
import classes from "./header.module.scss";
// import { useSelector } from "react-redux";

const Header = () => {
  // const Active = useSelector((state) => state.checkbox.checkbox); // извлекаем фильтр из состояния Redux
  return (
    <div className={classes.header}>
      <img src={Logo} alt="Logo" />
      {/* <h1>{Active}</h1> */}
    </div>
  );
};

export default Header;