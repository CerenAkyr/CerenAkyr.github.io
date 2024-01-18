import './ProjectsComponentStyles.css'
const ProjectsLogo = (props) => {
  return (
    <div className="projectsLogoContainer">
        <div className="imgLimit">
            <img src={props.link} alt="" className="projectsLogoImg"/>
        </div>
        <p>{props.title}</p>
    </div>
  );
}

export default ProjectsLogo;
