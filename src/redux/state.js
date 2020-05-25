const ADD_MESSAGE = "ADD-MESSAGE"
const UPDATE_MESSAGE = "UPDATE-MESSAGE"
const ADD_NEW_POST = "ADD-NEW-POST"
const UPDATE_POST = "UPDATE-POST"

let store = {
	state: {

		messages: {
			dialogMessage: [
				{message: 'Hello USERELLO ! ', id: 1},
				{message: 'How are you? ', id: 2},
				{message: 'Some news here... ', id: 3}
			],
			newMessage: {
				text: ""
			},
			userNameDialogs: [
			{name: 'Viktor', id: 1},
			{name: 'Sebastian', id: 2},
			{name: 'Isakiil', id: 3}
			]
		},

		main : {
			posts: [
			{post: 'I try to scream', id: 1},
			{post: 'but my head was under water', id: 2},
			{post: 'LOL, its funny!', id: 3}
		],
			newPostText: {
				text: ''
			},
			comments: [
				{name: 'William', text: 'good song bro', id: 1},
				{name: 'Alfred', text: 'once more plz', id: 2},
				{name: 'Platon', text: 'good for u, good', id: 3}
			]
		},
		friends: {
			info: {
				name: ['Eygen', 'Mavr', 'Katty'],
				status: ['online', 'offline'],
				view: [1, 2, 3]
			}
		}
	},
	dismatch(action) {
		if(action.type === "ADD-NEW-POST"){
			let newPost = {
				post: this.state.main.newPostText.text,
				id: 4
			}
			this.state.main.posts.push(newPost);
			this.state.main.newPostText.text = '';
			this.callSubscriber(this.state);
		}else if(action.type === "UPDATE-POST") {
			this.state.main.newPostText.text = action.post;
			this.callSubscriber(this.state);
		}else if(action.type === "ADD-MESSAGE"){
			let newMess = {
				message: this.state.messages.newMessage.text,
				id: 4
			}
			this.state.messages.dialogMessage.push(newMess)
			this.state.messages.newMessage.text = ""
			this.callSubscriber(this.state);
		}else if(action.type === "UPDATE-MESSAGE"){
			this.state.messages.newMessage.text = action.message;
			this.callSubscriber(this.state);
		}
	},
	subscribe(observer) {
		this.callSubscriber = observer
	},
	callSubscriber() {
		alert('No observer')
	}
}

export const actionAddMessage = () => ({ type: ADD_MESSAGE })

export const actionAddPost = () => ({ type: ADD_NEW_POST })

export const actionUpdateMessage = (messageTxt) => 
	({ type: UPDATE_MESSAGE, message: messageTxt })

export const actionUpdatePost = (postTxt) => 
	({ type: UPDATE_POST, post: postTxt })

window.store = store
export default store