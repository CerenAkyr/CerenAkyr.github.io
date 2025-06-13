import '../StyleSheets/Projects.css'

const ComingSoon = () => {
    return(
        <div className="projects">
            <h1 className="primary-title">COMING SOON: YOUR VIRTUAL WARDROBE!</h1>
            <div className='coming-soon-container'>
                <img src="./wishlist.png" alt="" className='capsule-image'/>
                <img src="./profile.png" alt="" className='capsule-image'/>
                <img src="./recs.png" alt="" className='capsule-image'/>
                <div className='coming-soon-text-container'>
                    <h2>Your Virtual Wardrobe</h2>
                    <p>Kombin is your virtual wardrobe. Get outfit recommendations for every occasion, shop fitting to your style and view your wardrobe usage with our app!</p>
                    <a style={{marginTop: "0px"}} href={"https://forms.gle/aGCuLAhAHkXt2CDq5"} className="homePageButton">JOIN BETA TESTING</a>
                </div>
            </div>
            <h1 className="primary-title">COMING SOON: TAROT APP.</h1>
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