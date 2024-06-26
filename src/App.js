import React, { useState } from "react";
import data from './data.json';
//The Components
import './App.css'
import Header from "./Components/Header";
import ToDoList from "./Components/ToDoList";
import ToDoForm from "./Components/ToDoForm";

function App () {
  const [toDoList, setToDoList] = useState(data)
  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task};
    });
    setToDoList(mapped);
  }
  const handleFilter = () => {
    let filtered = toDoList.filter(task => {
      return !task.complete;
    })
    setToDoList(filtered);
  }
  const addTask = (userInput) => {
    let copy = [...toDoList];
    copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }];
    setToDoList(copy);
  }
  
  return(
    <div className="App">
      <Header/> 
      <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter}/>
      <ToDoForm addTask={addTask}/>
    </div>
  )
}
export default App;