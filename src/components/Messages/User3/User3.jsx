import React from 'react';
import "../stylesForDialogs.css"

const User3 = (props) => {

let dialogsElems = props.messages.map(mess => <p>{ mess.message}</p>)

	return (
			<div className="usersDialogs">
				{dialogsElems}
			</div>
		)
}
export default User3