import '../StyleSheets/ProjectDisplayCard.css'
import {useState} from "react";


const ProjectDisplayCard = (props) => {

    return (
        <div className="displayCardContainer" >
            <img src={props.gif} alt="Project Display Card"/>
            <div className="displayCardText">
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>

        </div>
    )
}

export default ProjectDisplayCard
