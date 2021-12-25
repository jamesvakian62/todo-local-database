import React, { useState } from "react";
import Check from "../images/icon-check.svg";

// #5 add tasks and setTasks as props will use later!
function Task({ task, tasks, setTasks }) {
  // #2 Create a useState of the mutableTask, hold the object
  const [mutableTask, setMutableTask] = useState(task);

  console.log(mutableTask);

  const checked = mutableTask.status ? "checked" : "";
  const checkIcon = mutableTask.status ? (    <img src={Check} alt="Completed" />  ) : (    ""  );

  //   When a task is completee = Status = True <<

  // #3 Create a function that when click the task status will be true on the frontend and backend(data)
  const markCompleted = () => {
    //Set the status to the opposite onClick (frontend)
    console.log("Marked");
    // set the stuatus ..... update....this
    setMutableTask({ ...mutableTask, status: !mutableTask.status });
    // update the status on the tasks data
    const updatedTasks = tasks.map((item) =>
      item.id === task.id ? { ...item, status: !item.status } : item
    );
    setTasks(updatedTasks);
  };

  console.log(mutableTask);

  return (
    <div className="todo-item">
      <div className="check" onClick={markCompleted}>
        {/* #4a Add a ternary that if the mutableTask is true add the class "checked" to it*/}
        <div className={`check-mark ${checked}`}>{checkIcon}</div>
      </div>
      <div className={`todo-text ${checked}`}>{task.text}</div>
    </div>
  );
}
export default Task;
