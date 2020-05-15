import React from 'react'
import "./Messages.modules.css"
import {NavLink} from "react-router-dom"

const UserLinks = (props) => {
	let path = "/messages/" + props.id
	return (
		<li><NavLink to={path}>{props.name}</NavLink></li>
	)
}

const UserDialogs = (props) => {
	return (
		<p>{props.message}</p>
	)
}

const Messages = () => {
	return (
		<div className="messagesBlock">
			<div className="usersNames">
				<ul className="nameList">
					<UserLinks name="Ibragim" id="1"/>
					<UserLinks name="Volodimir" id="2"/>
					<UserLinks name="Kazemir" id="3"/>
				</ul>
			</div>
			<div className="usersDialogs">
				<UserDialogs message="Hello"/>
				<UserDialogs message="How are you"/>
				<UserDialogs message="What are you doing here"/>
			</div>
		</div>
	)
}
export default Messages