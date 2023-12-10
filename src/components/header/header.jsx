import React from "react";
import Logo from "../../img/Logo.svg";
import classes from "./header.module.scss";
import { useSelector } from "react-redux";

const Header = () => {
  const filterActive = useSelector((state) => state.filter.filterState);

  return (
    <div className={classes.header}>
      <img src={Logo} alt="Logo" />
      <h1>{filterActive}</h1>
    </div>
  );
};

export default Header;