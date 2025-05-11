import React from "react";
import "./TaskCard.css";

interface TaskProps {
  title: string;
  description: string;
  dueDate: string;
}

class Task extends React.Component<TaskProps> {
  //pass the taskprops has a paramer

  render(): React.ReactNode {
    //render method is render everything on screen

    return (
      <div className="TaskItem shadow-md border border-slate-100">
        <h2 className="text-base font-bold my-1">{this.props.title}</h2>
        <p className="text-sm text-slate-500">Due Date: {this.props.dueDate}</p>
        <p className="text-sm text-slate-500">Description: {this.props.description}</p>
      </div>
    ); //this keyword used to acees the props in titile
  }
}

export default Task;
