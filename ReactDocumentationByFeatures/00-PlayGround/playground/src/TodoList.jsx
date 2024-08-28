import React, { useState } from "react";

function TodoList() {
  const [tasks, setTasks] = useState([
    "Going to Gym",
    "Having Breakfast",
    "Working",
    "Preparing the Food",
    "Cleaning",
  ]);

  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  return (
    <div className="to-do-list-component">
      <h1>To Do List: </h1>
      <input
        type="text"
        placeholder="Enter a task..."
        value={newTask}
        onChange={handleInputChange}
      ></input>
      <button className="add-button" onClick={addTask}>
        Add
      </button>

      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default TodoList;
