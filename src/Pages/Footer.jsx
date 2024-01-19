import '../StyleSheets/Footer.css';
const Footer = () => {
  return (
      <footer>
          <p>CEREN AKYAR'S PORTFOLIO PAGE</p>
          <p>Email: cerenakyar@gmail.com</p>
          <div className="social-icons">
              <a href="#home" className="footer-link">HOME</a>
              <a href="#projects" className="footer-link">PROJECTS</a>
              <a href="#about" className="footer-link">ABOUT</a>
          </div>
      </footer>
  )
}

export default Footer
