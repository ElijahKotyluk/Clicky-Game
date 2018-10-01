import React, { Component } from 'react'
import Header from "./components/Header"
import Wrapper from "./components/Wrapper"
import './App.css'

class App extends Component {

  state = {
  score: 0,
  highscore: 0
};

  render() {
    return (
      <div className="App">
        <Wrapper>
          <Header>Clicky Game</Header>
        </Wrapper>
      </div>
    );
  }
}

export default App;
