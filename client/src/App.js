import logo from './logo.svg';
import './App.css';
import Home from './pages/home';
import Navbar from './components/Navbar'
import About from './pages/about.js'
import Work from './pages/work.js';
import Contact from './pages/contact.js';


function App() {
  return (
     <>
         <Navbar/>
          <Home/>
          <About/>
          <Work/>
          <Contact/>
          <Footer/>

     </>
  );
}

export default App;
