import React, {useState} from 'react';
import './App.css';
import Home from './pages/home';
import Navbar from './components/Navbar'
import About from './pages/about.js'
import Portfolio from './pages/work.js';
import Contact from './pages/contact.js';
import Resume from './pages/resume.js';

function MyPortfolio() {
  const [currentPage, handlePageChange] = useState('Home');

  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return <Home />;
      case 'About Me':
        return <About />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact Me':
        return <Contact />;
      case 'My Resume':
        return <Resume />;
      default: 
        return <Home />
    }
  };
    
    return (
    <div>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      <div>{renderPage(currentPage)}</div>
    </div>
  );
}

export default MyPortfolio;
