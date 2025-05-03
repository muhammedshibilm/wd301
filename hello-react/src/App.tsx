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
        <div className="w-1/2 space-y-3 bg-cyan-500 p-4 rounded-md">
          <h2 className="text-lg font-bold text-center">Pending Tasks</h2>
            
            <TaskCard title="new task" completedAtDate={new Date("10-12-2025")} assigneeName="Shibil" />
          
          <div className="bg-cyan-800 text-md font-semibold p-2 rounded-md">
            + New task
          </div>
        </div>
        <div className="w-1/2 space-y-3 bg-cyan-500 p-4 rounded-md">
          <h2 className="text-lg font-bold text-center">Done Tasks</h2>
           <TaskCard  title="done task" dueDate={new Date("12-02-2025")} assigneeName="Shibu"/>
        </div>
      </div>
    </div>
  );
}

export default App;
