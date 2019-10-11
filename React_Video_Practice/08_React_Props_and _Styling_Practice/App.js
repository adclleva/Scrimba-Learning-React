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
import Joke from './components/Joke/Joke.js'

class App extends Component {
    render() {
        return (
          <div>
            <Joke 
              question="What’s the best thing about Switzerland?"
              punchline="I don’t know, but the flag is a big plus."
            />
            <Joke 
              punchline="It’s hard to explain puns to kleptomaniacs because they always take things literally."
            />
          </div>  
        );
    }
}

export default App
