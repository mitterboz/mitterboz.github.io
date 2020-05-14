import React from 'react';
import './MainContent.modules.css';

const MainContent = () => {
	return (
		<div className="mainContent">
			<div className="info">
				<h3>Information:</h3>
				<h3>Birthday:</h3>
				<h3>Male/Female:</h3>
				<h3>Education:</h3>
				<h3>Country:</h3>
			</div>
			<div className="mainPost">
				<h3>Some post for long time</h3>
			</div>
		</div>
	);
}
export default MainContent;