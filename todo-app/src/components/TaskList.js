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
            isAll: true
        }
    }

    /**
     * @param  {object} e - Event when input change value
     */
    
    handleChange = (e) => {
        this.setState({
            task: {
                id: randomstring.generate(7),
                [e.target.name]: e.target.value,
                isComplete: false
            }
        })
    }

    /**
     * Reset the input value when clicked add button
     */

    clean() {
        this.setState({
            task: {
                id: "",
                value: ""
            }
        })
    }

    /**
     * pass data to App by function callback
     */

    onAdd = () => {
        this.props.onAdd(this.state.task);
        this.clean();
    }

    /**
     * Set condition to render item in TaskItem
     */

    showComplete = () => {
        this.setState({
            isAll: false
        })
    }

    /**
     * Set condition to render item in TaskItem
     */

    showAll = () => {
        this.setState({
            isAll: true
        })
    }

    

    /**
     * Render card which contains list items
     */

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
                                <button className="float-right btn btn-primary fas fa-plus-square" onClick={this.onAdd}></button>
                            </div>
                            <div className="card-body">
                                <TaskItems tasks={this.props.tasks}
                                    onSave={this.props.onSave}
                                    onDelete={this.props.onDelete}
                                    onCheck={this.props.onCheck}
                                    onUndo={this.props.onUndo}
                                    isAll={this.state.isAll} />
                            </div>
                            <div className="card-footer d-flex justify-content-center">
                                <button className="btn btn-success mr-2" onClick={this.showAll}>Show All</button>
                                <button className="btn btn-warning" onClick={this.showComplete}>Show Completed</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TaskList;