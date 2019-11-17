import React from "react"
import ReactDOM from "react-dom"

// capital camel case is important for React Components
// this is a functional component
function MyApp() {
  //our component can only return a signle JSX component
  // but we can get away with it by wrapping it all in a div
  return (
    <ul>
      <li>A</li>
      <li>B</li>
      <li>C</li>
    </ul>
  )
}

ReactDOM.render(
<MyApp/>,
document.getElementById('root')
);
