// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';
import Projects from './Pages/Projects';

function App() {
  return (
    <div className="App">

    <Navbar/>
    <Home/>
    <Projects/>
    </div>
  );
}

export default App;
