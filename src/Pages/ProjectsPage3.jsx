import '../StyleSheets/ProjectsLayout.css';
import '../StyleSheets/ProjectsLayout2.css';
import ProjectsLogo from "../Components/ProjectsLogo.jsx";

const ProjectsPage3 = () => {
    return (
        <div className="project">
            <h1><span className="kranky">All Projects</span></h1>
            <div className="allProjectsContainer">
                <div className="selectProjectsContainer">
                    <ProjectsLogo link={'../../public/2048.png'} />
                    <ProjectsLogo link={'../../public/2048.png'} />
                </div>
                <div className="displayProjectsContainer">
                    a
                </div>
            </div>

        </div>
    );
}

export default ProjectsPage3;
