import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  render() {
    return (
      <h1>From app.js</h1>
    )
  }
}

export default App;
