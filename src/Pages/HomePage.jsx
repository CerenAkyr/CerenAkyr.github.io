import '../StyleSheets/HomePage.css'
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';
import insta from '../assets/instagram.png';
import cv from '../assets/pdf/ceren-akyar-cv.pdf';

const HomePage = () => {
    return (
        <div className="homeContainer" id="home">
            <div className="socialContainer">
                <div className="smallLine"></div>
                <div className="social-icons">
                    <a href="https://www.linkedin.com/in/ceren-akyar/"><img src={linkedin} alt="" /></a>
                    <a href="https://github.com/CerenAkyr"><img src={github} alt=""/></a>
                    <a href="https://www.instagram.com/ceren_akyr/"><img src={insta} alt=""/></a>
                </div>
                <div className="longLine"></div>
            </div>
            <div className="homePageContent">
                <div className="homePageTextContent">
                    <h1 className="homePageTextContentTitle1">SENIOR <br/>
                    <span className="homePageTextContentTitle2">COMPUTER SCIENCE</span> <br/>
                    STUDENT.</h1>
                    <a href={cv} download="ceren-akyar-cv.pdf" className="homePageButton">MY RESUME</a>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
