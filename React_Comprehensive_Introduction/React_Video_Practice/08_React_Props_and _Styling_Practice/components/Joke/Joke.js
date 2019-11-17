// One LAST time in this course, set up a React app from scratch
// Render an <App /> component
  // App should be in its own file
// App should render 5 <Joke /> components
  // Each Joke should receive a "question" prop and a "punchLine" prop
  // and render those however you'd like
  
// EXTRA CREDIT:
// Some jokes are only a punch line with no question:
  // E.g.: "It’s hard to explain puns to kleptomaniacs because they always take things literally."
// If you don't pass in a "question" prop, how might you make it only show the punchline instead?
// Spend time practicing the style of your Joke component
import React, { Component } from 'react'
function Joke(props) {
    return (
        <div>
            
            {/* This is how you make a comment in JSX and also you have to put in an object 
                within an object when you're passing things in JSX, like this style for example*/}
            <p style={{display: props.question ? "block" : "hide"}}>
                Question: {props.question}  
            </p>
            <p style={{color: !props.question && "gray"}}>
                Punchline: {props.punchline}
            </p>
        </div>
    );
}

export default Joke