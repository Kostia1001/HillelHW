import "./App.css";
import FormAdd from "./components/FormAdd/FormAdd";
import React, { useState } from "react";
import TaskList from "./components/TaskList/TaskList";

const App = () => {
  const [tasks, setTask] = useState([]);

  const addTask = (task) => {
    setTask((prevState) => [...prevState, task]);
  };

  const deleteTask = (id) => {
    setTask((prevState) => prevState.filter((task) => task.id !== id));
  };
  return (
    <div className="App">
      <h1>Todo list</h1>
      <FormAdd addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
};

export default App;
