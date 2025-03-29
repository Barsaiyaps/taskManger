
const initialTask={
    tasks:[]
}

const taskReducer=(state=initialTask,action)=>{
    switch(action.type){
        case "ADD_TASKS":
            return {...state,tasks:[...state.tasks,{id:Date.now(),title:action.payload,completed:false}]}  
        case "COMPLETE_TASK":
            return {...state,tasks:state.tasks.map(e=>e.id===action.payload?{...e,completed: !e.completed}:e)}
        case "DELETE_TASK":
            return {...state,tasks:state.tasks.filter((e)=>e.id!=action.payload)}

        default:
            return state
    }
}

export default taskReducer