import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from "react-router-dom"
import './index.css';
import App from './App';
import store from "./redux/state.js"
import * as serviceWorker from './serviceWorker';

let renderTree = (state) => {
	ReactDOM.render(
		<BrowserRouter>
		  <React.StrictMode>
		    <App store={ store } />
		  </React.StrictMode>
	  </BrowserRouter>,
	  document.getElementById('root')
	);
}
renderTree(store);
store.subscribe(renderTree);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
