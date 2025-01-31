import '../StyleSheets/Navbar.css';

const Navbar = () => {
    return (
        <nav>
            <div className="navContainer">
                <div className="navTitle">
                    <a href="#home">
                        Ceren Akyar
                    </a>
                </div>
                <div className="navLinks">
                    <a href="#home">HOME</a>
                    <a href="#projects">PROJECTS</a>
                    <a href="#about">ABOUT ME</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
