const ADD_MESSAGE = "ADD-MESSAGE"
const UPDATE_MESSAGE = "UPDATE-MESSAGE"
const ADD_NEW_POST = "ADD-NEW-POST"
const UPDATE_POST = "UPDATE-POST"

let store = {
	state: {
		messages: {
			dialogMessage: [
				{message: 'Hello USERELLO 1! ', id: 1},
				{message: 'How are you? ', id: 2},
				{message: 'Some news here... ', id: 3}
			]
		},
		newPostText: {
			text: ''
		},
		users: {
			UserData: [{name:'Nikolay', id: 1, messages: "Good for you!" }, {name: 'Slava', id: 2, messages: "Perfect bro" }, {name: 'Kazemir', id: 3, messages: "Its amaizing!" }],
			newMessages: ''
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
				name: 'Dihali4',
				id: 4,
				messages: this.state.newPostText.text
			}
			this.state.users.UserData.push(newPost);
			this.state.newPostText.text = '';
			this.callSubscriber(this.state);
		}else if(action.type === "UPDATE-POST") {
			this.state.newPostText.text = action.post;
			this.callSubscriber(this.state);
		}else if(action.type === "ADD-MESSAGE"){
			let newMess = {
				name: 'Valerian',
				id: 4,
				messages: this.state.users.newMessages
			}
			this.state.users.UserData.push(newMess)
			this.state.users.newMessages = ""
			this.callSubscriber(this.state);
		}else if(action.type === "UPDATE-MESSAGE"){
			this.state.users.newMessages = action.message;
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

export const actionUpdateMessage = (messageTxt) => 
	({ type: UPDATE_MESSAGE, message: messageTxt })

export const actionAddPost = () => ({ type: ADD_NEW_POST })

export const actionUpdatePost = (postTxt) => 
	({ type: UPDATE_POST, post: postTxt })

window.store = store
export default store