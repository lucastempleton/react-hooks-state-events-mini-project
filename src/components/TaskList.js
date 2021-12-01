import React from "react";
import Task from "./Task";

function TaskList({ tasks, changeTasks }) {
  return (
    <div className="tasks">
      {
        tasks.map(el=>
          <Task changeTasks={changeTasks} text={el.text} category={el.category}/>
        )
      }
    </div>
  );
}

export default TaskList;
