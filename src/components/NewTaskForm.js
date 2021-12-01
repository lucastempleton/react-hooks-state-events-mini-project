import React from "react";
import { useState } from "react";

function NewTaskForm({ categories, addTasks }) {
  const [taskData, setTaskData] = useState({})
  function manageTaskData(e){
    const key = e.target.name
    setTaskData(
      {...taskData,[key]:e.target.value}
    )
  }
  function manageSubmit(e){
    e.preventDefault()
    const newObj = taskData
    addTasks(newObj)
    setTaskData({})

  }
  
  return (
    <form className="new-task-form">
      <label>
        Details
        <input onChange={manageTaskData} type="text" name="text" />
      </label>
      <label>
        Category
        <select onClick={manageTaskData} name="category">
          {
            categories.map(category => 
              <option>{category}</option>
            )
          }
        </select>
      </label>
      <input onClick={manageSubmit} type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
