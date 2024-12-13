import '../StyleSheets/Projects.css'

const ComingSoon = () => {
    return(
        <div className="projects">
            <h1 className="primary-title">COMING SOON.</h1>
            <div className='coming-soon-container'>
                <img src="./CapsuleCizikli.png" alt="" className='capsule-image'/>
                <div className='coming-soon-text-container'>
                    <h2>Your Virtual Wardrobe</h2>
                    <p>Stilist, (formerly known as Capsule) is your virtual wardrobe. Get outfit recommendations for every occasion, track your outfits daily and view your wardrobe usage with our app!</p>
                    <a style={{marginTop: "0px"}} href={"https://www.stilist.ai/"} className="homePageButton">VISIT WEBSITE</a>
                </div>
            </div>
            <div className='coming-soon-container'>
                <div className='coming-soon-text-container'>
                    <h2>Your Daily Guidance - Tarot Reader</h2>
                    <p>Get daily guidance combined with various reading types!</p>
                    <a style={{marginTop: "0px"}} href={"https://diviniaai.github.io/DiviniaAI/"} className="homePageButton">VISIT WEBSITE</a>
                </div>
                <img src="./tarot-main-page.png" alt="" className='tarot-image' />
                <img src="./tarot-reading-page.png" alt="" className='tarot-image'/>
            </div>
        </div>
    )
}

export default ComingSoon