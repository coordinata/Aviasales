import { useDispatch, useSelector } from "react-redux";
import { setCheckboxState } from "../../store/checkboxSlice";
import classes from "./sidebar.module.scss"

const Sidebar = () => {
  const {
    allTransfer,
    noTransfer,
    oneTransfer,
    twoTransfer,
    treeTransfer
  } = useSelector((state) => state.checkbox);

  const dispatch = useDispatch();

  const handleTransferChange = (e) => {
    const name = e.target.name;
    const value = e.target.checked;

    let payload = {};

    switch (name) {
      case "allTransfer":
        payload = {
          allTransfer: value,
          noTransfer: value,
          oneTransfer: value,
          twoTransfer: value,
          treeTransfer: value
        };
        break;
      case "noTransfer":
        payload = { noTransfer: value };
        break;
      case "oneTransfer":
        payload = { oneTransfer: value };
        break;
      case "twoTransfer":
        payload = { twoTransfer: value };
        break;
      case "treeTransfer":
        payload = { treeTransfer: value };
        break;
      default:
        break;
    }

    if (!value) {
      payload = { ...payload, allTransfer: false };
    } else {
      if (noTransfer && oneTransfer && twoTransfer && treeTransfer) {
        payload = { ...payload, allTransfer: true };
      }
    }

    dispatch(setCheckboxState(payload));
  };


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
