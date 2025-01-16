import React from 'react'
import { useState, useEffect } from 'react'
import './DigitalClock.css'

function DigitalClock() {
    const [time, setTime] = useState(new Date());
    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);
    function formatTime() {
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let ampm = hours >= 12 ? 'PM' : 'AM';
        const seconds = time.getSeconds();
        hours = hours % 12 || 12;
        return `${hours}:${minutes}:${seconds} ${ampm}`;
    }
  return (
    <div className='clock-container'>
        <div className='clock'>
            <span>{formatTime()}</span>
        </div>

    </div>
  )
}

export default DigitalClock