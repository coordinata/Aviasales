import React from "react";
import classes from "./sidebar.module.scss";
import { useDispatch } from "react-redux";
import { checkboxState } from "../../store/checkboxSlice";

const Sidebar = () => {
  const dispatch = useDispatch();

  const activeCheckboxClick = (checkboxType) => {
    dispatch(checkboxState(checkboxType));
  };

  return (
    <div className={classes.sidebar}>
      <h3>Количество пересадок</h3>
      <form className={classes.form}>
        <label className={classes.label} onClick={() => activeCheckboxClick('Все')}>
          <input type="checkbox" className={classes.input_class}></input>
          <span className={classes.checkbox}></span>
          Все
        </label>
        <label className={classes.label} onClick={() => activeCheckboxClick('Без пересадок')}>
          <input type="checkbox" className={classes.input_class}></input>
          <span className={classes.checkbox}></span>
          Без пересадок
        </label>
        <label className={classes.label} onClick={() => activeCheckboxClick('1 пересадка')}>
          <input type="checkbox" className={classes.input_class}></input>
          <span className={classes.checkbox}></span>1 пересадка
        </label>
        <label className={classes.label} onClick={() => activeCheckboxClick('2 пересадки')}>
          <input type="checkbox" className={classes.input_class}></input>
          <span className={classes.checkbox}></span>2 пересадки
        </label>
        <label className={classes.label} onClick={() => activeCheckboxClick('3 пересадки')}>
          <input type="checkbox" className={classes.input_class}></input>
          <span className={classes.checkbox}></span>3 пересадки
        </label>
      </form>
    </div>
  );
};

export default Sidebar;