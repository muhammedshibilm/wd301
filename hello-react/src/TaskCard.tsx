import React from "react";

export interface TaskProps {
  title: string;
  dueDate?: Date;
  completedAtDate?: Date;
  assigneeName?: string;
}

const TaskCard: React.FC<TaskProps> = ({
  title,
  dueDate,
  completedAtDate,
  assigneeName,
}) => (
  <div className="p-4 bg-cyan-400 rounded-md shadow-md">
    <h3 className="text-lg font-bold">{title}</h3>
    {dueDate && <p>Due on: {dueDate.toLocaleDateString()}</p>}
    {completedAtDate && <p>Completed on: {completedAtDate.toLocaleDateString()}</p>}
    {assigneeName && <p>Assignee: {assigneeName}</p>}
  </div>
);

export default TaskCard;
