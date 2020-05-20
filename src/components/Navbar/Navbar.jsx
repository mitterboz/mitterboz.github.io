import React from 'react';
import {NavLink} from "react-router-dom"
import './Navbar.modules.css';
import FriendsOnline from "./FriendsOnline/FriendsOnline.jsx"

const Navbar = (props) => {
	return (
    <nav>
    <div className="avaWrapper">
      <img alt="Avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSA_gKMXuJzPwnkus3yU7PByp9pwMZK4Sqz5LvhHkW5SZmfoxEZ&usqp=CAU" />
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
      <FriendsOnline friends={props.friends} />
    </nav>
	);
}
export default Navbar;