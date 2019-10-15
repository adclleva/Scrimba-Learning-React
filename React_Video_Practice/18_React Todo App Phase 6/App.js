/**
 * Let's make it so our checkbox can actually mark our todo as complete or incomplete!
 * This challenge is a little more involved than some of the past ones. Check the comments
 * in the code for some help on accomplishing this one
 *
 * Challenge:
 * 1. Create an event handler in the App component for when the checkbox is clicked (which is an `onChange` event)
 *    a. This method will be the trickest part. Check the comments in the stubbed-out method below for some pseudocode to help guide you through this part
 * 2. Pass the method down to the TodoItem component
 * 3. In the TodoItem component, make it so when the `onChange` event happens, it calls the `handleChange` method and passes the id of the todo into the function
 */

import React from "react"
import TodoItem from "./TodoItem"
import todosData from "./todosData"

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: todosData
        }
    }

    handleChange = (id) => {
        const { todos } = this.state

        // Update state so that the item with the given id flips `completed` from false to true (or vise versa)
        // Remember not to modify prevState directly, but instead to return a new version of state with the change you want included in that update. (Think how you might use the `.map` method to do this)
        const todosCopy = [...todos]
        const updatedTodos = todosCopy.map(toDosObj => {
            if (toDosObj.id === id) {
                toDosObj.completed = !toDosObj.completed
            }
            return toDosObj
        });

        this.setState({todos: updatedTodos})
    }

    render() {
        const { todos } = this.state

        const todoItems = todos.map(toDoObj => {
            return (<TodoItem
                        key={toDoObj.id}
                        id={toDoObj.id}
                        toDoObj={toDoObj}
                        checkChange={this.handleChange}/>)
                    })
        return (
            <div className="todo-list">
                {todoItems}
            </div>
        )
    }
}

export default App

// /**
//  * Let's make it so our checkbox can actually mark our todo as complete or incomplete!
//  * This challenge is a little more involved than some of the past ones. Check the comments
//  * in the code for some help on accomplishing this one
//  *
//  * Challenge:
//  * 1. Create an event handler in the App component for when the checkbox is clicked (which is an `onChange` event)
//  *    a. This method will be the trickest part. Check the comments in the stubbed-out method below for some pseudocode to help guide you through this part
//  * 2. Pass the method down to the TodoItem component
//  * 3. In the TodoItem component, make it so when the `onChange` event happens, it calls the `handleChange` method and passes the id of the todo into the function
//  */
//
// import React from "react"
// import TodoItem from "./TodoItem"
// import todosData from "./todosData"
//
// class App extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             todos: todosData
//         }
//     }
//
//     handleChange = (id) => {
//         const { todos } = this.state
//
//         // Update state so that the item with the given id flips `completed` from false to true (or vise versa)
//         // Remember not to modify prevState directly, but instead to return a new version of state with the change you want included in that update. (Think how you might use the `.map` method to do this)
//         console.log("*")
//                 console.log(todos[0])
//
//         const updatedTodos = [...todos].map(toDosObj => {
//             if (toDosObj.id === id) {
//                 toDosObj.completed = !toDosObj.completed
//             }
//             return toDosObj
//         });
//         console.log('---')
//         console.log(updatedTodos[0])
//         console.log(todos[0])
//         this.setState({todos: updatedTodos})
//     }
//
//     render() {
//         const { todos } = this.state
//
//         const todoItems = todos.map(toDoObj => {
//             return (<TodoItem
//                         key={toDoObj.id}
//                         id={toDoObj.id}
//                         toDoObj={toDoObj}
//                         checkChange={this.handleChange}/>)
//                     })
//         return (
//             <div className="todo-list">
//                 {todoItems}
//             </div>
//         )
//     }
// }
//
// export default App
//
