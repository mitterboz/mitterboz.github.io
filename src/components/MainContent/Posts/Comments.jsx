import React from 'react';

const Comments = (props) => {
	return (
		<div>
			<p>{props.name}</p>
			<img alt="avaComment" className="commentAva" src="https://img.freepik.com/free-vector/golden-bird_1195-336.jpg?size=338&ext=jpg" />
			{props.message}
			<button>send</button>
		</div>
		)
}
export default Comments