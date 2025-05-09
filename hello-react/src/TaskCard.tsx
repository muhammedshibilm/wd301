import React from "react";

interface BaseTask {
  title: string;
  assigneeName: string;
}

interface DueTask extends BaseTask {
  dueDate: Date;
}

interface CompletedTask extends BaseTask {
  completedAtDate: Date;
}

type TaskProps = 
  | ({ dueDate: Date } & BaseTask)
  | ({ completedAtDate: Date } & BaseTask);

 const TaskCard: React.FC<TaskProps> = (props) => {
  const format = (d: Date) =>
    d.toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

  if ("dueDate" in props) {
    return (
      <div className="bg-cyan-800 text-md font-semibold p-2 rounded-md">
        <h3>{props.title}</h3>
        <p>Due on: {format(props.dueDate)}</p>
        <p>Assigned to: {props.assigneeName}</p>
      </div>
    );
  } else {
    return (
      <div className="bg-cyan-800 text-md font-semibold p-2 rounded-md">
        <h3>{props.title}</h3>
        <p>Completed on: {format(props.completedAtDate)}</p>
        <p>Assigned to: {props.assigneeName}</p>
      </div>
    );
  }
};

export default TaskCard;