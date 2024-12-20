import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from "./Pages/HomePage.jsx";
import Navbar from "./Pages/Navbar.jsx";
import Projects from "./Pages/Projects.jsx";
import About from "./Pages/About.jsx";
import Footer from "./Pages/Footer.jsx";
import FerrisPage from "./Pages/FerrisPage.jsx";
import ComingSoon from './Pages/ComingSoon.jsx';

function App() {

  return (
    <div className="app">
        <Navbar />
        <div className="wrapper">
            <HomePage />
            <ComingSoon />
            <Projects />
            <About />
            <Footer />
        </div>
    </div>
  )
}

export default App
