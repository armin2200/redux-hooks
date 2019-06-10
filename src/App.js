import React from 'react';

import './App.css';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();
  const incrementHandler = () => {
    dispatch({ type: 'INCREMENT' });
  };
  const decrementHandler = () => {
    dispatch({ type: 'DECREMENT' });
  };
  return (
    <div className='App'>
      <h1>Counter:{counter}</h1>
      <button onClick={incrementHandler}>INCREMENT</button>
      <button onClick={decrementHandler}>DECREMENT</button>
    </div>
  );
}

export default App;
