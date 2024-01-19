import '../StyleSheets/Projects.css'
import ProjectDisplayCard from "../Components/ProjectDisplayCard.jsx";

const projects = [
    {
        title: "Capsule",
        description: "Smart Wardrobe",
        gif: "../gifs/capsule.gif",
        github: "",
        filter: "frontend",
        id: 1,
    },
    {
        title: "DataScope",
        description: "No-Code ML Models",
        gif: "../gifs/datascope.gif",
        github: "",
        filter: "frontend",
        id: 2,
    },
    {
        title: "ActionKit",
        description: "UI Library",
        gif: "../gifs/actionKit.gif",
        github: "",
        filter: "frontend",
        id: 3,
    },
    {
        title: "BrewUpp",
        description: "Linking Coffee Lovers",
        gif: "../gifs/brewuppGif.gif",
        github: "",
        filter: "frontend",
        id: 4,
    },
    {
        title: "HR Tool",
        description: "Tool For Leave Requests",
        gif: "../gifs/hr-tool.PNG",
        github: "",
        filter: "frontend",
        id: 5,
    },
    {
        title: "PharmVille",
        description: "Online Pharmacy System",
        gif: "../gifs/pharmville.PNG",
        github: "",
        filter: "frontend",
        id: 6,
    },
    {
        title: "Erasmus Manager",
        description: "Manage erasmus applications",
        gif: "../gifs/erasmus.PNG",
        github: "",
        filter: "frontend",
        id: 7,
    },
    {
        title: "TeamLink",
        description: "Managing Sports Teams",
        gif: "../gifs/teamlink.PNG",
        github: "",
        filter: "frontend",
        id: 8,
    },
    ];

const Projects = () => {
    return (
        <div className="projects" id="projects">
            <h1 className="primary-title">PROJECTS.</h1>
            <div className="projectsHolder">
                {projects.map((project) => (
                    <ProjectDisplayCard title={project.title} description={project.description} gif={project.gif} github={project.github} filter={project.filter} key={project.id}/>
                ))}
            </div>
        </div>
    )
}

export default Projects
