import '../StyleSheets/Projects.css'
import ProjectDisplayCard from "../Components/ProjectDisplayCard.jsx";

const projects = [
    {
        title: "Capsule",
        description: "Smart Wardrobe",
        gif: "../gifs/capsule.gif",
        filter: "frontend",
        id: 1,
        paragraphs: [
            "Discover, plan, and analyze your outfits effortlessly with Capsule.",
            "Get personalized recommendations, coordinate with friends for special occasions, and track your daily style choices.",
            "Participated as the UI/UX designer and frontend developer."
        ],
        technologies: ["React Native", "Swift"],
        website: "https://www.capsule.style/",
        github: "",
    },
    {
        title: "DataScope",
        description: "No-Code ML Models",
        gif: "../gifs/datascope.gif",
        filter: "frontend",
        id: 2,
        paragraphs: [
            "Implemented the platform and the landing page.",
            "Participated as a UI/UX designer and frontend developer."
        ],
        technologies: ["React", "CSS", "JavaScript"],
        website: "https://www.datascope.ai/",
        github: "",
    },
    {
        title: "ActionKit",
        description: "UI Library",
        gif: "../gifs/actionKit.gif",
        filter: "frontend",
        id: 3,
        paragraphs: [
            "Implemented the avatar component for MobileAction’s UI library.",
            "Conducted UI library component testing using Vitest",
            "Worked closely with a cross-functional team as a frontend developer."
        ],
        technologies: ["Vue.js", "TypeScript", "CSS"],
        website: "",
        github: "",
    },
    {
        title: "BrewUpp",
        description: "Linking Coffee Lovers",
        gif: "../gifs/brewuppGif.gif",
        filter: "frontend",
        id: 4,
        paragraphs: [
            "Designed and implemented the company's landing page.",
            "Participated as the UI/UX designer and frontend developer."
        ],
        technologies: ["React", "JavaScript","CSS"],
        website: "",
        github: "",
    },
    {
        title: "HR Tool",
        description: "Tool For Leave Requests",
        gif: "../gifs/hr-tool.PNG",
        filter: "frontend",
        id: 5,
        paragraphs: [
            "Simplify the leave request process with a user-friendly interface, allowing employees to submit and manage their leave requests effortlessly.",
            "Enhance communication and coordination among team members by providing a shared calendar feature. ",
            "Participated as a full-stack developer."
        ],
        technologies: ["React", "TypeScript", "Spring Boot", "CSS"],
        website: "",
        github: "https://github.com/CerenAkyr/T2-HR-Tool-For-Leave",
    },
    {
        title: "PharmVille",
        description: "Online Pharmacy System",
        gif: "../gifs/pharmville.PNG",
        filter: "frontend",
        id: 6,
        paragraphs: [
            "An e-commerce platform for patients to purchase medicine, allowing distributors to manage stock levels and doctors\n" +
            "to prescribe medications.",
            "Participated as a requirements engineer and frontend developer."
        ],
        technologies: ["React", "JavaScript", "CSS"],
        website: "",
        github: "https://github.com/guezey/PharmVille",
    },
    {
        title: "Erasmus Manager",
        description: "Manage erasmus applications",
        gif: "../gifs/erasmus.PNG",
        filter: "frontend",
        id: 7,
        paragraphs: [
            "A website to manage Erasmus applications at Bilkent University.",
            "Participated as a requirements engineer and frontend developer."
        ],
        technologies: ["React", "CSS", "JavaScript"],
        website: "",
        github: "",
    },
    {
        title: "TeamLink",
        description: "Managing Sports Teams",
        gif: "../gifs/teamlink.PNG",
        filter: "frontend",
        id: 8,
        paragraphs: [
            "A social media platform that helps organize the life of sports teams",
            "Participated as a full-stack developer."
        ],
        technologies: ["Java"],
        website: "",
        github: "",
    },
    ];
/*
<div className="projectsFilterTag">All</div>
                <div className="projectsFilterTag">FRONTEND</div>
                <div className="projectsFilterTag">ML & AI</div>
 */
const Projects = () => {
    return (
        <div className="projects" id="projects">
            <h1 className="primary-title">PROJECTS.</h1>
            <div className="projectsFilterHolder">

            </div>
            <div className="projectsHolder">
                {projects.map((project) => (
                    <ProjectDisplayCard title={project.title} description={project.description} gif={project.gif} github={project.github} filter={project.filter} key={project.id} paragraphs={project.paragraphs} website={project.website} technologies={project.technologies}/>
                ))}
            </div>
        </div>
    )
}

export default Projects
