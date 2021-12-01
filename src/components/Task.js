import React from "react";

function Task({ category, text, changeTasks }) {
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={()=>changeTasks(category)} className="delete">X</button>
    </div>
  );
}

export default Task;
