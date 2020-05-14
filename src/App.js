import React from 'react';
import Header from './components/Header/Header.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import MainContent from './components/MainContent/MainContent.jsx'
import Footer from './components/Footer/Footer.jsx'


function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
