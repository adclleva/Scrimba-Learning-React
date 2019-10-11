import React from "react"
import ReactDOM from "react-dom"

/*
  ReactDOM.render() takes two arguments
  the first one is what we want to render,
  while the second one is where do I want to render it
*/

// JSX
// You can two separate JSX elements in the first arguments

ReactDOM.render(<h1>Hello World</h1> , document.getElementById("root"));

var myNewP = document.createElement("p");
myNewP.innerHTML = "This is a paragraph."
