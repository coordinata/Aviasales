import React from "react";
import classes from "./filter.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { filterState } from "../../store/filterSlice";


const Filter = () => {

  // const activeFilter = useSelector((state) => state.filter.filter);


  const dispatch = useDispatch();

  const activeFilterClick = (filterType) => {
    dispatch(filterState(filterType));
  };

  return (
    <div className={classes.filter}>
      <button
        onClick={() => activeFilterClick("Самый дешевый") && console.log('lll')}
        className={classes.low_price}
      >
        Самый дешевый
      </button>
      <button
        onClick={() => activeFilterClick("Самый быстрый")}
        className={classes.faster}
      >
        Самый быстрый
      </button>
      <button
        onClick={() => activeFilterClick("Оптимальный")}
        className={classes.optimal}
      >
        Оптимальный
      </button>
    </div>
  );
};

export default Filter;
