import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "mobx-react";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Store from "./store/Store";
window.store = Store;

ReactDOM.render(
    <Provider store={Store}>
        <App />
    </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
