import Task from "./Task";
import type { TaskItems } from "./types";

interface Props {
  tasks: TaskItems[];
  onDeleteTask: (id: number) => void;
}

const TaskList = (props: Props) => {
  const handleDelete = (idx: number) => {
    props.onDeleteTask(idx);
  };

  const taskList = props.tasks.map((value, index) => (
    <li key={index}>
      {" "}
      <Task
        title={value.title}
        description={value.description}
        dueDate={value.dueDate}
        key={index}
        id={value.id}
      />{" "}
      
      <div className="grid place-content-end pt-5">
        <button
        onClick={() => handleDelete(index)}
        className="deleteTaskButton  w-fit h-fit text-white px-5 rounded-lg mb-1 bg-red-600"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
          />
        </svg>
      </button>
      </div>
    </li>
  )); // in a group of element passing time its assing to variable and pass it other wise its shwoing error

  return <ul>{taskList}</ul>;
};

export default TaskList;
