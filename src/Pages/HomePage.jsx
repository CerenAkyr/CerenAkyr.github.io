import '../StyleSheets/HomePage.css';
import ceren from '../assets/ceren.svg';
import arrow from '../assets/arrow.svg';

const HomePage = () => {
    return (
        <div className="container">
            <div className="left">
                <div className="textContainer">
                    <img src={arrow} alt="" className="arrowImg"/>
                    <div className="textBoxHome">
                        <h1>Senior Computer <br/>
                        Science Student.</h1>
                        <h2>and more...</h2>
                        <p>Discover more about me by my works and my journey</p>
                    </div>
                </div>
                <img src={ceren} alt="" className="profileImg"/>
            </div>

        </div>
    );
}

export default HomePage;
