import React, { Component } from 'react'

class ToDoItem extends Component {
    render() {
        return (
            <div>
                <label className="container"> Placeholder text here
                    <input type="checkbox" />
                    <span className="checkmark" ></span>
                </label>
            </div>
        );
    }
}

export default ToDoItem