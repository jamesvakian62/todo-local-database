import React from "react";
import FilterControl from "./FilterControl";
import Task from "./Task";

// #10 desgtructure setTasks, filterStatus, setFilterStatus, filterteredTasks
function TaskList({
  task,
  tasks,
  setTasks,
  filterStatus,
  setFilterStatus,
  filteredTasks,
  setFilteredTasks,
}) {
  console.log(tasks);
  // #12b Create a function called clearCompleted that will clear completed Tasks by updating the tasks with the filtered tasks, then reset the
  //   filterStatus("all")

  const clearCompleted = () => {
    setTasks(tasks.filter((task) => task.status !== true));
  };
  

  return (
                                  //style={{ background-color: setBackgroundColor()  }} 
    <div className="todo-items-wrapper"  >  
      <div className="todo-items">
        {/* #5 pass down tasks ans setTasks for later */}
        {/* #11 Map through the tasks array that get's passed down form app */}
        {filteredTasks.map((item) => {
          //  #12
          return <Task key={item.id} task={item} setTasks={setTasks} tasks={tasks} />;
        })}        
          {/* key={item.id}          task={item}    setTasks={setTasks}         tasks={tasks} */}
          {/* one object             one object     function of the useState    the whole array of tasks */}
           </div>       

      <div className="todo-items-info">
        <div className="items-left">
          <p> {tasks.length} tasks</p>
        </div>
        {/* SHOULD BE THE FILTER CONTROLLER COMPONENT */}

        <FilterControl
          filterStatus={filterStatus}
          setFilterStatus={setFilterStatus}
        />

        <div className="items-clear">
          {/* #12a create an onClick that runs s function to clear completed tasks */}
          <span onClick={clearCompleted}>Clear Completed</span>
        </div>
      </div>
    </div>
  );
}

export default TaskList;
