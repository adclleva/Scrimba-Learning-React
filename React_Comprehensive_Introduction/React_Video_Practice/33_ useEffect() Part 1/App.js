import React, {useState, useEffect} from "react"
import randomcolor from "randomcolor"

function App() {
    const [count, setCount] = useState(0)
    const [color, setColor] = useState("")
    
    function increment() {
        setCount(prevCount => prevCount + 1)
    }
    
    function decrement() {
        setCount(prevCount => prevCount - 1)
    }
    
    // we put a second parameter with an array of the variables that changes
    // this is to prevent an infinite rendering loop
    // in this case, the render would occur when the count changes
    useEffect(() => {
        setColor(randomcolor())
    }, [count])
    
    // this is so that the color would be set or "mounted" once
    // useEffect(() => {
    //     setColor(randomcolor())
    // }, [])
    
    return (
        <div>
            <h1 style={{color: color}}>{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

export default App
