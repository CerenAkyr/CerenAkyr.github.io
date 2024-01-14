import './App.css'
import HomePage from "./Pages/HomePage.jsx";
import Navbar from "./Pages/Navbar.jsx";
import ProjectsPage from "./Pages/ProjectsPage.jsx";

function App() {

  return (
    <div className="app">
        <Navbar />
        <div className="wrapper">
            <HomePage />
            <ProjectsPage />
        </div>
    </div>
  )
}

export default App
