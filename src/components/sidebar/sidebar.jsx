import React, { useState, useEffect } from "react";
import classes from "./sidebar.module.scss";

const Sidebar = () => {
  const [allTransfer, setAllTransfer] = useState(false);
  const [noTransfer, setNoTransfer] = useState(false);
  const [oneTransfer, setOneTransfer] = useState(false);
  const [twoTransfer, setTwoTransfer] = useState(false);
  const [treeTransfer, setTreeTransfer] = useState(false);

  const handleTransferChange = (e) => {
    const name = e.target.name;
    const value = e.target.checked;

    switch (name) {
      case "allTransfer":
        setAllTransfer(value);
        setNoTransfer(value);
        setOneTransfer(value);
        setTwoTransfer(value);
        setTreeTransfer(value);
        break;
      case "noTransfer":
        setNoTransfer(value);
        break;
      case "oneTransfer":
        setOneTransfer(value);
        break;
      case "twoTransfer":
        setTwoTransfer(value);
        break;
      case "treeTransfer":
        setTreeTransfer(value);
        break;
      default:
        break;
    }

    if (!value) {
      setAllTransfer(false);
    } else {
      if (noTransfer && oneTransfer && twoTransfer && treeTransfer) {
        setAllTransfer(true);
      }
    }
  };

  useEffect(() => {
    if (noTransfer && oneTransfer && twoTransfer && treeTransfer) {
      setAllTransfer(true);
    } else {
      setAllTransfer(false);
    }
  }, [noTransfer, oneTransfer, twoTransfer, treeTransfer]);

  return (
    <div className={classes.sidebar}>
      <h3>Количество пересадок</h3>
      <form className={classes.form}>
        <label className={classes.label}>
          <input
            checked={allTransfer}
            type="checkbox"
            name="allTransfer"
            className={classes.input_class}
            onChange={handleTransferChange}
          ></input>
          <span className={classes.checkbox}></span>
          Все
        </label>
        <label className={classes.label}>
          <input
            checked={noTransfer}
            type="checkbox"
            name="noTransfer"
            className={classes.input_class}
            onChange={handleTransferChange}
          ></input>
          <span className={classes.checkbox}></span>
          Без пересадок
        </label>
        <label className={classes.label}>
          <input
            checked={oneTransfer}
            type="checkbox"
            name="oneTransfer"
            className={classes.input_class}
            onChange={handleTransferChange}
          ></input>
          <span className={classes.checkbox}></span>1 пересадка
        </label>
        <label className={classes.label}>
          <input
            checked={twoTransfer}
            type="checkbox"
            name="twoTransfer"
            className={classes.input_class}
            onChange={handleTransferChange}
          ></input>
          <span className={classes.checkbox}></span>2 пересадки
        </label>
        <label className={classes.label}>
          <input
            checked={treeTransfer}
            type="checkbox"
            name="treeTransfer"
            className={classes.input_class}
            onChange={handleTransferChange}
          ></input>
          <span className={classes.checkbox}></span>3 пересадки
        </label>
      </form>
    </div>
  );
};
export default Sidebar;
