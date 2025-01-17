import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './store.js';

function Counter() {
    const count  = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();
  return (
    <div style={{textAlign:'center', marginTop:'50px'}}>
        <h1>Redux Counter App</h1>
        <h2>{count}</h2>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  )
}

export default Counter