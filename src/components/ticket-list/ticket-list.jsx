import React from "react";
import classes from "./ticket-list.module.scss";
import Ticket from "../ticket/ticket";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

const TicketsList = () => {
  const tickets = useSelector((state) => state.ticket.ticket);
  const [visibleTickets, setVisibleTickets] = useState(5);

  const showMoreTickets = () => {
    setVisibleTickets((prevVisibleTickets) => prevVisibleTickets + 5);
  };

  return (
    <div>
      <ul className={classes.tickets_list}>
        {tickets.slice(0, visibleTickets).map((ticket) => (
          <li key={uuidv4()} className={classes.ticket_li}>
            <Ticket ticket={ticket} />
          </li>
        ))}
      </ul>
      {visibleTickets < tickets.length && ( 
        <button onClick={showMoreTickets} className={classes.button}>
          Показать еще 5 билетов!
        </button>
      )}
    </div>
  );
};

export default TicketsList;
