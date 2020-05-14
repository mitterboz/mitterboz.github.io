import React from 'react';
import './Navbar.modules.css';

const Navbar = () => {
	return (
    <nav>
    <div className="avaWrapper">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR3h8_zD-GskSXJmJchCBALXYtbVTDu2_6K0FyjUcvosTAUfdww&usqp=CAU" />
    </div>
      <ul>
        <li><a href="#">Main</a></li>
        <li><a href="#">News</a></li>
        <li><a href="#">Messages</a></li>
        <li><a href="#">Friends</a></li>
        <li><a href="#">Video</a></li>
        <li><a href="#">Photo</a></li>
        <li><a href="#">Music</a></li>
        <li><a href="#">Apps</a></li>
        <li><a href="#">Other</a></li>
        <li><a href="#">Options</a></li>
      </ul>
    </nav>
	);
}
export default Navbar;