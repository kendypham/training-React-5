/* eslint-disable array-callback-return */
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

  /**
   * Get data from localStorage
   */

  getLocalData() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    this.setState({
      tasks
    })
  }

  /**
   * @param  {object} tasks - array which contains tasks 
   * Save data to localStorage
   */

  saveLocalData(tasks) {
    localStorage.setItem("tasks",JSON.stringify(tasks));
    this.setState({
      tasks
    })
  }

  
  /**
   * Get data from localStorage when first render
   */

  componentDidMount = () => {
    this.getLocalData()
  }

  /**
   * @param  {object} task - The value of task which contains id, value, and status 
   * This function will add new task to array and save array to localStorage 
   */

  onAdd(task) {
    const tasks = this.state.tasks.slice();
    tasks.push(task)
    this.saveLocalData(tasks)
  }

  
  /**
   * @param  {string} id - Task id
   * Change status of task when check or undo
   */

  onChangeComplete(id) {
    const tasks = this.state.tasks.slice();
    tasks.find(item => {
      if (item.id === id) {
        item.isComplete = !item.isComplete
      }
    })
    this.saveLocalData(tasks)
  }

  /**
   * @param  {string} id - Task id
   * Delete task with this id in array
   */

  onDelete(id) {
    const tasks = this.state.tasks.slice();  
    const item = tasks.find(item => {
      if (item.id === id) {
        return item
      }
    })
    const index = tasks.indexOf(item)
    tasks.splice(index,1)
    this.saveLocalData(tasks)
  }

  /**
   * @param  {object} task - task object
   * Save when edit the value
   */

  onSave(task) {
    const tasks = this.state.tasks.slice();
    tasks.find(item => {
      if (item.id === task.id) {
        item.value = task.value
      }
    })
    this.saveLocalData(tasks)
  }

  
  /**
   * render App todo
   */
  render() {
    return (
      <div className="container">
        <Header />
        <TaskList onAdd={(task) => this.onAdd(task)} 
        tasks={this.state.tasks} 
        onDelete={(id) => this.onDelete(id)}
        onSave={(task) => this.onSave(task)}
        onCheck={(id) => this.onChangeComplete(id)}
        onUndo={(id) => this.onChangeComplete(id)}/>
      </div>
    )
  }
}
