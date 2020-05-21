import React from 'react';
import "../stylesForDialogs.css"

const User2 = (props) => {

let dialogsElems = props.users.map(mess => <p>{ mess.messages + ' - User ID : '+ props.users[1].id }</p>)
	return (
			<div className="usersDialogs">
				{dialogsElems}
			</div>
		)
}
export default User2