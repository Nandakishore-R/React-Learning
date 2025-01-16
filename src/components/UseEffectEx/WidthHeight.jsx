import React from 'react'
import { use } from 'react';
import { useState, useEffect } from 'react'

function WidthHeight() {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    function handleResize() {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        console.log('Event listener added');
        return () => {
            window.removeEventListener('resize', handleResize);
            console.log('Event listener removed');
        };
    }, []);

    useEffect(() => {
        document.title = `Width: ${width} Height: ${height}`;
    }, [width, height]);

  return (
    <>      
        <p>Window width : {width}px</p>
        <p>Window height : {height}px</p>
    </>
  )
}

export default WidthHeight