/**
 * Challenge: Style the completed todo items differently from the incomplete items.
 */
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
                <p className={toDoObj.completed ? "checked-text" : ""}>{toDoObj.text}</p>
            </div>
        )
    }

}

export default TodoItem

// another way of doing things
// the instructor did it through inline style

// import React from "react"

// function TodoItem(props) {
//     const completedStyle = {
//         fontStyle: "italic",
//         color: "#cdcdcd",
//         textDecoration: "line-through"
//     }
    
//     return (
//         <div className="todo-item">
//             <input 
//                 type="checkbox" 
//                 checked={props.item.completed} 
//                 onChange={() => props.handleChange(props.item.id)}
//             />
//             <p style={props.item.completed ? completedStyle: null}>{props.item.text}</p>
//         </div>
//     )
// }

// export default TodoItem

