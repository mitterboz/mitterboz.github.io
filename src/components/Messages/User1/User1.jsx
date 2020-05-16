import React from 'react';
import "../stylesForDialogs.css"


const User1 = (props) => {
let dialogsElems = props.dialogs.map(mess => mess.message)
	return (
			<div className="usersDialogs">
				<p>{dialogsElems}</p>
			</div>
		)
}
export default User1