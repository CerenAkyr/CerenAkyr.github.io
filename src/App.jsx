import './App.css'
import HomePage from "./Pages/HomePage.jsx";
import Navbar from "./Pages/Navbar.jsx";
import ProjectsPage from "./Pages/ProjectsPage.jsx";
import Projects from "./Pages/Projects.jsx";

function App() {

  return (
    <div className="app">
        <Navbar />
        <div className="wrapper">
            <HomePage />
            <Projects />
        </div>
    </div>
  )
}

export default App
