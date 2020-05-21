import React from 'react';
import Comments from "./Comments.jsx"
import "./Posts.modules.css"

let OldPost = (props) => {
	return (
		<div className="oldPost">
			<h5>{ props.messages }</h5>
		</div>
	)
}

const Posts = (props) => {

	let addNew = () => {
		props.addNewPost();
	}

	let update = () => {
		props.updatePost(newPost.current.value);
		newPost.current.value = props.newPost;
	}

	let posts = props.users.map( mess => <OldPost messages={ mess.messages } /> )

	let newPost = React.createRef();

	return (
			<div className="mainPost">
				<h4>MY POST:</h4>
				<textarea onChange={ update } ref={ newPost } value={ props.newPost } ></textarea>
				<button onClick={ addNew } >add post</button>
				{ posts }
				<Comments name={props.users[0].name} message='Its good idea bro' />
				<Comments name={props.users[1].name} message='I think too man!' />
			</div>
		)
}
export default Posts