import React from "react"

// function App(props) {
//     return (
//         <div>
//             <h1>{props.whatever}</h1>
//         </div>
//     )
// }

class App extends React.Component {
    
    yourMethodHere() {
        
    }
    
    render() {
        // you can usually put your logic in the render before the return
        return (
            <div>
                <h1>{this.props.whatever}</h1>
            </div>
        )
    }
}

export default App
