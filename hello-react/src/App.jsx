import TaskCart from "./TaskCard"


function App() {
   const pendingData =  {
    "title": "Pending",
    "subtask": [{ "title": "Build the website with static content", "date": "10th April", "assignee": "Rohit S" }, { "title": "Add a blog", "date": "22nd March", "assignee": "Rohit M" }]
  }

  const doneData =  {
    "title": "Done",
    "subtask": [{ "title": "Design the mockup", "date": "10th April", "assignee": "Rohit M" }, { "title": "Get the approval from principal", "date": "20th April", "assignee": "Ajay S" }]
  }


  return (
    <div className="p-4 space-y-4">
      <h1 className="text-xl font-bold">Smarter Tasks</h1>
      <p><strong>Project: </strong>Graduation Final Year Project (Revamp College Website)</p>
      <div className="w-full grid md:grid-cols-2 gap-5">
        <TaskCart data={pendingData} />
        <TaskCart data={doneData} />
      </div>
    </div>
  )
}

export default App
