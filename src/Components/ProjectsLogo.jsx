import './ProjectsComponentStyles.css'
const ProjectsLogo = (props) => {
  return (
    <div className="projectsLogoContainer">
        <div className="imgLimit">
            <img src={props.link} alt="" className="projectsLogoImg"/>
        </div>
        <p>Projects</p>
    </div>
  );
}

export default ProjectsLogo;
