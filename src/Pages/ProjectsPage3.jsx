import '../StyleSheets/ProjectsLayout.css';
import '../StyleSheets/ProjectsLayout2.css';
import ProjectsLogo from "../Components/ProjectsLogo.jsx";
import TitleComponent from "../Components/TitleComponent.jsx";

const projectsFrontend = [
    {link: '../../2048.png', title: "ActionKit"},
    {link: '../../2048.png', title: "Erasmus Manager"},
    {link: '../../public/2048.png', title: "DataScope"},
    {link: '../../2048.png', title: "PharmVille"},
    {link: '../../2048.png', title: "Capsule"},
    {link: '../../2048.png', title: "Hr Tool"},
    {link: '../../public/2048.png', title: "BrewUpp"},
];

const projectML = [
    {link: '../../2048.png', title: "Early Warning"},
    {link: '../../2048.png', title: "2048 Research"},
    {link: '../../2048.png', title: "Stanford Dogs"},
    {link: '../../2048.png', title: "MINST Dataset"},
    {link: '../../2048.png', title: "img recog"},
];
const ProjectsPage3 = () => {
    return (
        <div className="project">
            <TitleComponent title={"All Projects"} />
            <div className="allProjectsContainer">
                <div className="selectProjectsContainer">
                    {projectsFrontend.map((project, index) => (
                        <ProjectsLogo key={index} link={project.link} title={project.title} />
                    ))}
                </div>
                <div className="displayProjectsContainer">
                    a
                </div>
            </div>

        </div>
    );
}

export default ProjectsPage3;
