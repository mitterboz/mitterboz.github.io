import React from 'react';
import Info from "./Info/Info.jsx"
import Posts from "./Posts/Posts.jsx"
import './MainContent.modules.css';

const MainContent = () => {
	return (
		<div className="mainContent">
			<Info about="someAbout" birthday="xx/xx/xxxx" sex="male" edu="highSchool" country="BLR"/>
			<Posts />
		</div>
	);
}
export default MainContent;