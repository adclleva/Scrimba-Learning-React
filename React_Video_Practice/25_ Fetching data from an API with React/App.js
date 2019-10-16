import React, {Component} from "react"

// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
// https://swapi.co/
// https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261

class App extends Component {
    constructor() {
        super()
        this.state = {
            isLoading: false,
            character: {}
        }
    }
    
    componentDidMount() {
        this.setState({isLoading: true})
        
        fetch("https://swapi.co/api/people/1")
            .then(response => response.json())
            .then(data => {
                this.setState({isLoading: false})
                this.setState({character: data})

            })
    }
    
    render() {
        const { character, isLoading } = this.state
        const name = (isLoading ? "Loading..." : character.name)
         
        
        return (
            <div>
                <h1>{name}</h1>          
            </div>
        )
    }
}

export default App
