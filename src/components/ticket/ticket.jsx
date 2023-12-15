import React from "react";
import classes from "../ticket/ticket.module.scss";

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
    const formattedHours =
      (date.getUTCHours() < 10 ? "0" : "") + date.getUTCHours();
    const formattedMinutes =
      (date.getUTCMinutes() < 10 ? "0" : "") + date.getUTCMinutes();
    return `${hoursDate}:${minutesDate} - ${formattedHours}:${formattedMinutes}`;
  };

  const stopsData = (ticket, num) => {
    const arr = ticket.segments[num].stops.length;
    switch (arr) {
      case 0:
        return "Без пересадок";
      case 1:
        return "1 пересадка";
      case 2:
        return "2 пересадки";
      case 3:
        return "3 пересадки";
      default:
        return " "
    }
  };

  return (
    <div className={classes.ticket}>
      <div className={classes.ticket_header}>
        <div className={classes.price}>{formatPrice + " Р"}</div>
        <div className={classes.logo}>
          <img src={`//pics.avs.io/99/36/${ticket.carrier}.png`} alt="Logo" />
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
          <p className={classes.ticket_data_block__title}>
            {stopsData(ticket, 0)}
          </p>
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
          <p className={classes.ticket_data_block__title}>
            {stopsData(ticket, 1)}
          </p>
          <p>{ticket.segments[1].stops.join(", ")}</p>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
