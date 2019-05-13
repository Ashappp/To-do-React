import React from "react";
import NewTask from "../NewTask/NewTask";
import "./AllTask.css";
import ListButton from "../ListButton/ListButton";
import { NavLink } from "react-router-dom";

const AllTask = ({
  flag,
  filter,
  ShowAllTask,
  ShowUnCompliteTask,
  ShowCompliteTask,
  takeLineClass,
  arrTask,
  deleteTask,
  editTask,
  EditNewTask,
  edit,
  saveTask,
  dontSaveTask
}) => {
  return (
    <ul className="allTask">
      <NavLink onClick={ShowAllTask} to={`/All`} className={"btnAllLinks"}>
        All
      </NavLink>
      <NavLink
        onClick={ShowCompliteTask}
        to={`/Complite`}
        className={"btnAllLinks"}
      >
        Complite
      </NavLink>
      <NavLink
        onClick={ShowUnCompliteTask}
        to={`/UnComplite`}
        className={"btnAllLinks"}
      >
        UnComplite
      </NavLink>
    </ul>
  );
};

export default AllTask;
