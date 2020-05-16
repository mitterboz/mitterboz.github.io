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

	return (
		<div className="messagesBlock">
			<div className="usersNames">
				<ul className="nameList">
					{users}
				</ul>
			</div>
			<div className="usersDialogs">
				<Route path='/messages/1' render={ () => <User1 dialogs={props.mess}/> } />
				<Route path='/messages/2' component={User2} />
				<Route path='/messages/3' component={User3} />
			</div>
		</div>
	)
}
export default Messages