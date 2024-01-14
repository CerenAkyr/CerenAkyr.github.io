import '../StyleSheets/Navbar.css';

const Navbar = () => {
    return (
        <nav>
            <div className="navContainer">
                <div className="navTitle">
                    <h1>Ceren Akyar</h1>
                    <h1><span className={"kranky"}>‘s Website</span></h1>
                </div>
                <div className="navLinks">
                    <a href="#home">Home</a>
                    <a href="#projects">Projects</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
