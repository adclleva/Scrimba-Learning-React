import React from "react"

function handleClick() {
    console.log("I was clicked")
}

function handleMouseHover() {
    console.log("Mouse is on the picture")
}

// https://reactjs.org/docs/events.html#supported-events

function App() {
    return (
        <div>
            <img onMouseEnter={handleMouseHover} src="https://www.fillmurray.com/200/100"/>
            <br />
            <br />
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}

export default App
