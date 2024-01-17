import '../StyleSheets/Projects.css'
import ProjectDisplayCard from "../Components/ProjectDisplayCard.jsx";

const Projects = () => {

    return (
        <div className="projects">
            <div className="projectsHolder">
                <ProjectDisplayCard title="description"/>
                <ProjectDisplayCard title="description"/>
            </div>
        </div>
    )
}

export default Projects
