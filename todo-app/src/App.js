import React, { Component } from 'react'
import Header from './components/Header';
import TaskList from './components/TaskList';

export default class App extends Component {
  constructor(props){
    super(props)
    this.state={
      tasks : []
    }
  }

  getLocalData = () => {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    this.setState({
      tasks
    })
  }

  saveLocalData = (tasks) => {
    localStorage.setItem("tasks",JSON.stringify(tasks));
    this.setState({
      tasks
    })
  }

  componentWillMount = () => {
    this.getLocalData()
  }

  onAdd = (task) => {
    let tasks = this.state.tasks.slice();
    tasks.push(task);
    this.saveLocalData(tasks)
  }

  onDelete = (id) => {
    const tasks = this.state.tasks.slice();
    tasks.find(item => {
      if (item.id === id) {
        item.isComplete = !item.isComplete
      }
    })
    this.saveLocalData(tasks)
  }

  render() {
    return (
      <div className="container">
        <Header />
        <TaskList onAdd={(task) => this.onAdd(task)} tasks={this.state.tasks} onDelete={(id) => this.onDelete(id)}/>
      </div>
    )
  }
}
