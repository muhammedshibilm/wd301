import React from "react";

export interface TaskProps {
  title: string;
  dueDate?: Date;
  completedAtDate?: Date;
  assigneeName?: string;
}

function formatWithIntl(date: Date): string {
  const day = date.getDate();
  const month = date.toLocaleString("en-US", { month: "long" });
  const year = date.getFullYear(); 

  const pr = new Intl.PluralRules("en-US", { type: "ordinal" });
  const suffixMap: Record<string, string> = {
    one: "st",
    two: "nd",
    few: "rd",
    other: "th",
  };
  const suffix = suffixMap[pr.select(day)];

  return `${day}${suffix} ${month} ${year}`; // Add the year to the formatted string
}

const TaskCard: React.FC<TaskProps> = ({
  title,
  dueDate,
  completedAtDate,
  assigneeName,
}) => (
  <div className="p-4 bg-cyan-400 rounded-md shadow-md">
    <h3 className="text-lg font-bold">{title}</h3>
    {dueDate && <p>Due on: {formatWithIntl(dueDate)}</p>}
    {completedAtDate && <p>Completed on: {formatWithIntl(completedAtDate)}</p>}
    {assigneeName && <p>Assignee: {assigneeName}</p>}
  </div>
);

export default TaskCard;