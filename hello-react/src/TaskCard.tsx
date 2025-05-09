import React from 'react';
import './TaskCard.css'

interface TaskCard {
  title: string
  assigneeName: string
}

class dueCard implements TaskCard {
  title: string
  assigneeName: string
  dueDate: string

  constructor(title:string, assigneeName:string, dueDate: string){
      this.title = title
      this.assigneeName = assigneeName
      this.dueDate = dueDate
  }
}

class completedCard implements TaskCard {
  title: string
  assigneeName: string
  completedAtDate: string

  constructor(title:string, assigneeName:string, completedAtDate: string){
      this.title = title
      this.assigneeName = assigneeName
      this.completedAtDate = completedAtDate
  }
}


const TaskCard = ({title,dueDate,assigneeName,completedAtDate}:{title: string, dueDate?: string, assigneeName: string, completedAtDate?: string}) => {
  if (dueDate != null){
    const item = new dueCard(title, assigneeName,dueDate)
    return (
            <div className='task-card mt-3 m-3'>
                <h1 className='font-bold text-2xl'>{item.title}</h1>
                <p>Due on: {item.dueDate}</p>
                <p>Assignee: {item.assigneeName}</p>
            </div>
    )
} else{ 
    const item = new completedCard(title,assigneeName,completedAtDate)
    return (
        <>
            <div className='task-card mt-3 m-3'>
                <h1 className='font-bold text-2xl'>{item.title}</h1>
                <p>Completed on: {item.completedAtDate}</p>
                <p>Assignee: {item.assigneeName}</p>
            </div>
        </>
    )
}
}

export default TaskCard