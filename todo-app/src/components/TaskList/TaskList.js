import React, { useState } from 'react';
import TaskItems from '../TaskItems/TaskItems';
import randomstring from 'randomstring';
const TaskList = props => {
    const [task, setTask] = useState({
        id: "",
        value: "",
        isComplete: false
    })

    const [isAll, setIsAll] = useState(true)

    /**
     * @param  {object} e - Event when input change value
     */
    
    const handleChange = (e) => {
        setTask({
            id: randomstring.generate(7),
            [e.target.name]: e.target.value,
            isComplete: false
        })
    }

    /**
     * Reset the input value when clicked add button
     */

    const clean = () => {
        setTask({
            id: "",
            value: ""
        })
    }

    /**
     * pass data to App by function callback
     */

    const onAdd = () => {
        props.onAdd(task);
        clean();
    }

    /**
     * Set condition to render item in TaskItem
     */

    const showComplete = () => {
        setIsAll(false)
    }

    /**
     * Set condition to render item in TaskItem
     */

    const showAll = () => {
        setIsAll(true)
    }

    /**
     * Render card which contains list items
     */
        return (
            <div>
                <div className="row justify-content-center">
                    <div className="col-8">
                        <div className="card">
                            <div className="card-header">
                                <input className="w-50" name="value"
                                    value={task.value}
                                    type="text" placeholder="What needs to be done"
                                    onChange={handleChange} />
                                <button className="float-right btn btn-primary fas fa-plus-square" onClick={onAdd}></button>
                            </div>
                            <div className="card-body">
                                <TaskItems tasks={props.tasks}
                                    onSave={props.onSave}
                                    onDelete={props.onDelete}
                                    onCheck={props.onCheck}
                                    onUndo={props.onUndo}
                                    isAll={isAll} />
                            </div>
                            <div className="card-footer d-flex justify-content-center">
                                <button className="btn btn-success mr-2" onClick={showAll}>Show All</button>
                                <button className="btn btn-warning" onClick={showComplete}>Show Completed</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
}

export default TaskList;