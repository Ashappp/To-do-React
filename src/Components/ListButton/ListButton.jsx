import React from "react";
import "./ListButton.css";
import { NavLink } from "react-router-dom";

const ListButton = ({ ShowCompliteTask, ShowAllTask, ShowUnCompliteTask }) => {
  return (
    <div>
      <button onClick={ShowAllTask} className={"btnList"}>
        All
      </button>
      <button onClick={ShowCompliteTask} className={"btnList"}>
        Complite
      </button>
      <button onClick={ShowUnCompliteTask} className={"btnList"}>
        Uncomplite
      </button>
    </div>
  );
};

export default ListButton;
