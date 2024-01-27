import '../StyleSheets/Footer.css';
import email from '../assets/email.png';
const Footer = () => {
  return (
      <footer>
          <div className="footer-container">
              <div className="redLine" style={{margin: 'auto'}}></div>
              <img src="../../public/logo.png" style={{width: '50%', margin: 'auto'}} alt=""/>
              <div className="redLine" style={{margin: 'auto'}}></div>
          </div>
          <p>CEREN'S PORTFOLIO PAGE</p>
          <div className="social-icons-footer">
              <a href="#home" className="footer-link">HOME</a>
              <a href="#projects" className="footer-link">PROJECTS</a>
              <a href="#about" className="footer-link">ABOUT</a>
          </div>
          <img src={email} style={{width: '15%', margin: 'auto', paddingTop: '20px'}} alt=""/>
      </footer>
  )
}

export default Footer
