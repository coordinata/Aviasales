import React, { useState } from "react";
import classes from "./sidebar.module.scss";

const Sidebar = () => {
  const [allTransfer, setAllTransfer] = useState(false);
  const [noTransfer, setNoTransfer] = useState(false);
  const [oneTransfer, setOneTransfer] = useState(false);
  const [twoTransfer, setTwoTransfer] = useState(false);
  const [treeTransfer, setTreeTransfer] = useState(false);

  return (
    <div className={classes.sidebar}>
      <h3>Количество пересадок</h3>
      <form className={classes.form}>
        <label
          className={classes.label}
          onClick={() => setAllTransfer(!allTransfer)}
        >
          <input
            checked={allTransfer}
            type="checkbox"
            className={classes.input_class}
          ></input>
          <span className={classes.checkbox}></span>
          Все
        </label>
        <label
          className={classes.label}
          onClick={() => setNoTransfer(!noTransfer)}
        >
          <input
            checked={noTransfer}
            type="checkbox"
            className={classes.input_class}
          ></input>
          <span className={classes.checkbox}></span>
          Без пересадок
        </label>
        <label
          className={classes.label}
          onClick={() => setOneTransfer(!oneTransfer)}
        >
          <input
            checked={oneTransfer}
            type="checkbox"
            className={classes.input_class}
          ></input>
          <span className={classes.checkbox}></span>1 пересадка
        </label>
        <label
          className={classes.label}
          onClick={() => setTwoTransfer(!twoTransfer)}
        >
          <input
            checked={twoTransfer}
            type="checkbox"
            className={classes.input_class}
          ></input>
          <span className={classes.checkbox}></span>2 пересадки
        </label>
        <label
          className={classes.label}
          onClick={() => setTreeTransfer(!treeTransfer)}
        >
          <input
            checked={treeTransfer}
            type="checkbox"
            className={classes.input_class}
          ></input>
          <span className={classes.checkbox}></span>3 пересадки
        </label>
      </form>
    </div>
  );
};

export default Sidebar;
