import React from 'react'
import "../../../Navbar/FriendsOnline/FriendsOnline.css"

const FriendAvatar1 = (props) => {
	return (
	    <div className="friendsOnline-view view1">
        <p>{props.name}</p>
        <img src="data:image/jpeg;base64,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" />
        <br /><span>{props.status}</span>
      </div>
		)
}
export default FriendAvatar1