import React from 'react';
import './App.css';
import axios from 'axios';
import Display from './component/Display';
import Header from './component/Header';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/players')
    .then(res => {
      console.log(res);
      // Set data.
      this.setState({
        data: res.data
      })
    })
    .catch(err => {
      console.log(err);
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Display />
      </div>
    )
  }
}

export default App;
