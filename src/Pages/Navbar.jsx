import '../StyleSheets/Navbar.css';

const Navbar = () => {
    return (
        <nav>
            <div className="navContainer">
                <div className="navTitle">
                    <h1>Ceren Akyar</h1>
                </div>
                <div className="navLinks">
                    <a href="#home">HOME</a>
                    <a href="#projects">PROJECTS</a>
                    <a href="#about">ABOUT</a>
                    <a href="#contact">CONTACT</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
