import React, { useEffect, useState } from 'react'
import Header from './components/Header';
import Addtask from './components/Addtask';
import Showtask from './components/Showtask';
import './App.css';

const App = () => {
  const[taskList,setTaskList]=useState(JSON.parse(localStorage.getItem('taskList')) || [])
  const[task,setTask]=useState({})

  useEffect(()=>{
    localStorage.setItem("taskList",JSON.stringify(taskList))
  },[taskList])
  return (
    <div>
      <Header/>
      <Addtask taskList={taskList} setTaskList={setTaskList} task={task} setTask={setTask}/>
      <Showtask taskList={taskList} setTaskList={setTaskList} task={task} setTask={setTask}/>
    </div>
  )
}

export default App

