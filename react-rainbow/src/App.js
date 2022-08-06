//import logo from './logo.svg';
import './App.css';
import React from 'react'
import {useState} from 'react'
import ColorBlock from './ColorBlock'
import ColorForm from './ColorForm'


function App() {
 
  

  let [colors, setColors] = useState(['violet', 'blue', 
  'lightblue', 'green', 'yellow', 
  'orange', 'red'])
  
  

  let colorMap = colors.map((color, i)=>{
    return(
      <ColorBlock key ={i} color={color}/>
      
    )
  })
  let addColor = (newColor)=>{
    setColors([...colors, newColor])
  }
  return (
    <div className="App">
      {colorMap}
      <ColorForm addColor={addColor}/>
    </div>
  )
  
}

export default App;
