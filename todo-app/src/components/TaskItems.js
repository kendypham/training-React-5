/* eslint-disable array-callback-return */
import React, { useState } from 'react'
import Modal from './Modal';

const TaskItems = props => {
    const [task, setTask] = useState({
        id: "",
        value: ""
    })

    /**
     * @param  {object} task - Store the task passed to Modal
     */

    const editItem = (task) => {
        setTask(task)
    }


    /**
     * Show the list items base on status isComplete
     */

    const itemComplete = props.tasks.map((task, index) => {
        if (task.isComplete) {
            return <li className="list-group-item" key={task.id}>{task.value}
                <button className="float-right fas fa-trash btn btn-danger ml-2" onClick={() => props.onDelete(task.id)}></button>
                <button className="float-right fas fa-undo btn btn-info" onClick={() => props.onUndo(task.id)}></button></li>
        }
    })
    const itemTodo = props.tasks.map((task, index) => {
        if (!task.isComplete) {
            return <li className="list-group-item" key={task.id}>{task.value}
                <button className="float-right fas fa-check btn btn-danger ml-2" onClick={() => props.onCheck(task.id)}></button>
                <button className="float-right fas fa-pencil-alt btn btn-warning btn-edit"
                    data-toggle="modal" data-target="#editForm" onClick={() => editItem(task)}></button>
            </li>
        }
    })
    const item = props.isAll ? itemTodo : itemComplete
    return (
        <div>
            <ul className="list-group" id="list-item">
                {item}
            </ul>
            <Modal task={task} onSave={props.onSave} />
        </div>
    )
}

export default TaskItems