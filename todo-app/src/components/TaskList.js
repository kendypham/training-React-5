import React, { Component } from 'react';
import TaskItems from './TaskItems';
import randomstring from 'randomstring';
class TaskList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            task: {
                id: "",
                value: "",
                isComplete: false
            },
            isAll : true
           
        }
    }

    handleChange = (e) => {
        this.setState({
            task: {
                id: randomstring.generate(7),
                [e.target.name]: e.target.value,
                isComplete: false
            }
        })
    }

    clean = () => {
        this.setState({
            task: {
                id: "",
                value: ""
            }
        })
    }

    onAdd = () => {
        this.props.onAdd(this.state.task);
        this.clean();
    }

    showComplete = () => {
        this.setState({
            isAll : false
        })
    }

    showAll = () => {
        this.setState({
            isAll : true
        })
    }

    render() {
        return (
            <div>
                <div className="row justify-content-center">
                    <div className="col-8">
                        <div className="card">
                            <div className="card-header">
                                <input className="w-50" name="value"
                                    value={this.state.task.value}
                                    type="text" placeholder="What needs to be done"
                                    onChange={this.handleChange} />
                                <button className="float-right btn btn-primary fas fa-plus-square" onClick={() => this.onAdd()}></button>
                            </div>
                            <div className="card-body">
                                <TaskItems tasks={this.props.tasks}
                                onSave={(task) => this.props.onSave(task)} 
                                onDelete={(id) => this.props.onDelete(id)}
                                onCheck={(id) => this.props.onCheck(id)}
                                onUndo={(id) => this.props.onUndo(id)} 
                                isAll={this.state.isAll}/>
                            </div>
                            <div className="card-footer d-flex justify-content-center">
                                <button className="btn btn-success mr-2" onClick={() => this.showAll()}>Show All</button>
                                <button className="btn btn-warning" onClick={() => this.showComplete()}>Show Completed</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TaskList;