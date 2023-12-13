import React from "react";
import classes from "./ticket-list.module.scss";
import Ticket from "../ticket/ticket";
import { useDispatch } from "react-redux";
import { getId } from "../../store/idSlice";

const TicketsList = () => {
  const dispatch = useDispatch()
  return (
    <div className={classes.tickets_list}>
      <button onClick={() => dispatch(getId())}>получить id</button>
      <Ticket/>
      <Ticket/>
    </div>
  );
};

export default TicketsList;