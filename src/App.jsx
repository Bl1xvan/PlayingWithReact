import React, {useState, useRef} from 'react';
import './App.css';
import Color from './components/Colors'
import Name from './components/Text'

function App() {
  const [color, setColor] = useState('');
  const newColor = useRef();

  function changeColor(){
    const name = newColor.current.value;
    if(name === '') return;
    setColor(name);
    newColor.current.value = null;
  }
  
  return (
    <main>
      <h1 style={{color: color}}>Hello World!</h1>
      <input ref={newColor} type='text' />
      <button onClick={changeColor}>Change Color!</button>
    </main>
  );

}

export default App;