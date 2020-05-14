import React from 'react';
import Comments from "./Comments.jsx"
import "./Posts.modules.css"

const Posts = () => {
	return (
			<div className="mainPost">
				<h4>Some post for long time lorem ipsum dolor eset</h4>
				<Comments name='Dima' message='Its good idea bro' />
				<Comments name='Nikola' message='I think too man!' />
			</div>
		)
}
export default Posts