import React, { Component } from "react";
import Form from "../Form/Form";
import NewTask from "../NewTask/NewTask";
import AllTask from "../AllTask/AllTask";
import { DragDropContext } from "react-beautiful-dnd";
import ListTask from "../ListTasks/ListTask";
// import ListButton from "../ListButton/ListButton";
import "./App.css";
// import { Switch, Route } from "react-router-dom";
// import VariantAll from "../Variant/VariantAll";
// import VariantComplite from "../Variant/VariantComplite";
// import VariantUnComplite from "../Variant/VariantUnComplite";

class App extends Component {
  state = {
    task: "",
    arrTask: [],
    edit: "",
    flag: null
  };

  EditNewTask = e => {
    let value = e.target.value;
    let name = e.target.name;
    this.setState({
      [name]: value
    });
  };

  addToArr = e => {
    e.preventDefault();
    let obj = {
      task: this.state.task,
      id: Date.now(),
      flag: false,
      line_through: false
    };
    this.setState(prev => ({
      arrTask: [...prev.arrTask, obj],
      task: ""
    }));
  };

  deleteTask = e => {
    let idTask = e.target.dataset.id;
    let result = this.state.arrTask.filter(el => el.id !== Number(idTask));
    this.setState({
      arrTask: result
    });
  };

  editTask = e => {
    let idTask = e.target.dataset.id;
    let result = this.state.arrTask.map(el =>
      el.id === Number(idTask) ? { ...el, flag: true } : { ...el, flag: false }
    );
    let update = this.state.arrTask.find(el => el.id === Number(idTask)).task;

    this.setState({
      arrTask: result,
      edit: update
    });
  };

  saveTask = e => {
    let name = e.target.name;
    let idTask = e.target.dataset.id;
    let result = this.state.arrTask.map(el =>
      el.id === Number(idTask)
        ? { ...el, flag: false, task: this.state.edit }
        : el
    );
    let value = e.target.value;
    this.setState({
      [name]: value,
      arrTask: result
    });
  };

  dontSaveTask = e => {
    let idTask = e.target.dataset.id;
    let result = this.state.arrTask.map(el =>
      el.id === Number(idTask) ? { ...el, flag: false } : el
    );

    this.setState({
      arrTask: result
    });
  };

  takeLineClass = e => {
    let idTask = e.target.dataset.id;
    let result = this.state.arrTask.map(el =>
      el.id === Number(idTask) ? { ...el, line_through: !el.line_through } : el
    );
    this.setState({
      arrTask: result
    });
  };

  ShowAllTask = () => {
    this.setState({
      flag: null
    });
  };

  ShowUnCompliteTask = () => {
    this.setState({
      flag: false
    });
  };

  ShowCompliteTask = () => {
    this.setState({
      flag: true
    });
  };

  filter = (arr, flag) => {
    if (flag === null) {
      return arr;
    } else if (flag === true) {
      return arr.filter(el => el.line_through === true);
    } else {
      return arr.filter(el => el.line_through === false);
    }
  };
  onDragEnd = result => {};
  render() {
    const { task, arrTask, edit, flag } = this.state;
    return (
      <div className="App">
        <Form
          task={task}
          EditNewTask={this.EditNewTask}
          addToArr={this.addToArr}
        />
        <DragDropContext onDragEnd={this.onDragEnd}>
          <ListTask
            filter={this.filter}
            arrTask={arrTask}
            flag={flag}
            takeLineClass={this.takeLineClass}
            dontSaveTask={this.dontSaveTask}
            saveTask={this.saveTask}
            edit={edit}
            deleteTask={this.deleteTask}
            editTask={this.editTask}
            EditNewTask={this.EditNewTask}
          />
          {/* {this.filter(arrTask, flag).map(el => (
            <NewTask
              takeLineClass={this.takeLineClass}
              dontSaveTask={this.dontSaveTask}
              saveTask={this.saveTask}
              edit={edit}
              arrTask={el}
              key={el.id}
              deleteTask={this.deleteTask}
              editTask={this.editTask}
              EditNewTask={this.EditNewTask}
            />
          ))} */}
        </DragDropContext>
        <AllTask
          flag={flag}
          arrTask={arrTask}
          filter={this.filter}
          ShowAllTask={this.ShowAllTask}
          ShowUnCompliteTask={this.ShowUnCompliteTask}
          ShowCompliteTask={this.ShowCompliteTask}
          takeLineClass={this.takeLineClass}
          dontSaveTask={this.dontSaveTask}
          saveTask={this.saveTask}
          deleteTask={this.deleteTask}
          editTask={this.editTask}
          EditNewTask={this.EditNewTask}
          edit={edit}
        />
        {/* <Switch>
          <Route
            path="/All"
            render={props => (
              <AllTask
                {...props}
                flag={flag}
                arrTask={arrTask}
                filter={this.filter}
                ShowAllTask={this.ShowAllTask}
                ShowUnCompliteTask={this.ShowUnCompliteTask}
                ShowCompliteTask={this.ShowCompliteTask}
                takeLineClass={this.takeLineClass}
                dontSaveTask={this.dontSaveTask}
                saveTask={this.saveTask}
                arrTask={arrTask}
                deleteTask={this.deleteTask}
                editTask={this.editTask}
                EditNewTask={this.EditNewTask}
                edit={edit}
              />
            )}
          />
          <Route
            path="/Complite"
            render={props => (
              <AllTask
                {...props}
                flag={flag}
                arrTask={arrTask}
                filter={this.filter}
                ShowAllTask={this.ShowAllTask}
                ShowUnCompliteTask={this.ShowUnCompliteTask}
                ShowCompliteTask={this.ShowCompliteTask}
                takeLineClass={this.takeLineClass}
                dontSaveTask={this.dontSaveTask}
                saveTask={this.saveTask}
                arrTask={arrTask}
                deleteTask={this.deleteTask}
                editTask={this.editTask}
                EditNewTask={this.EditNewTask}
                edit={edit}
              />
            )}
          />
          <Route
            path="/UnComplite"
            render={props => (
              <AllTask
                {...props}
                flag={flag}
                arrTask={arrTask}
                filter={this.filter}
                ShowAllTask={this.ShowAllTask}
                ShowUnCompliteTask={this.ShowUnCompliteTask}
                ShowCompliteTask={this.ShowCompliteTask}
                takeLineClass={this.takeLineClass}
                dontSaveTask={this.dontSaveTask}
                saveTask={this.saveTask}
                arrTask={arrTask}
                deleteTask={this.deleteTask}
                editTask={this.editTask}
                EditNewTask={this.EditNewTask}
                edit={edit}
              />
            )}
          />
        </Switch> */}
      </div>
    );
  }
}

export default App;
