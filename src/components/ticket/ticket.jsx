import React from "react";
import classes from "../ticket/ticket.module.scss";
import Logo from "../../img/S7-Logo.svg";
// import { format } from 'date-fns';

const Ticket = ({ ticket }) => {
  const formattedPrice = ticket.price.toLocaleString("ru-RU");

  const formattedTime = (ticket, num) => {
    const minutes = ticket.segments[num].duration;
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return hours + "ч " + remainingMinutes + "м";
  };



  return (
    <div className={classes.ticket}>
      <div className={classes.ticket_header}>
        <div className={classes.price}>{formattedPrice + " Р"}</div>
        <div className={classes.logo}>
          <img src={Logo} alt="Logo" />
        </div>
      </div>

      <div className={classes.ticket_data_wrapper}>
        <div className={classes.ticket_data}>
          <p className={classes.ticket_data_block__title}>MOW – HKT</p>
          <p>{ticket.segments[0].date}</p>
        </div>

        <div className={classes.ticket_data}>
          <p className={classes.ticket_data_block__title}>В пути</p>
          <p className={classes.lowercase}>{formattedTime(ticket, 0)}</p>
        </div>

        <div className={classes.ticket_data}>
          <p className={classes.ticket_data_block__title}>2 пересадки</p>
          <p>{ticket.segments[0].stops.join(', ')}</p>
        </div>

        <div className={classes.ticket_data}>
          <p className={classes.ticket_data_block__title}>MOW – HKT</p>
          <p>{ticket.segments[1].date}</p>
        </div>

        <div className={classes.ticket_data}>
          <p className={classes.ticket_data_block__title}>В пути</p>
          <p className={classes.lowercase}>{formattedTime(ticket, 1)}</p>
        </div>

        <div className={classes.ticket_data}>
          <p className={classes.ticket_data_block__title}>1 пересадка</p>
          <p>{ticket.segments[1].stops.join(', ')}</p>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
