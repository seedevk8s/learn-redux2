import React from 'react';
import logo from './logo.svg';
import './App.css';
import Palette from './components/Palette';

function App() {
  return (
    <div className="App">
      <Palette selected="red" />
    </div>
  );
}

export default App;
