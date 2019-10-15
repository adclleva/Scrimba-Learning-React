import React from "react"

class TodoItem extends React.Component {
    
    render() {
        const { checkChange, id, toDoObj } = this.props

        return (        
            <div className="todo-item">
                <input 
                    type="checkbox" 
                    checked={toDoObj.completed} 
                    onChange={() => checkChange(id)}
                />
                <p>{toDoObj.text}</p>
            </div>
        )
    }

}

export default TodoItem

