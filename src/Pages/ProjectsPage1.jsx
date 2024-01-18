import '../StyleSheets/ProjectsLayout2.css';
import gif2048 from '../assets/2048gif.gif';
import capsule from '../assets/capsuleImg.svg';

function ProjectsPage1() {
    return (
        <div className="project">
            <div className="projectPage1">
                <div className="aiProject">
                    <div className="textBox">
                        <h1>2048 & AI Algorithms</h1>
                        <p>Min-Max Tree Search, MCTS, and DDQN <br/> applied
                            to the 2048 game. </p>
                        <p>Selected as the best project.</p>
                        <a href="">See More →</a>
                    </div>
                    <div className="gameBox">
                        <img src={gif2048} alt=""/>
                    </div>
                </div>
            </div>
            <div className="overlayCapsule">
                <div className="flexRow">
                    <img src={capsule} alt="Overlay Image" className="overlay-image"/>
                    <div className="capsuleBox">
                        <p className="capsuleBoxP1">Capsule</p>
                        <p className="capsuleBoxP2">Your Style, Your Way, Every Day</p>
                    </div>
                </div>
                <p className="capsuleBoxP2">Discover, plan, and analyze your outfits.</p>
                <a href="https://www.capsule.style/">Visit Website →</a>
            </div>
            <div className="projectPage2"></div>
            <div className="projectPage3"></div>
        </div>
    );
}

export default ProjectsPage1;
