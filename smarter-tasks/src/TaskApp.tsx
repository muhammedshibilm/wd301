import type { TaskItems } from "./types";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import { useEffect } from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";

type TaskAppProps = object

interface TaskAppState{
    tasks: TaskItems[];

}


// eslint-disable-next-line @typescript-eslint/no-unused-vars
const TaskApp =  (_props: TaskAppProps) =>{
  const [tasksState, setTaskState ] = useLocalStorage<TaskAppState>("task" , {tasks: []});

  const addTask = (task: TaskItems) =>{
    if (task.title != null && task.description != null && task.dueDate !=null ) {
      setTaskState({tasks: [...tasksState.tasks, task]});
    }
  }

  useEffect(()=>{
    const id = setTimeout(() => {  //setTimeOut is a async method 
       console.log(`Save ${tasksState.tasks.length} items to the backend`)
    }, 5000);
    console.log("Setter function is called");
    
    //close the request time its calll it 
    return ()=>{
      console.log(`This is called cancell any external network call `)
      clearTimeout(id);
    }
        
  },[tasksState.tasks])
  return(
        <div className="container py-10 max-w-4xl mx-auto">
        <h1 className="text-3xl text-center  mb-2 font-bold text-slate-700">
          Smarter Tasks
          
        </h1>
        <h1 className="text-lg text-center mb-6 text-slate-600">
          <span className="font-bold">Project: </span>
          Graduation Final Year Project (Revamp college website)
        </h1>
        <div className="grid grid-cols-2 gap-4">
          <div className="border border-slate-200 rounded-xl p-4">
            <h1 className="text-slate-500 text-xl font-bold text-center mb-2">
              Pending
            </h1>
            <TaskForm  addTask={addTask} />
            <ul className="">
              <TaskList tasks={tasksState.tasks} />
            </ul>
          </div>
        </div>
      </div>
  );
}

export default TaskApp;