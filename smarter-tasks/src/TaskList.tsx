import Task from "./Task";
import type { TaskItems } from "./types";

interface Props {
  tasks: TaskItems[]
}



const TaskList = (props : Props) =>{

  const taskList =props.tasks.map((value, index) => (
      <Task title={value.title} description={value.description} dueDate={value.dueDate} key={index}  />
    )); // in a group of element passing time its assing to variable and pass it other wise its shwoing error 

  return <li>{taskList}</li>
}

export default TaskList;