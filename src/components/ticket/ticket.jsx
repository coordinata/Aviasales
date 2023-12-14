import React from "react";
import classes from "../ticket/ticket.module.scss";
import Logo from "../../img/S7-Logo.svg";

const Ticket = ({ ticket }) => {
  const formattedPrice = ticket.price.toLocaleString("ru-RU");
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
          <p>{ticket.segments[0].duration}</p>
        </div>

        <div className={classes.ticket_data}>
          <p className={classes.ticket_data_block__title}>2 пересадки</p>
          <p>HKG, JNB</p>
        </div>

        <div className={classes.ticket_data}>
          <p className={classes.ticket_data_block__title}>MOW – HKT</p>
          <p>{ticket.segments[1].date}</p>
        </div>

        <div className={classes.ticket_data}>
          <p className={classes.ticket_data_block__title}>В пути</p>
          <p>{ticket.segments[1].duration}</p>
        </div>

        <div className={classes.ticket_data}>
          <p className={classes.ticket_data_block__title}>1 пересадка</p>
          <p>HKG</p>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
