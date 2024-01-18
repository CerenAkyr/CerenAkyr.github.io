import '../StyleSheets/ProjectDisplayCard.css'
import capsule from '../assets/datascope.gif'

const ProjectDisplayCard = (props) => {

    return (
        <div className="displayCardContainer">
            <img src={capsule} alt="Project Display Card"/>
            <div className="displayCardText">
                <h3>{props.title}</h3>
                <p>Project Description</p>
            </div>
        </div>
    )
}

export default ProjectDisplayCard
