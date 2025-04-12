import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./TaskManager.css"; // Import the CSS file

function TaskManager() {
  const [tasks, setTask] = useState("");
  const dispatch = useDispatch();
  const task = useSelector((state) => state.data.tasks);

  function handleAddTask() {
    dispatch({ type: "ADD_TASKS", payload: tasks });
    setTask("");
  }

  function handleComplete(id) {
    dispatch({ type: "COMPLETE_TASK", payload: id });
  }

  function handleDelete(id) {
    dispatch({ type: "DELETE_TASK", payload: id });
  }

  return (
    <div className="task-manager">
      <h1>TASK MANAGER</h1>
      <div className="task-input">
        <input
          placeholder="Enter task"
          value={tasks}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={handleAddTask}>ADD TASK</button>
      </div>
      <ul className="task-list">
        {task.map((e) => (
          <li
            key={e.id}
            className={`task-item ${e.completed ? "completed" : ""}`}
          >
            <span>{e.title}</span>
            <div className="task-buttons">
              <button onClick={() => handleComplete(e.id)}>
                {e.completed ? "Mark Incomplete" : "Mark Complete"}
              </button>
              <button onClick={() => handleDelete(e.id)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskManager;
