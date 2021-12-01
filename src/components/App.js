import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { useState } from "react";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasksToRender, setTasks] = useState(TASKS)
  function changeTasks(category){
    const removedTask = tasksToRender.find(el=>el.category===category)
    
    const newTasksToRender = tasksToRender.filter(el => 
      el!==removedTask)
    setTasks(newTasksToRender)
    
  }
  function changeCategories(categoryName){
    const copyOfTasksToRender = [...TASKS]
    let newTasksToRender = copyOfTasksToRender.filter(el=>el.category===categoryName)
    console.log(categoryName)
    if (categoryName==="All"){
      newTasksToRender = TASKS
    }
    setTasks(newTasksToRender)
    
    
  }
  function addTasks(newTask){
    const newObj = [...tasksToRender, newTask]
    setTasks(newObj)
  }
  
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter changeCategories={changeCategories} categories={CATEGORIES} />
      <NewTaskForm categories={CATEGORIES} addTasks={addTasks} />
      <TaskList tasks={tasksToRender} changeTasks={changeTasks} />
    </div>
  );
}

export default App;
