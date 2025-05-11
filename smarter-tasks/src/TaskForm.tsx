import React, { type FormEventHandler } from "react";
import type { TaskItems } from "./types";

interface TaskFormProps {
  addTask: (task: TaskItems) => void;
}
interface TaskFormSate {
  title: string;
  description: string;
  dueDate: string;
}
class TaskForm extends React.Component<TaskFormProps, TaskFormSate> {

    today = new Date().toISOString().split("T")[0];

  constructor(props: TaskFormProps) {
    super(props);
    this.state = {
      title: "",
      description: "",
      dueDate: "",
    };
  }
  addTask: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    const newTask  = {
      title: this.state.title,
      description: this.state.description,
      dueDate: this.state.dueDate,
    };
    this.props.addTask(newTask);
    this.setState({ title: "", description: "", dueDate: "" });
  };

  titlechanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  descriptionchanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    this.setState({
      description: event.target.value,
    });
  };

  duedatechanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    this.setState({
      dueDate: event.target.value,
    });
  };
  render(): React.ReactNode {
    return (
      <form
        onSubmit={this.addTask}
        className="space-y-4 flex flex-col justify-center"
      >
        <label htmlFor="todoTitle" className="font-semibold text-center">Task Title</label>
        <input
          className="border-2 border-gray-500 rounded-sm  p-1"
          type="text"
          id="todoTitle"
          value={this.state.title}
          onChange={this.titlechanged}
          required
        />
        <label htmlFor="todoDueDate" className="font-semibold text-center">Task Due Date</label>
          <input
          type="date"
          min={this.today}
          className="border-2 border-gray-500 rounded-sm p-1"
          id="todoDueDate"
          value={this.state.dueDate}
          onChange={this.duedatechanged}
          required
        />
           <label htmlFor="todoDescription" className="font-semibold text-center">Task Description</label>
        <input
          type="text"
          className="border-2 border-gray-500 rounded-sm p-1"
          id="todoDescription"
          onChange={this.descriptionchanged}
          value={this.state.description}
          required
        />
       
      
        <button
          type="submit"
          id="addTaskButton"
          className="border  rounded-md  bg-gray-500 text-white px-4 py-2 block"
        >
          Add item
        </button>
      </form>
    );
  }
}

export default TaskForm;
