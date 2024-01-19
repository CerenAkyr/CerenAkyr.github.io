import './App.css'
import HomePage from "./Pages/HomePage.jsx";
import Navbar from "./Pages/Navbar.jsx";
import Projects from "./Pages/Projects.jsx";
import About from "./Pages/About.jsx";
import Footer from "./Pages/Footer.jsx";
import FerrisPage from "./Pages/FerrisPage.jsx";

function App() {

  return (
    <div className="app">
        <Navbar />
        <div className="wrapper">
            <HomePage />
            <Projects />
            <FerrisPage />
            <About />
            <Footer />
        </div>
    </div>
  )
}

export default App
