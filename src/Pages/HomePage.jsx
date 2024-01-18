import '../StyleSheets/HomePage.css'
import linkedin from '../assets/linkedin.webp';
import mail from '../assets/mail.webp';
import insta from '../assets/instagram.png';

const HomePage = (props) => {
    return (
        <div className="homeContainer">
            <div className="socialContainer">
                <div className="smallLine"></div>
                <div className="social-icons">
                    <img src={linkedin} alt=""/>
                    <img src={mail} alt=""/>
                    <img src={insta} alt=""/>
                </div>
                <div className="longLine"></div>
            </div>
            <div className="homePageContent">
                <div className="homePageTextContent">
                    <h1 className="homePageTextContentTitle1">SENIOR <br/>
                    <span className="homePageTextContentTitle2">COMPUTER SCIENCE</span> <br/>
                    STUDENT.</h1>
                    <button className="homePageButton">My Resume</button>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
