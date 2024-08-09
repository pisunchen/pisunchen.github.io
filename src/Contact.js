import mail from './images/mail.png'
import linkedin from './images/linkedin.png'
import github from './images/github.png'

function Contact() {
    return (
        <div className="icon-container">
            <a href="mailto:pisun.c.l@gmail.com">
                <img className="icon" src={mail} alt="Mail" />
            </a>
            <a href="https://www.linkedin.com/in/pisun" target='_blank'>
                <img className="icon" src={linkedin} alt="LinkedIn" />
            </a>
            <a href="https://github.com/pisunchen" target='_blank'>
                <img className="icon" src={github} alt="GitHub" />
            </a>
        </div>
    );
}

export default Contact;
