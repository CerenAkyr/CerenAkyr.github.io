import '../StyleSheets/About.css'


const languages = [
    {name: "React", color: "#61DBFB"},
    {name: "Vue", color: "#4DB33D"},
    {name: "Spring Boot", color: "#339933"},
    {name: "React Native", color: "#000000"},
    {name: "Flutter", color: "#7952B3"},
    {name: "JavaScript", color: "#F0DB4F"},
    {name: "Python", color: "#3776AB"},
    {name: "C++", color: "#00599C"},
    {name: "Java", color: "#007396"},
    {name: "HTML", color: "#E34F26"},
    {name: "CSS", color: "#1572B6"},
    {name: "TypeScript", color: "#F29111"},
    {name: "Swift", color: "#F05032"},
];
const About = () => {
    return (
        <div className="about" id="about">
            <h1 className="primary-title">ABOUT ME.</h1>
            <div className="aboutBlock">
                <h2>WORK EXPERIENCE</h2>
                <p>□ Frontend Developer at <a href="https://niologic.com/">Niologic </a> (Nov 2024 - Present)</p>
                <p>□ Frontend Developer at <a href="https://www.datascope.ai/">DataScope.ai</a> (Nov 2023 - Mar 2024)</p>
                <p>□ Front-end Developer Intern at <a href="https://www.mobileaction.co/">MobileAction</a> (2023)</p>
                <p>□ Software Developer Intern at <a href="https://www.t2.com.tr/">T2 Software</a> (2023)</p>
                <p>□ Front-end Developer at <a href="">BrewUpp Company</a> (2023)</p>
                <p>□ R&D Data Science Intern at <a href="https://www.arcelik.com.tr/">Arçelik Global</a> (2022)</p>
            </div>
            <div className="aboutBlock">
                <h2>EDUCATION</h2>
                <p>□ <a href="https://w3.bilkent.edu.tr/bilkent/">RWTH Aachen University</a> (Oct 2024 - Aug
                    2026)</p>
                <p>M.sc. in Data Science</p>
                <p>□ <a href="https://w3.bilkent.edu.tr/bilkent/">İhsan Doğramacı Bilkent University</a> (Sep 2020 - Jun
                    2024)</p>
                <p>B.S. in Computer Engineering</p>
            </div>
            <div className="aboutBlock">
                <h2>TECHNICAL SKILLS</h2>
                <div className="tagContainer">
                    {languages.map((language) => (
                        <div className="aboutTag" key={language.name}>
                            <div className="circle" style={{backgroundColor: language.color}}></div>
                            {language.name}
                        </div>
                    ))}
                </div>
            </div>
            <div className="aboutBlock">
                <h2 style={{paddingBottom: '0'}}>CLUBS</h2>
                <h3>BILKENT TEA CLUB PRESIDENT</h3>
                <p>□ Organizing informative events and events with guest speakers </p>
                <p>□ Arranging sponsorship agreements </p>
                <p>□ You can check out our fun events by clicking <a
                    href="https://www.instagram.com/bilkentteaclub/">here</a> :)</p>

                <h3>Ucuncukat Journal Author</h3>
                <p>□ Writing articles about technology and arts</p>
                <p>□ Ucuncukat Journal marketing team member </p>
                <p>□ You can check out more by clicking <a href="https://www.instagram.com/ucuncukatdergi/">here</a></p>

                <h3>Active Member of Operational Research Club</h3>
                <p>□ Information Technology team member</p>
                <p>□ Arranging sponsorship agreements </p>
                <p>□ You can check out more by clicking <a href="https://www.instagram.com/orbilkent/">here</a></p>
            </div>
            <div className="aboutBlock">
                <h2>HOBBIES</h2>
                <p>□ I really enjoy dancing. Currently, my new favorite is salsa. I have taken salsa courses for two
                    years. </p>
                <p>□ I also play classical guitar, electric guitar, and violin. </p>
                <p>□ I am a huge bookworm. I like reading a lot! :) </p>
            </div>
        </div>
    )
}

export default About
