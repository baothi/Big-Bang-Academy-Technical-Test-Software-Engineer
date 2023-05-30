import React from 'react';
import '../App.css';
import {Counter} from '../features/counter/Counter';

const NumberCounter = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
      </header>
    </div>
  )
}

export default NumberCounter