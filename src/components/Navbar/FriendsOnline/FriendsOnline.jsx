import React from 'react'
import "./FriendsOnline.css"
import FriendAvatar1 from "../../Friends/FriendsAvatar/FriendAvatar1/FriendAvatar1.jsx"
import FriendAvatar2 from "../../Friends/FriendsAvatar/FriendAvatar2/FriendAvatar2.jsx"
import FriendAvatar3 from "../../Friends/FriendsAvatar/FriendAvatar3/FriendAvatar3.jsx"

const FriendsOnline = (props) => {
	return (
	      <div className="friendsOnline">
	      <FriendAvatar1 name={props.friends.info.name[0]} status={props.friends.info.status[0]} />
	      <FriendAvatar2 name={props.friends.info.name[1]} status={props.friends.info.status[1]} />
	      <FriendAvatar3 name={props.friends.info.name[2]} status={props.friends.info.status[0]} />
      </div>
		)
}
export default FriendsOnline