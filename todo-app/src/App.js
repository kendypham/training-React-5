/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react'
import Header from './components/Header/Header';
import TaskList from './components/TaskList/TaskList';
import * as todo from './utils'

const App = props => {
  const [tasks, setTasks] = useState([{
    id: "test", value: "test", isComplete: true
  }])
  /**
   * Get data from localStorage when first render
   */

  useEffect(() => {
    todo.getLocalData(setTasks)
  }, [])

  /**
   * @param  {object} task - The value of task which contains id, value, and status 
   * This function will add new task to array and save array to localStorage 
   */

  const onAdd = (task) => {
    const tasksCopy = tasks.slice()
    tasksCopy.push(task)
    todo.saveLocalData(tasksCopy,setTasks)
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
    todo.saveLocalData(tasksCopy,setTasks)
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
    todo.saveLocalData(tasksCopy,setTasks)
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
    todo.saveLocalData(tasksCopy,setTasks)
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