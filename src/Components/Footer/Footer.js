import './Footer.css';
import github from './icons/github.svg';
import wordpress from './icons/wordpress.svg';
import email from './icons/email.svg';
import linkedin from './icons/linkedin.svg';

const Footer = () => {

    return (
        <footer id="footer">
            <div className="contacts">
                <a href="https://www.linkedin.com/in/edilchristian/" target="_blank" rel="noreferrer"> <img src={linkedin} alt="linkedin icon" /> </a>
                <a href="https://github.com/edilchristian" target="_blank" rel="noreferrer"> <img src={github} alt="github icon" /> </a>
                <a href="mailto:edil.christian@rutgers.edu"> <img src={email} alt="email icon" /> </a>
                <a href="https://edilchristian.wordpress.com/" target="_blank" rel="noreferrer"> <img src={wordpress} alt="wordpress icon" /> </a>
            </div>
        
            <div class="copyright">
                <p>2022 Edil Christian</p>
            </div>
        </footer>
    );
}

export default Footer;