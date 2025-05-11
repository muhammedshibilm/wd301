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
        <input
          className="border-2 border-gray-500 rounded-sm  p-1"
          placeholder="Enter the titile"
          type="text"
          id="todoTitle"
          value={this.state.title}
          onChange={this.titlechanged}
          required
        />
        <input
          type="text"
          className="border-2 border-gray-500 rounded-sm p-1"
          placeholder="Enter the description"
          id="todoDescription"
          onChange={this.descriptionchanged}
          value={this.state.description}
          required
        />
        <input
          type="text"
          className="border-2 border-gray-500 rounded-sm p-1"
          placeholder="Enter the duedate "
          id="todoDueDate"
          value={this.state.dueDate}
          onChange={this.duedatechanged}
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
