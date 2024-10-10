import React from "react";

export interface Task {
  title: string;
  dueDate?: Date;
  completedAtDate?: Date;
  assigneeName: string;
}

const TaskCard: React.FC<Task> = ({ title, dueDate, completedAtDate, assigneeName }) => {
  return (
    <div className="p-4 bg-cyan-400 rounded-md shadow-md">
      <h3 className="text-lg font-bold">{title}</h3>
      {dueDate && <p>Due on: {dueDate.toLocaleDateString("en-CA")}</p>}
      {completedAtDate && <p>Completed on: {completedAtDate.toLocaleDateString("en-CA")}</p>}
      <p>Assignee: {assigneeName}</p>
    </div>
  );
};

export default TaskCard;