import React from 'react';
import "../stylesForDialogs.css"

const User3 = (props) => {

let dialogsElems = props.users.map(mess => <p>{ mess.messages + ' - User ID : '+ props.users[2].id }</p>)

	return (
			<div className="usersDialogs">
				{dialogsElems}
			</div>
		)
}
export default User3