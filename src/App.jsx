import React, {useState} from 'react';
import './App.css';
import Color from './components/Colors'
import Name from './components/Text'

function App() {
  const [color, setColor] = useState('');

  function changeColor(e){
    const name = e.target.value;
    setColor(name);
  }
  
  return (
    <main>
      <h1 style={{color: color}}>Hello World!</h1>
      <button onClick={changeColor} value="pink">pink</button>
      <button onClick={changeColor} value="yellow">yellow</button>
      <button onClick={changeColor} value="blue">blue</button>
      <button onClick={changeColor} value="green">green</button>
      <button onClick={changeColor} value="brown">brown</button>
      <button onClick={changeColor} value="purple">purple</button>
    </main>
  );

}

export default App;