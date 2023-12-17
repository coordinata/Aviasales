import React, { useState } from "react";
import classes from "./filter.module.scss";
import { useDispatch } from "react-redux";
import { filterState } from "../../store/filterSlice";

const Filter = () => {
  // const activeFilter = useSelector((state) => state.filter.filter);
  const [activeFilter, setActiveFilter] = useState("");

  const dispatch = useDispatch();

  const activeFilterClick = (filterType) => {
    dispatch(filterState(filterType));
    setActiveFilter(filterType);
  };

  return (
    <div className={classes.filter}>
      <button
        onClick={() => activeFilterClick("Самый дешевый")}
        className={`${classes.low_price} ${
          activeFilter === "Самый дешевый" ? classes.active : ""
        }`}
      >
        Самый дешевый
      </button>
      <button
        onClick={() => activeFilterClick("Самый быстрый")}
        className={`${classes.faster} ${
          activeFilter === "Самый быстрый" ? classes.active : ""
        }`}
      >
        Самый быстрый
      </button>
      <button
        onClick={() => activeFilterClick("Оптимальный")}
        className={`${classes.optimal} ${
          activeFilter === "Оптимальный" ? classes.active : ""
        }`}
      >
        Оптимальный
      </button>
    </div>
  );
};

export default Filter;
