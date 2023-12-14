import React from "react";
import classes from "../ticket/ticket.module.scss";
import Logo from "../../img/S7-Logo.svg";

const Ticket = ({ ticket }) => {
  const formatPrice = ticket.price.toLocaleString("ru-RU");

  const formatTime = (ticket, num) => {
    const minutes = ticket.segments[num].duration;
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return { hours: hours, minutes: remainingMinutes };
  };

  const formatDate = (ticket, num, { hours, minutes }) => {
    const date = new Date(ticket.segments[num].date);

    const hoursDate = date.getUTCHours();
    const minutesDate = date.getUTCMinutes();
    
    date.setHours(date.getHours() + hours); 
    date.setMinutes(date.getMinutes() + minutes); 
    const formattedHours = (date.getUTCHours() < 10 ? "0" : "") + date.getUTCHours();
    const formattedMinutes = (date.getUTCMinutes() < 10 ? "0" : "") + date.getUTCMinutes();
    return `${hoursDate}:${minutesDate} - ${formattedHours}:${formattedMinutes}`;
  };

  return (
    <div className={classes.ticket}>
      <div className={classes.ticket_header}>
        <div className={classes.price}>{formatPrice + " Р"}</div>
        <div className={classes.logo}>
          <img src={Logo} alt="Logo" />
        </div>
      </div>

      <div className={classes.ticket_data_wrapper}>
        <div className={classes.ticket_data}>
          <p className={classes.ticket_data_block__title}>MOW – HKT</p>
          <p>{formatDate(ticket, 0, formatTime(ticket, 0))}</p>
        </div>

        <div className={classes.ticket_data}>
          <p className={classes.ticket_data_block__title}>В пути</p>
          <p className={classes.lowercase}>{`${formatTime(ticket, 0).hours}ч ${
            formatTime(ticket, 0).minutes
          }м`}</p>
        </div>

        <div className={classes.ticket_data}>
          <p className={classes.ticket_data_block__title}>2 пересадки</p>
          <p>{ticket.segments[0].stops.join(", ")}</p>
        </div>

        <div className={classes.ticket_data}>
          <p className={classes.ticket_data_block__title}>MOW – HKT</p>
          <p>{formatDate(ticket, 0, formatTime(ticket, 0))}</p>
        </div>

        <div className={classes.ticket_data}>
          <p className={classes.ticket_data_block__title}>В пути</p>
          <p className={classes.lowercase}>{`${formatTime(ticket, 0).hours}ч ${
            formatTime(ticket, 0).minutes
          }м`}</p>
        </div>

        <div className={classes.ticket_data}>
          <p className={classes.ticket_data_block__title}>1 пересадка</p>
          <p>{ticket.segments[1].stops.join(", ")}</p>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
