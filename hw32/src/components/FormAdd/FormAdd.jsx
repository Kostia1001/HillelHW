import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FormAdd = (props) => {
  const { addTask } = props;

  const [taskName, setTaskName] = useState("");

  const handleformSubmit = (event) => {
    event.preventDefault();

    const task = {
      name: taskName,
      id: uuidv4(),
    };
    addTask(task);
  };

  
  return (
    <form onSubmit={handleformSubmit}>
      <input
        type="text"
        placeholder="Enter task name"
        value={taskName}
        onChange={(event) => setTaskName(event.target.value)}
        required
        autoFocus
      ></input>
      <button type="submit">Add</button>
    </form>
  );
};

export default FormAdd;
