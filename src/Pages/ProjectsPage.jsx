import '../StyleSheets/ProjectsLayout.css';
import ProjectsPage1 from "./ProjectsPage1.jsx";
import ProjectsPage2 from "./ProjectsPage2.jsx";
import ProjectsPage3 from "./ProjectsPage3.jsx";

const ProjectsPage = () => {
    return (
        <div className="projectContainer">
            <ProjectsPage1 />
            <ProjectsPage2 />
            <ProjectsPage3 />
        </div>
    );
}

export default ProjectsPage;