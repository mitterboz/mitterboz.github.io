export const dialogReducer = (state, action) => {
	if(action.type === "ADD-MESSAGE"){
		let newPost = {
				post: state.text,
				id: 4
		}
			state.posts.push(newPost);
			state.text = '';
	}else if(action.type === "UPDATE-MESSAGE") {
			state.text = action.post;
	}
	return state
}