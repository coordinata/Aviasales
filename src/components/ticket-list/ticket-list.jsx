import React from "react";
import classes from "./ticket-list.module.scss";
import Ticket from "../ticket/ticket";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";

const TicketsList = () => {
  const tickets = useSelector((state) => state.ticket.ticket);
  const filter = useSelector((state) => state.filter.filter);
  const [lowPrice, setLowPrice] = useState([]);
  const [faster, setFaster] = useState([]);

  const lowPriceArr = (tickets) => {
    const flattenedTickets = tickets.flat(); // Распаковываем массив массивов
    flattenedTickets.sort((a, b) => a.price - b.price);

    return setLowPrice(flattenedTickets);
  };
  useEffect(() => lowPriceArr(tickets), [tickets]);

  const fasterArr = (tickets) => {
    const flattenedTickets = tickets.flat(); // Распаковываем массив массивов
    flattenedTickets.sort((a, b) => {
      // Сравниваем общее время перелета
      return (
        a.segments[0].duration +
        a.segments[1].duration -
        b.segments[0].duration -
        b.segments[1].duration
      );
    });

    return setFaster(flattenedTickets);
  };
  useEffect(() => fasterArr(tickets), [tickets]);

  const [visibleTickets, setVisibleTickets] = useState(5);
  const showMoreTickets = () => {
    setVisibleTickets((prevVisibleTickets) => prevVisibleTickets + 5);
  };

  // const checkbox = useSelector((state) => state.checkbox);

  if (filter === "Самый дешевый") {
    return (
      <div>
        <ul className={classes.tickets_list}>
          {lowPrice.slice(0, visibleTickets).map((ticket) => (
            <li key={uuidv4()} className={classes.ticket_li}>
              <Ticket ticket={ticket} />
            </li>
          ))}
        </ul>
        {visibleTickets < lowPrice.length && (
          <button onClick={showMoreTickets} className={classes.button}>
            Показать еще 5 билетов!
          </button>
        )}
      </div>
    );
  }
  if (filter === "Самый быстрый") {
    return (
      <div>
        <ul className={classes.tickets_list}>
          {faster.slice(0, visibleTickets).map((ticket) => (
            <li key={uuidv4()} className={classes.ticket_li}>
              <Ticket ticket={ticket} />
            </li>
          ))}
        </ul>
        {visibleTickets < faster.length && (
          <button onClick={showMoreTickets} className={classes.button}>
            Показать еще 5 билетов!
          </button>
        )}
      </div>
    );
  }
};

export default TicketsList;
