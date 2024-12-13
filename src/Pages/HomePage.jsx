import '../StyleSheets/HomePage.css'
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';
import cv from '../assets/pdf/ceren-akyar-no-info.pdf';

const HomePage = () => {

    return (
        <div className={'homeContainer'} id="home">
            <div className="socialContainer">
                <div className="smallLine"></div>
                <div className="social-icons">
                    <a href="https://www.linkedin.com/in/ceren-akyar/"><img src={linkedin} alt="" /></a>
                    <a href="https://github.com/CerenAkyr"><img src={github} alt=""/></a>
                </div>
                <div className="longLine"></div>
            </div>
            <div className="homePageContent">
                <div className="homePageTextContent">
                    <h1 className="homePageTextContentTitle1">MASTER'S STUDENT <br/>
                    <span className="homePageTextContentTitle2">in DATA SCIENCE</span> <br/>
                    @RWTH AACHEN</h1>
                    <a href={cv} download="ceren-akyar-cv.pdf" className="homePageButton">MY RESUME</a>
                </div>
            </div>
        </div>    );
}

export default HomePage;
