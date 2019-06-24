import React from 'react';
import logo from './logo.svg';
import './App.css';

function goodVsEvil(good, evil){
  let goodArmy = good.split(' ');
  let evilArmy = evil.split(' ');
  let powerGood = goodArmy[0]*1+goodArmy[1]*2+goodArmy[2]*3+goodArmy[3]*3+goodArmy[4]*4+goodArmy[5]*10;
  let powerEvil = evilArmy[0]*1+evilArmy[1]*2+evilArmy[2]*2+evilArmy[3]*2+evilArmy[4]*3+evilArmy[5]*5+evilArmy[6]*10;
  if(powerEvil>powerGood){
  	return 'Battle Result: Evil eradicates all trace of Good';
  } else if(powerEvil<powerGood){
  	return 'Battle Result: Good triumphs over Evil';
  } else {
  	return 'Battle Result: No victor on this battle field';
  }
}

function allZeros (n) {
  var res = 0;
  for(var i=5; i<n; i*=)5
    res += Math.floor(n/i);
  return res;
}

function firstNonRepeatingLetter(s) {
  var arr = s.split('');
  var result = '';
  var ctr = 0;
 
  for (var x = 0; x < arr.length; x++) {
    ctr = 0;
 
    for (var y = 0; y < arr.length; y++) 
    {
      if (arr[x] === arr[y]) {
        ctr+= 1;
      }
    }
 
    if (ctr < 2) {
      result = arr[x];
      break;
    }
  }
  return result;
}


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
