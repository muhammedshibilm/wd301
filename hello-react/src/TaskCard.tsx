import React from "react";

interface TaskCardProps {
  title: string;
  dueDate?: Date;
  completedAtDate?: Date;
  assigneeName: string;
}

const TaskCard: React.FC<TaskCardProps> = ({ title, dueDate, completedAtDate, assigneeName }) => {
  let data = " ";
      if (completedAtDate) {
        data = "Completed on: " + completedAtDate.toDateString();
      } else{
        data = "Due on: " + dueDate.toDateString();
      }
  return (
    <div className="p-4 bg-cyan-400 rounded-md shadow-md">
    <h3 className="text-lg font-bold">{title}</h3>
    <p>{data}</p>
    <p>Assignee: {assigneeName}</p>
  </div>
  );
};

export default TaskCard;