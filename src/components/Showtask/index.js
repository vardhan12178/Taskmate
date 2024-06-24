import React from 'react'

const Showtask = ({taskList,setTaskList,task,setTask}) => {

const handleDelete=(id)=>{
const newList=taskList.filter(each=>each.id !==id)
setTaskList(newList)
}

const handleEdit=(id)=>{
  const selectedTask=taskList.find(each=>each.id===id)
  setTask(selectedTask)
}
  return (
   <section className='showTask'>
        <div className='head'>
            <div>
                <span className='title'>Todo</span>
                <span className='count'>{taskList.length}</span>
            </div>
            <button className='clearAll' onClick={()=>setTaskList([])}>Clearall</button>
        </div>
        <ul>
        {taskList.map(each=>(
            <li key={each.id}>
                <p>
                    <span className='name'>{each.name}</span>
                    <span className='time'>{each.time}</span>
                </p>
                <i className='bi bi-pencil-square' onClick={()=>handleEdit(each.id)}></i>
                <i className='bi bi-trash' onClick={()=>handleDelete(each.id)}></i>
            </li>
        ))}
           
        </ul>
   </section>
  )
}

export default Showtask
