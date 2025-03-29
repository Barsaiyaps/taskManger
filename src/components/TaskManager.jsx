import { useState } from "react"
import {useDispatch,useSelector} from "react-redux"
function TaskManager() {

  const [tasks,setTask]=useState("")
  const dispatch=useDispatch()
  const task=useSelector(state=>state.data.tasks)

  function handleAddTask(){
    dispatch({type:"ADD_TASKS",payload:tasks})
    setTask("")
  }

  function handleComplete(id){
    dispatch({type:"COMPLETE_TASK",payload:id})
    console.log(id)
  }

  function handleDelete(id){
    dispatch({type:"DELETE_TASK",payload:id})

  }

  return (
    <>
      <h1>TASK MANAGER</h1>
      <input 
      placeholder="Enter task"
      value={tasks}
      onChange={(e)=>setTask(e.target.value)} />

      <button 
      onClick={handleAddTask}>ADD TASK</button>
      <ul>
      {task.map(e=> {return(<div key={e.id}>
        <li key={e.id}>{e.title}
      <button
      onClick={()=>handleComplete(e.id)}>{e.completed?"Incomplete":"Complete"}</button>
      <button
      onClick={()=>handleDelete(e.id)}
      >REMOVE</button>
      </li>
      </div>)})}
        </ul> 
    </>
  )
}

export default TaskManager