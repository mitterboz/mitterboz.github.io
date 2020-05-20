import { rerenderTree } from "../rerender.js"

let state = {
	messages: {
		dialogMessage: [
			{message: 'Hello USERELLO 1! ', id: 1},
			{message: 'How are you? ', id: 2},
			{message: 'Some news here... ', id: 3}
		]
	},
	newPostText: {
		text: 'AAA'
	},
	users: {
		UserData: [{name:'Nikolay', id: 1, messages: "Good for you!" }, {name: 'Slava', id: 2, messages: "Perfect bro" }, {name: 'Kazemir', id: 3, messages: "Its amaizing!" }]
	},
	friends: {
		info: {
			name: ['Eygen', 'Mavr', 'Katty'],
			status: ['online', 'offline'],
			view: [1, 2, 3]
		}
	}
}

export let addNewPost = (messaga) => {
	let newPost = {
		name: 'Mihali4',
		id: 4,
		messages: messaga
	}
	state.users.UserData.push(newPost);
	rerenderTree(state);
}

export let updatePost = (pos) => {
	state.newPostText.text = pos;
	rerenderTree(state);
}

export default state