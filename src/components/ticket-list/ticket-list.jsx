import React from "react";
import classes from "./ticket-list.module.scss";
import Ticket from "../ticket/ticket";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

const TicketsList = () => {
  const tickets = useSelector((state) => state.ticket.ticket);
 
  return (
    <ul className={classes.tickets_list}>
      {tickets.map((ticket) => (
        <li key={uuidv4()} className={classes.ticket_li}>
          <Ticket ticket={ticket} />
        </li>
      ))}
    </ul>
  );
};

export default TicketsList;
