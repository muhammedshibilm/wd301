import React from 'react';

const TaskCard = ({ data }) => {
  return (
    <div className="bg-gray-900 shadow-md p-4 rounded-md space-y-4">
      <h2 className='text-center'>{data.title}</h2>
      <ul>
        {data.subtask.map((task, index) => (
          <div key={index} className="bg-gray-800 p-2 my-2 rounded-md">
            <li>
              <h3>{task.title}</h3>
              <p><strong>Due Date: </strong>{task.date}</p>
              <p><strong>Assignee: </strong>{task.assignee}</p>
            </li>
            </div>
        ))}
      </ul>
    </div>
  );
};

export default TaskCard;