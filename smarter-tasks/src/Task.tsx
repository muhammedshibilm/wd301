import "./TaskCard.css";

interface TaskProps {
  title: string;
  description: string;
  dueDate: string;
}

const Task = (props: TaskProps) => {
  return (
    <div className="TaskItem shadow-md border border-slate-100">
      <h2 className="text-base font-bold my-1">{props.title}</h2>
      <p className="text-sm text-slate-500">Due Date: {props.dueDate}</p>
      <p className="text-sm text-slate-500">Description: {props.description}</p>
      <div className="grid place-items-end">
        <button className="deleteTaskButton py-2 px-4 bg-red-500 rounded-md text-white font-semibold">Delete</button>
      </div>
    </div>
  );
};

export default Task;
