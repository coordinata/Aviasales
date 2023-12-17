import React from "react";
import classes from "./ticket-list.module.scss";
import Ticket from "../ticket/ticket";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";
import { Spin, Alert } from "antd";
import { Offline, Online } from "react-detect-offline";
import { freeze } from "immer";

const TicketsList = () => {
  const checkbox = useSelector((state) => state.checkbox);
  const tickets = useSelector((state) => state.ticket.ticket);
  const filter = useSelector((state) => state.filter.filter);
  const [visibleTickets, setVisibleTickets] = useState(5);
  const [filteredTickets, setFilteredTickets] = useState([]);
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

  const filterTickets = (checkbox, allTickets) => {
    if (!allTickets) return [];

    const flattenedTickets = allTickets.flat();

    if (checkbox.allTransfer) {
      setFilteredTickets(flattenedTickets);
    } else {
      const filtered = flattenedTickets.filter((ticket) => {
        if (
          checkbox.noTransfer &&
          ticket.segments[0].stops.length === 0 &&
          ticket.segments[1].stops.length === 0
        ) {
          return true;
        }
        if (
          checkbox.oneTransfer &&
          ticket.segments[0].stops.length === 1 &&
          ticket.segments[1].stops.length === 1
        ) {
          return true;
        }
        if (
          checkbox.twoTransfer &&
          ticket.segments[0].stops.length === 2 &&
          ticket.segments[1].stops.length === 2
        ) {
          return true;
        }
        if (
          checkbox.treeTransfer &&
          ticket.segments[0].stops.length === 3 &&
          ticket.segments[1].stops.length === 3
        ) {
          return true;
        }
        return false;
      });
      setFilteredTickets(filtered);
    }
  };

  useEffect(() => {
    if (filter === "Самый дешевый") {
      filterTickets(checkbox, lowPrice);
    } else if (filter === "Самый быстрый") {
      filterTickets(checkbox, faster);
    } else {
      filterTickets(checkbox, tickets);
    }
  }, [checkbox, lowPrice, filter, tickets, faster]);

  const showMoreTickets = () => {
    setVisibleTickets((prevVisibleTickets) => prevVisibleTickets + 5);
  };

  if (filter === "") {
    return (
      <div>
        <Online>
          <Alert
            message="По заданным фильтрам билетов не найдено"
            type="info"
            style={{
              color: "#4a4a4a",
            }}
          ></Alert>
        </Online>
        <Offline>
          <Alert
            message="Проверьте подключение к интернету"
            type="error"
          ></Alert>
        </Offline>
      </div>
    );
  }

  if (filter === "Самый дешевый") {
    return (
      <div>
        <Online>
          <ul className={classes.tickets_list}>
            {filteredTickets.slice(0, visibleTickets).map((ticket) => (
              <li key={uuidv4()} className={classes.ticket_li}>
                <Ticket ticket={ticket} />
              </li>
            ))}
          </ul>
          {visibleTickets < filteredTickets.length && (
            <button onClick={showMoreTickets} className={classes.button}>
              Показать еще 5 билетов!
            </button>
          )}
        </Online>
        <Offline>
          <Alert
            message="Ничего не найдено. Проверьте подключение к интернету"
            type="error"
          ></Alert>
        </Offline>
      </div>
    );
  }
  if (filter === "Самый быстрый") {
    return (
      <div>
        <Online>
          <ul className={classes.tickets_list}>
            {filteredTickets.slice(0, visibleTickets).map((ticket) => (
              <li key={uuidv4()} className={classes.ticket_li}>
                <Ticket ticket={ticket} />
              </li>
            ))}
          </ul>
          {visibleTickets < filteredTickets.length && (
            <button onClick={showMoreTickets} className={classes.button}>
              Показать еще 5 билетов!
            </button>
          )}
        </Online>
        <Offline>
          <Alert
            message="Ничего не найдено. Проверьте подключение к интернету"
            type="error"
          ></Alert>
        </Offline>{" "}
      </div>
    );
  }
  if (filter === "Оптимальный") {
    return (
      <div>
        <Online>
          <ul className={classes.tickets_list}>
            {filteredTickets.slice(0, visibleTickets).map((ticket) => (
              <li key={uuidv4()} className={classes.ticket_li}>
                <Ticket ticket={ticket} />
              </li>
            ))}
          </ul>
          {visibleTickets < filteredTickets.length && (
            <button onClick={showMoreTickets} className={classes.button}>
              Показать еще 5 билетов!
            </button>
          )}
        </Online>
        <Offline>
          <Alert
            message="Ничего не найдено. Проверьте подключение к интернету"
            type="error"
          ></Alert>
        </Offline>{" "}
      </div>
    );
  }
  if (tickets.length === 0) {
    return (
      <div>
        <Online>
          return <Spin size="large" className={classes.spin}></Spin>;
        </Online>
        <Offline>
          <Alert
            message="Ничего не найдено. Проверьте подключение к интернету"
            type="error"
          ></Alert>
        </Offline>
      </div>
    );
  }
};

export default TicketsList;
