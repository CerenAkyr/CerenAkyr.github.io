import './ProjectsComponentStyles.css'
import flower1 from '../assets/flower1.svg'
import flower2 from '../assets/flower2.svg'
const TitleComponent = (props) => {
    return (
        <div className="flowerTitleHolder">
            <img src={flower1} alt=""/>
            <h1>{props.title}</h1>
            <img src={flower2} alt=""/>
        </div>
    );
}

export default TitleComponent;
