import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from "react-router-dom"
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let dialogMessage = [
  {message: 'Hello USERELLO 1!', id: 1},
  {message: 'How are you?', id: 2},
  {message: 'Im fine thanks and you', id: 3}
]

let UserData = [{name:'Fedor', id: 1}, {name: 'Marat', id: 2}, {name: 'Kazemir', id: 3}]

ReactDOM.render(
	<BrowserRouter>
	  <React.StrictMode>
	    <App dialogs={dialogMessage} users={UserData} />
	  </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
