import React from 'react';
import logo from './logo.svg';
import './App.css';
import {inject, observer} from "mobx-react";


const App = inject('store')(observer((props) => {
  const { counter, inc, dec } = props.store.CounterStore;
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
            <div>Counter: { counter }</div>
          <button onClick={inc}>INC</button>
            <button onClick={dec}>DEC</button>
        </header>
      </div>
  );
}))

export default App;
