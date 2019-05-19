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

function isPangram(string){
  this.string = string.toLowerCase();
  
    
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
  
      var sentence = this.string;
  
      for (var i = 0; i < sentence.length; i++) {
  
  
          var num = alphabet.indexOf(sentence[i]);
  
          if (sentence[i] == alphabet[num]) {
              alphabet = alphabet.replace(sentence[i], '') 
          } 
  
      }
  
      if (alphabet.length == 0) {
          return true;    
      }
      else {
          return false;
      }
  
  
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
