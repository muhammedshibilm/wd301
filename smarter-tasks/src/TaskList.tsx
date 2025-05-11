import type { ReactNode } from "react";
import React from "react";
import Task from "./Task";
import type { TaskItems } from "./types";

interface Props {
  tasks: TaskItems[]
}

interface State {
  tasks: TaskItems[];
}

class TaskList extends React.Component<Props, State> {
  constructor(props: Props) {
    //initialize state in constructor
    super(props); //When we write a constructor, we will have to call the super and pass the props.
 
    this.state = {
      //We initialize state in the constructor. This is the only place where we can directly mutate or change the this.state variable.
      tasks: this.props.tasks,
    };
  }
  
  // componentDidMount(): void {
  //   //in this not use the state becuase in when page loaded time its not created in consturctor can created in state the vlaue can set using setstate method
  //   const tasks = [{ title: "Pay rent" }, { title: "Pay Current Bill" }];
  //   this.setState((_state, _props) => ({ tasks })); //In every other place in the component, to make change to the state, we will have to use the this.setState method.
  // } //we only see a blank page. The tasks didn't get rendered. So, lets revert to use setState
  render(): ReactNode {
    return this.state.tasks.map((value, index) => (
      <Task title={value.title} description={value.description} dueDate={value.dueDate} key={index}  />
    ));
  }
}

export default TaskList;
