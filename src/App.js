import "./App.css";
import { useEffect, useState } from "react";
// import { setFilteredTasks, filteredStatus, setFilteredStatus } from './components/FilterControl'
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

const data = [
  { id: 1, text: "Finish contacts hw", status: true }, /// compelted is true
  { id: 2, text: "Study react hooks", status: false },
  { id: 3, text: "Finish Clever programmer challenge", status: false },
  { id: 4, text: "Run 1 mile", status: false },
  { id: 5, text: "Finish errands", status: false },
  { id: 6, text: "Complete Todo App", status: false },
];

function App() {
  //Create a state that holds the data arr
  const [tasks, setTasks] = useState(data);

  //#6 creaete a state that holds the current filter status
  const [filterStatus, setFilterStatus] = useState("all");

  // 10a Create a state that holds filteredTasks and map through that instead of tasks in TaskList.js
  const [filteredTasks, setFilteredTasks] = useState(tasks);

// Light / dark mode
  const [themeToggle, setThemeToggle] = useState(true);
// if themeToggle == false)
//  image == sun
//  else if(true)
//  image should be moon
const toggleTheme = () => {
  if(themeToggle !== true){

  return "assets/icon-sun.svg"
  } else{  
  return "assets/icon-moon.svg"

  }
}

  //#7 Create a state that has a handerFilter() function
  useEffect(() => {
    //#7b Handle function  should have a if statement that depending on the filterStatus
    const handleFilter = () => {
      if (filterStatus === "active") {
        console.log("FILTER STATUS IS ACTIVE");
        return setFilterStatus(tasks.filter((task) => task.status === false));
      } else if (filterStatus === "completed") {
        console.log("STATUS IS COMPLETED");
        return setFilteredTasks(tasks.filter((task) => task.status === true));
      } else {
        console.log("IS ALL");
        // if the status is all setFilteredTasks to tasks
        return setFilteredTasks(tasks);
      }
    };

    handleFilter();
  }, [tasks, filterStatus]);

  console.log(tasks);

const setBackgroundColor = () => {
  if(themeToggle !== true){
    return "white"
    } else{  
    return "black"
    }
}


  return (
    <div className="App" style={{ backgroundColor: setBackgroundColor()  }}>
      <div className="container">
        {/* Can turn this to a header component */}
        <div className="header">
          <div className="title"  style={{ color: setBackgroundColor()  }}  >TODO</div>
          <div className="theme">
            <img  onClick={()=>setThemeToggle(!themeToggle)}    src={  toggleTheme()  }             alt="theme" />
          
          </div>
        </div>
        {/* // Add a todo item to the tasks */}

        {/* #2 Pass down todos state and setTodos function as props */}
        <TaskInput tasks={tasks} setTasks={setTasks} />

        {/* SHOULD BE THE TODOLIST COMPONENT */}
        {/* Pass down tasks state, setTasks function, filteredTasks, filterTasks, setFilterStatus function */}
        {/* #9 */}
        <TaskList
          tasks={tasks}
          setTasks={setTasks}
          filterStatus={filterStatus}
          setFilterStatus={setFilterStatus}
          filteredTasks={filteredTasks}
          setFilteredTasks={setFilteredTasks}
        />
      </div>
      <script src="script.js"></script>
    </div>
  );
}

export default App;
