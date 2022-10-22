import React from "react";
import "./toDosList.css";
import Task from "../task/Task";
function ToDosList({tasks,setTasks}) {
  function deleteHandler(id){
   setTasks(tasks.filter(task=> task.id!==id))
  }
  function doneHandler(id){
setTasks(tasks.map(task=>{
  if(task.id===id){
    return{
      ...task,
      done:!task.done
    }
  }
  return task
}))
  }
  
  return (
    <div className="to-dos-list">
   {tasks.map(task => {
    
     return(
       <Task key={task.id}
       id = {task.id}
       taskContent={task.name}
       deleteHandler ={deleteHandler}
       done={task.done}
       setTasks={setTasks}
       tasks={tasks}
       doneHandler={doneHandler}
       />
     )
   })}
    </div>
  );
}

export default ToDosList;
