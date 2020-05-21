import React from 'react';
import Header from './components/Header/Header.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import MainContent from './components/MainContent/MainContent.jsx'
import Footer from './components/Footer/Footer.jsx'
import Messages from "./components/Messages/Messages.jsx"
import News from "./components/News/News.jsx"
import Friends from "./components/Friends/Friends.jsx"
import Apps from "./components/Apps/Apps.jsx"
import Music from "./components/Music/Music.jsx"
import Options from "./components/Options/Options.jsx"
import Other from "./components/Other/Other.jsx"
import Photo from "./components/Photo/Photo.jsx"
import Video from "./components/Video/Video.jsx"
import {BrowserRouter, Route} from "react-router-dom"


function App(props) {
  return (
    <div className="App">
      <Header />
      <Navbar friends={props.store.state.friends} />
      <Route path='/main' render={ () => <MainContent newPost={props.store.state.newPostText.text} users={props.store.state.users.UserData} addNewPost={props.store.addNewPost.bind(props.store)} updatePost={ props.store.updatePost.bind(props.store)} /> } />
      <Route path='/messages' render={ () => <Messages addMessage={props.store.addMessage.bind(props.store)} updateMessage={props.store.updateMessage.bind(props.store)} users={props.store.state.users.UserData} userMess={props.store.state.users.newMessages} /> } />
      <Route path='/news' component={News} />
      <Route path='/friends' component={Friends} />
      <Route path='/apps' component={Apps} />
      <Route path='/music' component={Music} />
      <Route path='/options' component={Options} />
      <Route path='/other' component={Other} />
      <Route path='/photo' component={Photo} />
      <Route path='/video' component={Video} />
      <Footer />
    </div>
  );
}

export default App;
