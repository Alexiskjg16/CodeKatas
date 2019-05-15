import React from 'react';
import logo from './logo.svg';
import './App.css';


function getCount(str) {
  var vowelsCount = 0;
  const vowels = ["a", "e", "i", "o", "u"]
  
  for (let letter of str.toLowerCase()){
    if (vowels.includes(letter)) {
       vowelsCount++ }
       }
  
  
  return vowelsCount;
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
