import React from "react";
import "./task.css";
import {IoIosCloudDone} from 'react-icons/io'
import {AiFillDelete} from 'react-icons/ai'
function Task({ taskContent,deleteHandler,id,done,doneHandler }) {
  return (
    <div className={`task ${done ? 'done':''}`}>
      <p>{taskContent}</p>
      <div className="controler">
        <button className="delete" onClick={()=>deleteHandler(id)}><AiFillDelete/></button>
        <button className="done" onClick={()=>doneHandler(id)}><IoIosCloudDone/></button>
      </div>
    </div>
  );
}

export default Task;
