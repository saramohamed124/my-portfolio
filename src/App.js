// import logo from './logo.svg';
import './App.css';
import {Routes,Route} from'react-router-dom'
import Navbar from './Components/Navbar/Navbar';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Skills from './Pages/Skills';
import Footer from './Pages/Footer';
import Whatsapp from './Components/Footer/Whatsapp';

function App() {
  return (
    <div className="App">

    <Navbar/>
    <Home/>
    <Projects/>
    <Skills/>
    <Contact/>
    <Footer/>
    <Whatsapp/>
    </div>
  );
}

export default App;
