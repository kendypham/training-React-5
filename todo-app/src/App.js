/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react'
import Header from './components/Header';
import TaskList from './components/TaskList';

const App = props => {
  const [tasks, setTasks] = useState([])

  /**
   * Get data from localStorage
   */

  const getLocalData = () => {
    setTasks(JSON.parse(localStorage.getItem("tasks")) || [])
  }

  /**
   * @param  {object} tasks - array which contains tasks 
   * Save data to localStorage
   */

  const saveLocalData = (tasks) => {
    localStorage.setItem("tasks",JSON.stringify(tasks));
    setTasks(tasks)
  }

  
  /**
   * Get data from localStorage when first render
   */

  // componentDidMount = () => {
  //   this.getLocalData()
  // }

  useEffect(() => {
    getLocalData()
  }, [])

  /**
   * @param  {object} task - The value of task which contains id, value, and status 
   * This function will add new task to array and save array to localStorage 
   */

  const onAdd = (task) => {
    const tasksCopy = tasks.slice()
    tasksCopy.push(task)
    saveLocalData(tasksCopy)
  }

  
  /**
   * @param  {string} id - Task id
   * Change status of task when check or undo
   */

  const onChangeComplete = (id) => {
    const tasksCopy = tasks.slice()
    tasksCopy.find(item => {
      if (item.id === id) {
        item.isComplete = !item.isComplete
      }
    })
    saveLocalData(tasksCopy)
  }

  /**
   * @param  {string} id - Task id
   * Delete task with this id in array
   */

  const onDelete = (id) => {
    const tasksCopy = tasks.slice()  
    const item = tasksCopy.find(item => {
      if (item.id === id) {
        return item
      }
    })
    const index = tasksCopy.indexOf(item)
    tasksCopy.splice(index,1)
    saveLocalData(tasksCopy)
  }

  /**
   * @param  {object} task - task object
   * Save when edit the value
   */

  const onSave = (task) => {
    const tasksCopy = tasks.slice()
    tasksCopy.find(item => {
      if (item.id === task.id) {
        item.value = task.value
      }
    })
    saveLocalData(tasksCopy)
  }

  
  /**
   * render App todo
   */
 
    return (
      <div className="container">
        <Header />
        <TaskList onAdd={(task) => onAdd(task)} 
        tasks={tasks} 
        onDelete={(id) => onDelete(id)}
        onSave={(task) => onSave(task)}
        onCheck={(id) => onChangeComplete(id)}
        onUndo={(id) => onChangeComplete(id)}/>
      </div>
    )
}

export default App