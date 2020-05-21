import React from 'react';
import "../stylesForDialogs.css"


const User1 = (props) => {
let dialogsElems = props.users.map(mess => <p>{ mess.messages + ' - User ID : '+ props.users[0].id }</p>)
	return (
			<div className="usersDialogs">
				{dialogsElems}
			</div>
		)
}
export default User1