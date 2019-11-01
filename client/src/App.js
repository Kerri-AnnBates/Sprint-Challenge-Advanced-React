import React, {useState} from 'react';
import './App.css';
import CardList from './component/CardList';
import { useDarkMode } from './hooks/useDarkMode';

const App = () => {
  const [darkMode, setdarkMode] = useDarkMode(false);


  const toggleDarkMode = () => {
    setdarkMode(!darkMode);
  }
  return (
    <div className="App">
      <CardList toggleDarkMode={toggleDarkMode} />
    </div>
  )
}

export default App;
