import '../StyleSheets/Footer.css';
import email from '../assets/email.png';
const Footer = () => {
  return (
      <footer>
          <div className="footer-container">
              <div className="redLine" style={{margin: 'auto'}}></div>
              <p>CEREN'S PORTFOLIO PAGE</p>
              <div className="redLine" style={{margin: 'auto'}}></div>
          </div>

          <div className="social-icons-footer">
              <a href="#home" className="footer-link">HOME</a>
              <a href="#projects" className="footer-link">PROJECTS</a>
              <a href="#about" className="footer-link">ABOUT ME</a>
          </div>
          <img src={email} className="emailFooter" alt=""/>
      </footer>
  )
}

export default Footer
