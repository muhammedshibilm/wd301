
import Task from "./Task";
import type { TaskItems } from "./types";

interface Props {
  tasks: TaskItems[],
   onDeleteTask: (index: number) => void;

}


const TaskList = (props : Props) =>{

  const taskList =props.tasks.map((value, index) => (
      <Task title={value.title} description={value.description} dueDate={value.dueDate} key={index}   onDelete={() => props.onDeleteTask(index)}   />
    )); // in a group of element passing time its assing to variable and pass it other wise its shwoing error 

  return <ul>{taskList}</ul>
}

export default TaskList;