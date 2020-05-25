import React from 'react';
import Comments from "./Comments.jsx"
import "./Posts.modules.css"
import { actionAddPost } from "../../../redux/state.js"
import { actionUpdatePost } from "../../../redux/state.js"


let OldPost = (props) => {
	return (
		<div className="oldPost">
			<h5>{ props.messages }</h5>
		</div>
	)
}

const Posts = (props) => {
	let newPost = React.createRef();

	let addNew = () => {
		props.dismatch(actionAddPost());
	}

	let update = () => {
		let postTxt = newPost.current.value
		props.dismatch(actionUpdatePost(postTxt));
		postTxt = props.newPost;
	}

	let posts = props.posts.map( mess => <OldPost messages={ mess.post } /> )

	return (
			<div className="mainPost">
				<h4>MY POST:</h4>
				<textarea onChange={ update } ref={ newPost } value={ props.newPost } ></textarea>
				<button onClick={ addNew } >add post</button>
				{ posts }
				<Comments name={props.comments[0].name} message={props.comments[0].text} />
				<Comments name={props.comments[1].name} message={props.comments[1].text} />
			</div>
		)
}
export default Posts