const TODO_TASKS = "tasks"

/**
   * Get data from localStorage
   */

export const getLocalData = (setTasks) => {
    setTasks(JSON.parse(localStorage.getItem(TODO_TASKS)) || [])
}

/**
   * @param  {object} tasks - array which contains tasks 
   * Save data to localStorage
   */

export const saveLocalData = (tasks, setTasks) => {
    localStorage.setItem(TODO_TASKS,JSON.stringify(tasks));
    setTasks(tasks)
}