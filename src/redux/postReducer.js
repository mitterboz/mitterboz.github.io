export const postReducer = (state, action) => {
	if(action.type === "ADD-NEW-POST"){
		let newPost = {
				post: state.text,
				id: 4
		}
			state.posts.push(newPost);
			state.text = '';
	}else if(action.type === "UPDATE-POST") {
			state.text = action.post;
	}
	return state
}