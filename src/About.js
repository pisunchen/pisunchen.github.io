import pisunPhoto from './images/profile.png';

function About() {
    return (
        <div className="container" id="about">
            <div id="bio">
                <div className="heading">
                    <span className="highlight">Hello!</span>
                    </div>
                        <p>
                            My name is Pisun, and I am a recent graduate from the University of British Columbia with a degree in Computer Science and Business. I'm excited about pursuing a career that lets me work on innovative projects with great people.
                            <br></br>
                            <br></br>
                            I’m passionate about being open-minded and embracing new challenges and opportunities. Recently, my internships allowed me to explore various roles in both tech and business, enhancing my problem-solving and adaptability skills.
                            <br></br>
                            <br></br>
                            Outside of work, I enjoy biking, hiking, lifting weights, and trying out new restaurants around the city.
                            <br /><br />
                        </p>
            </div>
            <div id="photo">
                <img src={pisunPhoto} alt="pisun photo" />
            </div>
        </div>
    );
}

export default About;
