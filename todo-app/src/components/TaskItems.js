/* eslint-disable array-callback-return */
import React, { Component } from 'react'
import Modal from './Modal';

export default class TaskItems extends Component {
    constructor(props){
        super(props)
        this.state = {
            task : {
                id : "",
                value : ""
            }
        }
    }

    /**
     * @param  {object} task - Store the task passed to Modal
     */

    editItem(task) {
        this.setState({
            task
        })
    }

    
    /**
     * Show the list items base on status isComplete
     */
    
    render() {
        const itemComplete = this.props.tasks.map((task, index) => {
            if (task.isComplete) {
                return <li className="list-group-item" key={task.id}>{task.value}
                    <button className="float-right fas fa-trash btn btn-danger ml-2" onClick={() => this.props.onDelete(task.id)}></button>
                    <button className="float-right fas fa-undo btn btn-info" onClick={() => this.props.onUndo(task.id)}></button></li>
            }
        })
        const itemTodo = this.props.tasks.map((task, index) => {
            if (!task.isComplete) {
                return <li className="list-group-item" key={task.id}>{task.value}
                    <button className="float-right fas fa-check btn btn-danger ml-2" onClick={() => this.props.onCheck(task.id)}></button>
                    <button className="float-right fas fa-pencil-alt btn btn-warning btn-edit"
                        data-toggle="modal" data-target="#editForm" onClick={() => this.editItem(task)}></button>
                </li>
            }
        })
        const item = this.props.isAll ? itemTodo : itemComplete
        return (
            <div>
                <ul className="list-group" id="list-item">
                    {item}
                </ul>
                 <Modal task={this.state.task} onSave={this.props.onSave}/>
            </div>
        )
    }
}
