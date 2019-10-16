import React from "react"

/*
Challenge:

Given a stateless functional component:
1. Follow the steps necessary to add state to it,
2. Have state keep track of whether the user is logged in or not
3. Add a button that logs the user in/out
    a. extra challenge - make the button display "log in" if they're not logged in and "log out" if they are
4. Display text that says "Logged in" if the user is logged in, or "Logged out" if they're not.
*/

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            logged: false
        }
    }

    handleClick = () => {
        const { logged } = this.state
        this.setState({logged: !logged})
    }

    render() {
        const { logged } = this.state
        return (
            <div>
                <h1>{logged ? "Logged in" : "Logged out" }</h1>
                <button onClick={this.handleClick}>{logged ? "Log out" : "Log in" }</button>
            </div>
        )
    }

}

export default App


/*
//Another Way of doing the propblem
// class App extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             isLoggedIn: false
//         }
//         this.handleClick = this.handleClick.bind(this)
//     }
//
//     handleClick() {
//         this.setState(prevState => {
//             return {
//                 isLoggedIn: !prevState.isLoggedIn
//             }
//         })
//     }
//
//     render() {
//         let buttonText = this.state.isLoggedIn ? "LOG OUT" : "LOG IN"
//         let displayText = this.state.isLoggedIn ? "Logged in" : "Logged out"
//         return (
//             <div>
//                 <button onClick={this.handleClick}>{buttonText}</button>
//                 <h1>{displayText}</h1>
//             </div>
//         )
//     }
// }
//
// export default App
//
