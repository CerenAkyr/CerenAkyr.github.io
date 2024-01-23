import '../StyleSheets/ProjectDisplayCard.css'
import '../StyleSheets/About.css'
import {useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const colorArr = [
    "#61DBFB",
    "#4DB33D",
    "#7952B3", "#F0DB4F",
    "#E34F26",
    "#F29111",
];
const ProjectDisplayCard = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="displayCardContainer">
            <img src={props.gif} alt="Project Display Card"/>
            <div className="displayCardText" onClick={handleShow}>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>
            <Modal show={show} onHide={handleClose} className="modalContainer">
                <Modal.Header closeButton>
                    <Modal.Title><h1>{props.title}</h1></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {props.paragraphs && props.paragraphs.length > 0 &&
                        props.paragraphs.map((paragraph) => (
                            <p>{paragraph}</p>
                        ))
                    }
                    <h3>Technologies</h3>
                    <div className="tagContainerModal">
                        {props.technologies.map((language, index) => (
                            <div className="aboutTag" key={language}>
                                <div className="circle" style={{backgroundColor: colorArr[index]}}></div>
                                {language}
                            </div>
                        ))}
                    </div>
                    {props.website &&
                        <h3>Website</h3>
                    }
                    {props.website &&
                        <a href={props.website}>{props.website}</a>
                    }
                    {props.github &&
                    <h3>GitHub</h3>
                    }
                    {props.github &&
                        <a href={props.github}>{props.github}</a>
                    }
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default ProjectDisplayCard
