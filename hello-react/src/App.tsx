import React from "react";
import TaskCard from "./TaskCard";

function App() {
  return (
    <div className="p-4 space-y-4">
      <h1 className="text-xl font-bold">Smarter Tasks</h1>
      <p>
        <strong>Project: </strong>Graduation Final Year Project (Revamp College
        Website)
      </p>
      <div className="flex space-x-4">
        {/* Pending Tasks */}
        <div className="w-1/2 space-y-3 bg-cyan-500 p-4 rounded-md">
          <h2 className="text-lg font-bold text-center">Pending Tasks</h2>
          <TaskCard
            title="Build the website with static content"
            dueDate={new Date("2025-04-10")}
            assigneeName="Rohit S"
          />
          <TaskCard
            title="Add a blog"
            dueDate={new Date("2025-03-22")}
            assigneeName="Rohit M"
          />
          <div className="bg-cyan-800 text-md font-semibold p-2 rounded-md">
            + New task
          </div>
        </div>

        {/* Done Tasks */}
        <div className="w-1/2 space-y-3 bg-cyan-500 p-4 rounded-md">
          <h2 className="text-lg font-bold text-center">Done Tasks</h2>
          <TaskCard
            title="Design the mockup"
            completedAtDate={new Date("2025-04-10")}
            assigneeName="Rohit M"
          />
          <TaskCard
            title="Get the approval from principal"
            completedAtDate={new Date("2025-04-20")}
            assigneeName="Ajay S"
          />
        </div>
      </div>
    </div>
  );
}

export default App;