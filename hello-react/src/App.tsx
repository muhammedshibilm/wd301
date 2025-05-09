import React from "react";
import TaskCard from "./TaskCard";
function App() {
  return (
    <div className="md:grid md:grid-cols-2 gap-4 p-4  mt-10 place-items-center ">
      <div >
        <h1 className="font-bold justify-center flex text-2xl">Pending</h1>
        <TaskCard
          title={"Build the website with static content"}
          dueDate={"Due on:12/04/2024"}
          assigneeName={"Nishanth A"}
        />
        <TaskCard
          title={"Build the website with dynamic content"}
          dueDate={"Due on:06/04/2024"}
          assigneeName={"Nishanth S"}
        />
      </div>
      <div>
        <h1 className="font-bold justify-center flex text-2xl">Done</h1>
        <TaskCard
          title={"Build the website with  content"}
          completedAtDate={"Completed on:01/04/2024"}
          assigneeName={"Nishanth A"}
        />
        <TaskCard
          title={"Build the website with unknown content"}
          completedAtDate={"Completed on:01/04/2024"}
          assigneeName={"Nishanth B"}
        />
      </div>
    </div>
  );
}

export default App;
