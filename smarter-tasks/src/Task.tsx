import "./TaskCard.css";

interface TaskProps {
  id: number;
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
    </div>
  );
};

export default Task;
