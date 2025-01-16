import React from 'react'
import { useState } from 'react'
function MyComponent() {
    const [name, setName] = useState('Nandu');
    const [age, incrementAge] = useState(0);
    const [isEmployed, isSetEmployed] = useState(false);

    const updateName = () => {
        setName('Nandu Changed');
    }
    const updateAge = () => {
        incrementAge(age + 1);
    }
    const toggleIsEmployed = () => {
        isSetEmployed(!isEmployed);
    }

  return (
    <div>
        <p> Name : {name}</p>
        <button onClick={updateName}>Set Name</button>
        <p> Age : {age}</p>
        <button onClick={updateAge}>Increment Age</button>
        <p> Is employed : {isEmployed ? "Yes" : "No" }</p>
        <button onClick={toggleIsEmployed}>Toggle Status</button>
    </div>
  )
}

export default MyComponent