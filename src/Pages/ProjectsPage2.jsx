import '../StyleSheets/ProjectsLayout2.css';
import hrTool from '../assets/hrTool.svg';

const ProjectsPage2 = () => {
    return (
        <div className="hrToolContainer">
            <div className="hrToolBox">
                <img src={hrTool} alt=""/>
                <div className="hrTextBox">
                    <h2>HR Tool for Leave</h2>
                    <p>A streamlined leave management intuitive interface and a collaborative calendar feature.
                    </p>
                    <a href="">See More →</a>
                </div>
            </div>
        </div>
    );
}

export default ProjectsPage2;
