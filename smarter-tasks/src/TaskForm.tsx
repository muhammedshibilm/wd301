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

    const newTask = {
      title: this.state.title,
      description: this.state.description,
      dueDate: this.state.dueDate,
    };
    this.props.addTask(newTask);
    this.setState({ title: "", description: "", dueDate: "" });
  };

  titlechanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({
      title: event.target.value,
    });
  };

  descriptionchanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({
      description: event.target.value,
    });
  };

   duedatechanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({
      dueDate: event.target.value,
    });
  };
  render(): React.ReactNode {
    return (
      <form onSubmit={this.addTask}>
        <input
          type="text"
          id="todoTitle"
          value={this.state.title}
          onChange={this.titlechanged}
        />
        <input
          type="text"
          id="todoDescription"
          onChange={this.descriptionchanged}
          value={this.state.description}
        />
        <input type="text" id="todoDueDate" value={this.state.dueDate} onChange={this.duedatechanged} />
        <button type="submit" id="addTaskButton">
          Add item
        </button>
      </form>
    );
  }
}

export default TaskForm;
