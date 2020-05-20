import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from "react-router-dom"
import { addNewPost } from "./redux/state.js"
import { updatePost } from "./redux/state.js"
import './index.css';
import App from './App';

export let rerenderTree = (state) => {
	ReactDOM.render(
		<BrowserRouter>
		  <React.StrictMode>
		    <App appState={state} addNewPost={addNewPost} updatePost={updatePost} />
		  </React.StrictMode>
	  </BrowserRouter>,
	  document.getElementById('root')
	);
}
