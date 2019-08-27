import React from 'react';
import logo from './logo.svg';
import './App.css';
import Palette from './components/Palette';
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <Palette selected="red" />
      <Counter value={0} color="red" />
    </div>
  );
}

export default App;
