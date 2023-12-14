import React from "react";
import classes from "./app.module.scss";
import Header from "../header/header";
import Sidebar from "../sidebar/sidebar";
import Filter from "../filter/filter";
import TicketsList from "../ticket-list/ticket-list";
import Button from "../button/button";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getId } from "../../store/idSlice";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {dispatch(getId())}, [dispatch]);
  return (
    <div className={classes.app}>
      <div className={classes.wrapper}>
        <Header />
        <div className={classes.main}>
          <div>
            <Sidebar />
          </div>
          <div>
            <Filter />
            <TicketsList />
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
