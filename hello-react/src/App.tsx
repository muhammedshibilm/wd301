import React from "react";
import TaskCard from "./TaskCard";

export interface Task {
  title: string;
  dueDate?: Date;
  completedAtDate?: Date;
  assigneeName?: string;
}

function App() {
  const pendingData: Task[] = [
    {
      title: "Build the website with static content",
      dueDate: new Date("2023-12-31"),
      assigneeName: "Rohit S",
    },
    {
      title: "Add a blog",
      dueDate: new Date("2023-11-30"),
      assigneeName: "Rohit M",
    },
  ];

  const doneData: Task[] = [
    {
      title: "Design the mockup",
      completedAtDate: new Date("2024-12-31"),
      assigneeName: "Rohit M",
    },
    {
      title: "Get the approval from principal",
      completedAtDate: new Date("2024-11-30"),
      assigneeName: "Ajay S",
    },
  ];

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-xl font-bold">Smarter Tasks</h1>
      <p>
        <strong>Project: </strong>Graduation Final Year Project (Revamp College
        Website)
      </p>
      <div className="flex space-x-4">
        <div className="w-1/2 space-y-3 bg-cyan-500 p-4 rounded-md">
          <h2 className="text-lg font-bold text-center">Pending Tasks</h2>
          {pendingData.map((task, idx) => (
            <TaskCard
              key={idx}
              title={task.title}
              assigneeName={task.assigneeName}
              dueDate={task.dueDate}
            />
          ))}
          <div className="bg-cyan-800 text-md font-semibold p-2 rounded-md">
            + New task
          </div>
        </div>
        <div className="w-1/2 space-y-3 bg-cyan-500 p-4 rounded-md">
          <h2 className="text-lg font-bold text-center">Done Tasks</h2>
          {doneData.map((task, idx) => (
            <TaskCard
              key={idx}
              title={task.title}
              assigneeName={task.assigneeName}
              completedAtDate={task.completedAtDate}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
