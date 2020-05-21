import React from 'react';
import Info from "./Info/Info.jsx"
import Posts from "./Posts/Posts.jsx"
import './MainContent.modules.css';

const MainContent = (props) => {
	return (
		<div className="mainContent">
			<Info about="someAbout" birthday="xx/xx/xxxx" sex="male" edu="highSchool" country="BLR"/>
			<Posts newPost={props.newPost} users={props.users} dismatch={ props.dismatch } />
		</div>
	);
}
export default MainContent;