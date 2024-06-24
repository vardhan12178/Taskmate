import React from 'react'

const Addtask = ({taskList,setTaskList,task,setTask}) => {

    const handleSubmit=(event)=>{
        event.preventDefault()
        if(task.id){
            const date=new Date()
            const updatedList=taskList.map(each=>(
                each.id===task.id?{id:task.id,name:task.name,time:`${date.toLocaleDateString()} ${date.toLocaleTimeString()}`}:each
            ))
                setTaskList(updatedList)
               setTask({})
        }else{
            const date=new Date()
            const newTask={
                id:date.getTime(),
                time:`${date.toLocaleDateString()} ${date.toLocaleTimeString()}`,
                name:event.target.task.value
            }
            setTaskList([...taskList,newTask])
            setTask({})
        }
        
    }
  return (
   <section className='addTask'>
    <form onSubmit={handleSubmit}>
        <input name="task" type="text" value={task.name || ""} onChange={(event)=>setTask({...task,name:event.target.value})} maxLength={25} placeholder="Add Task" autoComplete='off' />
        <button type='submit'>{task.id ? "Update" : "Add"}</button>
    </form>
   </section>
  )
}

export default Addtask
