const TaskCard = ({ data }) => {
  return (
    <div className="bg-cyan-500 shadow-lg p-4 rounded-md space-y-4">
      <h2 className='text-center text-lg font-bold'>{data.title}</h2>
      <ul>
        {data.subtask.map((task, index) => (
          <div key={index} className="bg-cyan-600 p-2 my-2 rounded-md">
            <li className="space-y-4">
              <h3 className="font-bold">{task.title}</h3>
              <p>{ data.title == "Pending" ? "Due on":"Completed on"}: {task.date}</p>
              <p>Assignee: {task.assignee}</p>
            </li>
            </div>
        ))}
      </ul>
      {
       data.title == "Pending" ? <div className="bg-cyan-800 text-md font-semibold p-2 rounded-md">+ New task</div> : ""
      }
    </div>
  );
};

export default TaskCard;