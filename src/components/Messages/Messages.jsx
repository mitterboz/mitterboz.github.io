import React from 'react'
import "./Messages.modules.css"
import {NavLink} from "react-router-dom"
import {BrowserRouter, Route} from "react-router-dom"
import User1 from "./User1/User1.jsx"
import User2 from "./User2/User2.jsx"
import User3 from "./User3/User3.jsx"
import { actionAddMessage } from "../../redux/state.js"
import { actionUpdateMessage } from "../../redux/state.js"

const UserLinks = (props) => {
	let path = "/messages/" + props.id
	return (
		<li><NavLink to={path}>{props.name}</NavLink></li>
	)
}

const Messages = (props) => {
let users = props.userNameDialogs.map(user => <UserLinks name={user.name} id={user.id}/>)

let newMess = React.createRef()

let sendMess = () => {
	props.dismatch(actionAddMessage());
}

let updateMess = () => {
	let messageTxt = newMess.current.value;
	props.dismatch(actionUpdateMessage(messageTxt));
	newMess.current.value = props.newMessage;
}

	return (
		<div className="messagesBlock">
			<div className="usersNames">
				<ul className="nameList">
					{users}
				</ul>
			</div>
			<div className="usersDialogs">
				<Route path='/messages/1' render={ () => <User1 messages={props.messages}/> } />
				<Route path='/messages/2' render={ () => <User2 messages={props.messages}/> } />
				<Route path='/messages/3' render={ () => <User3 messages={props.messages}/> } />
				<textarea onChange={ updateMess } ref={ newMess } value={props.newMessage} ></textarea>
				<button onClick={ sendMess } >send mess</button>
			</div>
		</div>
	)
}
export default Messages