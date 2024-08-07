import './navigation.css'
import resume from './resume/Pisun_Chen_Lai_Resume.pdf'

function Landing() {
    return (
        <div class="nav">
            <div class="nav-title">
                <a href="#landing">Pisun Chen Lai</a>
            </div>
            <div class="nav-links">
                <a href="#about">about</a>
                <a href="#projects">projects</a>
                <a href= {resume} target="_blank">resume</a>
            </div>
        </div>
    );
}

export default Landing;
