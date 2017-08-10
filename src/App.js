import React, { Component } from 'react';
import './App.css';

import BracketValidator from './BracketValidator'
import { getErrorMessage } from './checkBrackets'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BracketValidator inspector={getErrorMessage} />
      </div>
    );
  }
}

export default App;

