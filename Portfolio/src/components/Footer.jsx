import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHippo } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faSquareXTwitter, faSquareGithub } from '@fortawesome/free-brands-svg-icons'


export const Footer = () => {
  return (
    <div>
       <footer className="footer">
      
        <a href="mailto:ezeakaluejudejnr@gmail.com" className="footer__link">ezeakaluejudejnr@gmail.com</a>
        <ul className="social-list">
                
            <li className="social-list__item">
                <a className="social-list__link" href="https://t.co/bW4MitRv2C">
                <i className="fa-brands fa-x-twitter"><FontAwesomeIcon icon={faSquareXTwitter} /></i>
                </a>
            </li>

            <li className="social-list__item">
                <a className="social-list__link" href="https://www.linkedin.com/in/ezeakalue-jude-7aa953262">
                <i className="fa-brands fa-linkedin"><FontAwesomeIcon icon={faLinkedin} /></i>
                </a>
            </li>

            <li className="social-list__item">
                <a className="social-list__link" href="https://github.com/Stainlez">
                <i className="fa-brands fa-square-github"><FontAwesomeIcon icon={faSquareGithub} /></i>
                </a>
            </li>
        </ul>

        
    </footer>
    </div>
  )
}
