import React from 'react'
import { useState } from 'react'

function ColorPicker() {
  const [color, setColor] = useState("#FFFFFFF");
  function handleColorChange(e) {
    setColor(e.target.value);
  }
  return (
    <div className='color-picker-constainer'>
        <h1>ColorPicker</h1>
        <div className='color-display' style={{backgroundColor:color}}>
            <p>Selected Color : {color}</p>    
        </div>
        <label>Select a color</label>
        <input type="color" value={color} onChange={handleColorChange} />
    </div>
  )
}

export default ColorPicker