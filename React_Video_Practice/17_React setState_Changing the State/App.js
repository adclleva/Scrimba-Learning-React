import React from "react"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }

    handleEvent = () => {
        const { count } = this.state
        this.setState({count: count + 1})
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleEvent}>Change!</button>
            </div>
        )
    }
}

export default App


/* another way of doing the problem
    this utilitzes the setState method to get a function that utilizes the previous state
*/
// import React from "react"

// class App extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             count: 0
//         }
//         this.handleClick = this.handleClick.bind(this)
//     }
        // the setState is taking in a method that returns an object literal  
//     handleClick() {
//         this.setState(prevState => {
//             return {
//                 count: prevState.count + 1
//             }
//         })
//     }

//     render() {
//         return (
//             <div>
//                 <h1>{this.state.count}</h1>
//                 <button onClick={this.handleClick}>Change!</button>
//             </div>
//         )
//     }
// }

// export default App
