import React, {useState} from 'react'

function UpdateObject() {
    const [car, setCar] = useState({
        make: 'Ford',
        model: 'Mustang',
        year: 2019,
        color: 'blue'
    })
    function handleYearChange(e) {
        setCar(c => ({...c, year: e.target.value})) // Upater function
    }
    function handleMakeChange(e) {
        setCar(c => c =  ({...c, make: e.target.value}))
    }
    function handleModelChange(e) {
        setCar({...car, model: e.target.value})
    }
    function handleColorChange(e) {
        setCar({...car, color: e.target.value})
    }
  return (
    <div>
        <p>Your Favorite car is : {car.year} {car.make} {car.model} {car.color}</p>
        <input type="text" value={car.make} onChange={handleMakeChange}/> <br />
        <input type="text" value={car.model} onChange={handleModelChange}/><br />
        <input type="number" value={car.year} onChange={handleYearChange}/><br />
        <input type="text" value={car.color} onChange={handleYearChange}/><br />
    </div>
  )
}

export default UpdateObject