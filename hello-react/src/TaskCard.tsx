import React from "react";

interface TaskCardProps {
  title: string,
  dueDate?: Date,
  completedAtDate?: Date,
  assigneeName: string,
}

const formateDate = (date: Date) => date.toLocaleDateString("en-CA")

const TaskCard: React.FC<TaskCardProps> = ({ title , dueDate , completedAtDate ,assigneeName }) => {
  return (
    <div className="bg-cyan-400 shadow-lg p-4 rounded-md space-y-4">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p> {dueDate  && <p>Due Date: {formateDate(dueDate)}</p>}</p>
      <p>{completedAtDate && <p>Completed At: {formateDate(completedAtDate)}</p>}</p>
      <p>Assignee: {assigneeName}</p>  
    </div>
  );
};

export default TaskCard;