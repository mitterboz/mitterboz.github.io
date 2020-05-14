import React from 'react';

const Info = (props) => {
	return (
		<div className="info">
			<ul>
				<li>About: {props.about}</li>
				<li>Birthday: {props.birthday}</li>
				<li>Male/Female: {props.sex}</li>
				<li>Education: {props.edu}</li>
				<li>Country: {props.country}</li>
			</ul>
		</div>
	)
}
export default Info