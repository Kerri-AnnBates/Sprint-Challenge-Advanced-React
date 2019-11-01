import React, {useState} from 'react';
import './App.css';
import CardList from './component/CardList';

function App() {
  const [data, setData] = useState([]);
  const [darkMode, setdarkMode] = useState('')

  function setDarkMode() {

  }
  return (
    <div className="App">
      <CardList />
    </div>
  )
}

export default App;
