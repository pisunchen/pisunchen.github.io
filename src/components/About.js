import React from 'react';
import pisunPhoto from '../images/profile.png';
import Contact from './Contact';

function About() {
    return (
        <div className="container" id="about">
            <div id="bio">
                <div className="heading">
                    <span className="highlight">Hello!</span>
                    </div>
                        <p>
                            I graduated from the <strong>University of British Columbia</strong> with a Bachelors of Commerce with a combined major in Computer Science and Business. I'm passionate about a career that involves working on innovative projects that bring talented people together to create meaningful impact.
                            <br></br>
                            <br></br>
                            I’m all about being open-minded and embracing new challenges and opportunities. My internships have given me the chance to explore diverse roles across tech and business, enhancing my problem-solving skills and adaptability.
                            <br></br>
                            <br></br>
                            When I'm not immersed in my work, you can find me biking, hiking, lifting weights, or trying new restaurants around Vancouver.
                            <br /><br />
                        </p>
            </div>
            <div id="photo">
                <img src={pisunPhoto} loading='lazy' alt="Pisun Chen profile photo" />
                <Contact></Contact>
            </div>
        </div>
    );
}

export default About;
