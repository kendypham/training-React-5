import React, { Component } from 'react'

export default class Modal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            task: {
                id: "",
                isComplete: "",
                value: ""
            }
        }
    }

    /**
     * @param  {object} props - The new props
     * @param  {object} state - The old state
     * Check when props update
     */

    static getDerivedStateFromProps(props, state) {
        if (state.task.id !== props.task.id) {
            state = props
        }
        return state
    }

    /**
     * @param  {object} e - Get event when user changes value of input
     * Update new state 
     */

    onChange = (e) => {
        this.setState({
            task: {
                [e.target.name]: e.target.value,
                id: this.props.task.id,
                isComplete: this.props.task.isComplete
            }
        })
    }

    /**
     * call onSave function from parent
     */

    onSave = () => {
        this.props.onSave(this.state.task)
    }

    /**
     *  render form modal which can be used to change the value of task
     */

    render() {
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
                            <input className="w-100" type="text" name="value" value={this.state.task.value} onChange={this.onChange}></input>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.onSave}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
