import React from "react";
import "./NewTask.css";
import { Draggable } from "react-beautiful-dnd";

const AllTask = ({
  takeLineClass,
  arrTask,
  deleteTask,
  editTask,
  edit,
  saveTask,
  dontSaveTask,
  key
}) => {
  return (
    <div key={key} className="taskDiv">
      {arrTask.flag ? (
        <input type="text" name="edit" value={edit} onChange={saveTask} />
      ) : arrTask.line_through ? (
        <p
          className="line_through"
          onClick={takeLineClass}
          data-id={arrTask.id}
        >
          {arrTask.task}
        </p>
      ) : (
        <p onClick={takeLineClass} data-id={arrTask.id}>
          {arrTask.task}
        </p>
      )}
      {arrTask.flag ? (
        <div className="allbtn">
          <button className="btn" data-id={arrTask.id} onClick={saveTask}>
            Save
          </button>
          <button className="btn" data-id={arrTask.id} onClick={dontSaveTask}>
            Cancel
          </button>
        </div>
      ) : (
        <div className="allbtn">
          <button className="btn" data-id={arrTask.id} onClick={deleteTask}>
            Delete
          </button>
          <button className="btn" data-id={arrTask.id} onClick={editTask}>
            Edit
          </button>
        </div>
      )}
    </div>
  );
};

export default AllTask;
