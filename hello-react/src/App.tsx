import React from "react"
import TaskCart from "./TaskCard"


function App() {
   const pendingData =   [{ "title": "Build the website with static content", "dueDate": new Date('2023-12-31'), "assignee": "Rohit S" }, { "title": "Add a blog", "dueDate": new Date('2023-11-31'), "assignee": "Rohit M" }];
  const doneData =  [{ "title": "Design the mockup", "completedAtDate": new Date('2024-12-31'), "assignee": "Rohit M" }, { "title": "Get the approval from principal", "completedAtDate": new Date('2024-11-31'), "assignee": "Ajay S" }]


  return (
    <div className="p-4 space-y-4">
      <h1 className="text-xl font-bold">Smarter Tasks</h1>
      <p><strong>Project: </strong>Graduation Final Year Project (Revamp College Website)</p>
      <div className="flex space-x-4">
        <div className="w-1/2 space-y-3 bg-cyan-500 p-4 rounded-md ">
          <h2 className="text-lg font-bold text-center">Pending Tasks</h2>
          {pendingData.map((task, index) => (
            <TaskCart key={index} title={task.title} dueDate={task.dueDate} assigneeName={task.assignee} />
          ))}
          <div className="bg-cyan-800 text-md font-semibold p-2 rounded-md">+ New task</div>
        </div>
        <div className="w-1/2 space-y-3 bg-cyan-500 p-4 rounded-md ">
          <h2 className="text-lg font-bold text-center">Done Tasks</h2>
          {doneData.map((task, index) => (
            <TaskCart key={index} title={task.title} completedAtDate={task.completedAtDate} assigneeName={task.assignee} />
          ))}
        </div>
    </div>
    </div>
  )
}

export default App
