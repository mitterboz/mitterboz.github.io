import React from 'react';
import Header from './components/Header.jsx'
import Sidebar from './components/Sidebar.jsx'
import MainContent from './components/MainContent.jsx'
import Footer from './components/Footer.jsx'


function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
