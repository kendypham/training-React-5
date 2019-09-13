import React, { useState, useEffect } from 'react'

const Modal = props => {
    const [task, setTask] = useState({
        id: "",
        isComplete: "",
        value: ""
    })

    /**
     * Call when props change
     */
    useEffect(() => {
        setTask(props.task)
    },[props])

    /**
     * @param  {object} e - Get event when user changes value of input
     * Update new state 
     */

    const handleChange = (e) => {
        setTask({
            [e.target.name]: e.target.value,
            id: props.task.id,
            isComplete: props.task.isComplete
        })
    }

    /**
     * call onSave function from parent
     */

    const onSave = () => {
        props.onSave(task)
    }

    /**
     *  render form modal which can be used to change the value of task
     */

        return (
            <div className="modal fade" id="editForm" tabIndex="-1" role="dialog" aria-labelledby="editFormTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="editFormTitle">Edit form</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <input className="w-100" type="text" name="value" value={task.value} onChange={handleChange}></input>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" id="btn-save" data-dismiss="modal" onClick={onSave}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default Modal;