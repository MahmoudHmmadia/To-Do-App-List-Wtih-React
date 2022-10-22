import React from 'react'
import './toDosForm.css'
function TodDosForm({task,setTask,tasks,setTasks}) {

 function inputHandler(e){
  setTask(e.target.value);
  }
  function addHandler(e){
       e.preventDefault();
       if(task!==''){
         setTasks(prev=>
             [
               ...prev,
               {
                 id:Math.random()*10000,
                 name:task,
                 done:false
               }
             ]
         )
         setTask('');
       }
  }
  return (
    <div className="todos-form">
      <form>
        <input type="text" name="task" className='task-input' onChange={inputHandler} value={task}/>
        <input type="submit" name="submit" className='task-submit' value={`Add Task`} onClick={addHandler}/>
      </form>
    </div>
  )
}

export default TodDosForm