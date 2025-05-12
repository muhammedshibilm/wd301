import React from "react";
import type { TaskItems } from "./types";

interface TaskFormProps {
  addTask: (task: TaskItems) => void;
  tasks: TaskItems[]
}
interface TaskFormSate {
  id: number
  title: string;
  description: string;
  dueDate: string;
}

const TaskForm = (props: TaskFormProps) => {
  const [formState, setFormState] = React.useState<TaskFormSate>({
    id: props.tasks.length,
    title: "",
    dueDate: "",
    description: "",
  });

  const today = new Date().toISOString().split("T")[0];

  const titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    event.preventDefault();
    setFormState({ ...formState, title: event.target.value });
  };

  const descriptionChanged: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    console.log(`${event.target.value}`);
    setFormState({ ...formState, description: event.target.value });
  };
  const dueDateChanged: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    console.log(`${event.target.value}`);
    setFormState({ ...formState, dueDate: event.target.value });
  };

  const addTask: React.FormEventHandler<HTMLFormElement> = (event)=>{
      event.preventDefault();

        if (formState.title.length === 0 || formState.dueDate.length === 0  || formState.description.length === 0) {
           return;
        }
        props.addTask(formState);
        setFormState({id: props.tasks.length+1, title: "", description: "", dueDate: "" });
  }

  return (
    <form className="space-y-4 flex flex-col justify-center" onSubmit={addTask}>
      <label htmlFor="todoTitle" className="font-semibold text-center">
        Task Title
      </label>
      <input
        className="border-2 border-gray-500 rounded-sm  p-1"
        type="text"
        id="todoTitle"
        value={formState.title}
        onChange={titleChanged}
        required
      />
      <label htmlFor="todoDueDate" className="font-semibold text-center">
        Task Due Date
      </label>
      <input
        type="date"
        min={today}
        className="border-2 border-gray-500 rounded-sm p-1"
        id="todoDueDate"
        value={formState.dueDate}
        onChange={dueDateChanged}
        required
      />
      <label htmlFor="todoDescription" className="font-semibold text-center">
        Task Description
      </label>
      <input
        type="text"
        className="border-2 border-gray-500 rounded-sm p-1"
        id="todoDescription"
        value={formState.description}
        onChange={descriptionChanged}
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
};

export default TaskForm;
