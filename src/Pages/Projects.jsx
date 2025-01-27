import '../StyleSheets/Projects.css'
import ProjectDisplayCard from "../Components/ProjectDisplayCard.jsx";
import {useEffect, useState} from "react";
import FerrisPage from './FerrisPage.jsx';

const projects = [
    {
        title: "Stock Checker",
        description: "Suitable with Various Shopping Websites",
        gif: "../gifs/stockChecker.webp",
        filter: "BACKEND",
        id: 0,
        paragraphs: [
            "Open source for common use with Turkish descriptions.",
        ],
        technologies: ["Python"],
        website: "",
        github: "https://github.com/CerenAkyr/ZaraStockChecker",
    },
    {
        title: "Capsule",
        description: "Smart Wardrobe",
        gif: "../gifs/capsule.gif",
        filter: "FRONTEND",
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
        filter: "FRONTEND",
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
        filter: "FRONTEND",
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
        filter: "FRONTEND",
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
        filter: "FRONTEND BACKEND",
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
        title: "Early Warning System",
        description: "For Arçelik Global",
        gif: "../gifs/arcelik.jpg",
        filter: "ML",
        id: 9,
        paragraphs: [
            "Implemented an early warning system for refrigerator malfunctions.",
            "Arçelik Global services currently use the project to detect malfunctions."
        ],
        technologies: ["Python"],
        website: "https://www.arcelik.com.tr/",
        github: "",
    },
    {
        title: "Custom CNN",
        description: "Stanford Dogs Dataset",
        gif: "../gifs/dogs_sf.png",
        filter: "ML",
        id: 10,
        paragraphs: [
            "Preprocessing images from the Stanford Dogs Dataset.",
            "Implemented a custom CNN model to classify dog breeds.",
        ],
        technologies: ["Python"],
        website: "",
        github: "",
    },
    {
        title: "AI Algotihms Applied to 2048",
        description: "Could AI beat you at the 2048 game?",
        gif: "../gifs/2048.gif",
        filter: "ML",
        id: 13,
        paragraphs: [
            "Researched performances of Min-Max Tree Search, Monte Carlo Tree Search (MCTS), and Double Deep Q-Network (DDQN)—applied to the 2048 game. ",
            "Selected as the best project."
        ],
        technologies: ["Python"],
        website: "",
        github: "https://github.com/cs461-project/2048",
    },
    {
        title: "PharmVille",
        description: "Online Pharmacy System",
        gif: "../gifs/pharmville.PNG",
        filter: "FRONTEND",
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
        title: "TeamLink",
        description: "Managing Sports Teams",
        gif: "../gifs/teamlink.PNG",
        filter: "FRONTEND",
        id: 8,
        paragraphs: [
            "A social media platform that helps organize the life of sports teams",
            "Participated as a full-stack developer."
        ],
        technologies: ["Java"],
        website: "",
        github: "",
    },

    {
        title: "Erasmus Manager",
        description: "Manage erasmus applications",
        gif: "../gifs/erasmus.PNG",
        filter: "FRONTEND",
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
        title: "MNIST Dataset Analysis",
        description: "PCA Analysis, logistic regression.",
        gif: "../gifs/mnist.webp",
        filter: "ML",
        id: 12,
        paragraphs: [
            "MNIST Dataset PCA Analysis applied.",
            "Logistic regression and hyperparameter tuning applied."
        ],
        technologies: ["Python"],
        website: "",
        github: "https://github.com/CerenAkyr/MNIST-Dataset-Analysis",
    },
    {
        title: "CIFAR-100 Inpainting",
        description: "Designing a CNN Model",
        gif: "../gifs/CIFAR-100.webp",
        filter: "ML",
        id: 11,
        paragraphs: [
            "Designed and trained a convolutional neural network model for the image inpainting task.",
            "Participated as a full-stack developer."
        ],
        technologies: ["Python"],
        website: "",
        github: "https://github.com/CerenAkyr/CIFAR-100-Inpainting",
    },
    {
        title: "RoboCon Website",
        description: "Web Design Course Project",
        gif: "../gifs/robocon.PNG",
        filter: "FRONTEND",
        id: 14,
        paragraphs: [
            "Utilized visual hierarchy to highlight key elements, guiding users through the content in a logical and engaging manner.",
            "Color Palette and Typography, Responsive Design, and Client Collaboration were main focuses."
        ],
        technologies: ["HTML", "CSS", "JavaScript"],
        website: "",
        github: "https://github.com/CerenAkyr/web-design-gra210-project",
    },
    ];

const projectFilters = ["All", "FRONTEND", "ML", "BACKEND"];

const Projects = () => {

    const [selectedFilter, setSelectedFilter] = useState("All");
    const [filteredProjects, setFilteredProjects] = useState(projects);
    useEffect(() => {
        setFilteredProjects(selectedFilter === "All" ? projects : projects.filter(project => project.filter.includes(selectedFilter)))
    }, [selectedFilter]);

    return (
        <div className="projects" id="projects">
            <h1 className="primary-title">PROJECTS.</h1>
            <FerrisPage />
            <h1 className="primary-title">& MANY MORE PROJECTS.</h1>
            <div className="projectsFilterHolder">
                {projectFilters.map((filter) => (
                    <div
                        key={filter}
                        className={`projectsFilterTag ${selectedFilter === filter ? "projectsFilterTagActive" : ""}`}
                        onClick={() => setSelectedFilter(filter)}
                    >
                        {filter === "ML" ? "ML & AI" : filter}
                    </div>
                ))}
            </div>
            <div className="projectsHolder">
                {filteredProjects.map((project) => (
                    <ProjectDisplayCard title={project.title} description={project.description} gif={project.gif} github={project.github} filter={project.filter} key={project.id} paragraphs={project.paragraphs} website={project.website} technologies={project.technologies}/>
                ))}
            </div>
        </div>
    )
}

export default Projects
