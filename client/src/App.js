import React, {useState} from 'react';
import './App.css';
import Home from './pages/home';
import Navbar from './components/Navbar'
import About from './pages/about.js'
import Work from './pages/work.js';
import Contact from './pages/contact.js';
import Resume from './pages/resume.js';

function Portfolio() {
  const [currentPage, handlePageChange] = useState('Home');

  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return <Home />;
      case 'About Me':
        return <About />;
      case 'My Work':
        return <Work />;
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

export default Portfolio;
