import React from "react";
import classes from "../ticket/ticket.module.scss";
import Logo from "../../img/S7-Logo.svg";

const Ticket = () => {
  return (
    <div className={classes.ticket}>
      <div className={classes.ticket_header}>
        <div className={classes.price}>13 400 P</div>
        <div className={classes.logo}>
          <img src={Logo} alt="Logo" />
        </div>
      </div>

      <div className={classes.ticket_data_wrapper}>
        <div className={classes.ticket_data}>
          <p className={classes.ticket_data_block__title}>MOW – HKT</p>
          <p>10:45 – 08:00</p>
        </div>

        <div className={classes.ticket_data}>
          <p className={classes.ticket_data_block__title}>В пути</p>
          <p>21ч 15м</p>
        </div>

        <div className={classes.ticket_data}>
          <p className={classes.ticket_data_block__title}>2 пересадки</p>
          <p>HKG, JNB</p>
        </div>

        <div className={classes.ticket_data}>
          <p className={classes.ticket_data_block__title}>MOW – HKT</p>
          <p>11:20 – 00:50</p>
        </div>

        <div className={classes.ticket_data}>
          <p className={classes.ticket_data_block__title}>В пути</p>
          <p>13ч 30м</p>
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