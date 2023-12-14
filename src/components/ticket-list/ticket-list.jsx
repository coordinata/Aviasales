import React from "react";
import classes from "./ticket-list.module.scss";
import Ticket from "../ticket/ticket";
import { useDispatch, useSelector } from "react-redux";
import { getTicket } from "../../store/ticketSlice";

const TicketsList = () => {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.id.id);

  return (
    <div className={classes.tickets_list}>
      <button onClick={() => dispatch(getTicket(id))}>получить билеты</button>
      <Ticket />
      <Ticket />
    </div>
  );
};

export default TicketsList;
