import React from 'react';
import {NavLink} from "react-router-dom"
import './Navbar.modules.css';

const Navbar = () => {
	return (
    <nav>
    <div className="avaWrapper">
      <img alt="Avatar" src="https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg" />
    </div>
      <ul>
        <li><NavLink to="/main">Main</NavLink></li>
        <li><NavLink to="/news">News</NavLink></li>
        <li><NavLink to="/messages">Messages</NavLink></li>
        <li><NavLink to="/friends">Friends</NavLink></li>
        <li><NavLink to="/video">Video</NavLink></li>
        <li><NavLink to="/photo">Photo</NavLink></li>
        <li><NavLink to="/music">Music</NavLink></li>
        <li><NavLink to="/apps">Apps</NavLink></li>
        <li><NavLink to="/other">Other</NavLink></li>
        <li><NavLink to="/options">Options</NavLink></li>
      </ul>
    </nav>
	);
}
export default Navbar;