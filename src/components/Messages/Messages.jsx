import React from 'react'
import "./Messages.modules.css"
import {NavLink} from "react-router-dom"
import {BrowserRouter, Route} from "react-router-dom"
import User1 from "./User1/User1.jsx"
import User2 from "./User2/User2.jsx"
import User3 from "./User3/User3.jsx"


const UserLinks = (props) => {
	let path = "/messages/" + props.id
	return (
		<li><NavLink to={path}>{props.name}</NavLink></li>
	)
}


const Messages = (props) => {

let users = props.users.map(user => <UserLinks name={user.name} id={user.id}/>)

let newMess = React.createRef()

let sendMess = () => {
	props.addMessage();
}

let updateMess = () => {
	props.updateMessage(newMess.current.value);
	newMess.current.value = props.userMess;
}

	return (
		<div className="messagesBlock">
			<div className="usersNames">
				<ul className="nameList">
					{users}
				</ul>
			</div>
			<div className="usersDialogs">
				<Route path='/messages/1' render={ () => <User1 users={props.users}/> } />
				<Route path='/messages/2' render={ () => <User2 users={props.users}/> } />
				<Route path='/messages/3' render={ () => <User3 users={props.users}/> } />
				<textarea onChange={ updateMess } ref={ newMess } value={props.userMess} ></textarea>
				<button onClick={ sendMess } >send mess</button>
			</div>
		</div>
	)
}
export default Messages