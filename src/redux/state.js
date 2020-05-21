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
	addNewPost() {
		let newPost = {
			name: 'Dihali4',
			id: 4,
			messages: this.state.newPostText.text
		}
		this.state.users.UserData.push(newPost);
		this.state.newPostText.text = '';
		this.callSubscriber(this.state);
	},
	updatePost(pos) {
	this.state.newPostText.text = pos;
	this.callSubscriber(this.state);
	},
	updateMessage(mes) {
		this.state.users.newMessages = mes;
		this.callSubscriber(this.state);
	},
	addMessage() {
		let newMess = {
			name: 'Valerian',
			id: 4,
			messages: this.state.users.newMessages
		}
		this.state.users.UserData.push(newMess)
		this.updateMessage('')
	},
	subscribe(observer) {
		this.callSubscriber = observer
	},
	callSubscriber() {
		alert('No observer')
	}
}

window.store = store
export default store