import React, { Component } from 'react'

export default class TaskItems extends Component {
    render() {
        const item = this.props.tasks.map((task, index) => {
           if(!task.isComplete){
            return <li className="list-group-item" key={task.id}>{task.value} 
            <button className="float-right fas fa-trash btn btn-danger ml-2 btn-remove" onClick={() => this.props.onDelete(task.id)}></button>
            <button className="float-right fas fa-pencil-alt btn btn-warning btn-edit"></button></li>
           }
        })
        return (
            <ul className="list-group" id="list-item">
                {item}
            </ul>
        )
    }
}
