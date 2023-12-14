import React from "react";
import classes from "./ticket-list.module.scss";
import Ticket from "../ticket/ticket";

const TicketsList = () => {
  return (
    <div className={classes.tickets_list}>
      <Ticket />
    </div>
  );
};

export default TicketsList;
