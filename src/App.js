import React, { Fragment, useState, useEffect } from "react";
import Header from "./components/header/Header";
import ToDosForm from "./components/todosForm/TodDosForm";
import ToDosList from "./components/toDosList/ToDosList";

import "./app.css";
function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  return (
    <div className="app">
      <Header />
      <ToDosForm
        task={task}
        setTask={setTask}
        tasks={tasks}
        setTasks={setTasks}
      />
      <ToDosList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}
export default App;
