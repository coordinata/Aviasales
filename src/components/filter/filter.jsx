import React from "react";
import classes from "./filter.module.scss";
import { useDispatch } from "react-redux";
import { filterState } from "../../store/filterSlice";

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <div className={classes.filter}>
      <button onClick={dispatch(filterState('low_price'))} className={classes.low_price}>Самый дешевый</button>
      <button onClick={dispatch(filterState('faster'))} className={classes.faster}>Самый быстрый</button>
      <button onClick={dispatch(filterState('optimal'))} className={classes.optimal}>Оптимальный</button>
    </div>
  );
};

export default Filter;