import React from "react";
import NewTask from "../NewTask/NewTask";
import { Droppable } from "react-beautiful-dnd";

const ListTask = ({
  arrTask,
  flag,
  edit,
  takeLineClass,
  dontSaveTask,
  saveTask,
  deleteTask,
  editTask,
  EditNewTask,
  filter
}) => {
  return (
    <div>
      {filter(arrTask, flag).map(el => (
        <NewTask
          takeLineClass={takeLineClass}
          dontSaveTask={dontSaveTask}
          saveTask={saveTask}
          edit={edit}
          arrTask={el}
          key={el.id}
          deleteTask={deleteTask}
          editTask={editTask}
          EditNewTask={EditNewTask}
        />
      ))}
    </div>
  );
};

export default ListTask;
