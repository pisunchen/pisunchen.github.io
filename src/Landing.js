import React from 'react';
import pisunPhoto from './images/profile.png';
import RotatingWords from './RotatingWords';

function Landing() {
    return (
        <div className="container-landing" id="landing">
            {/* <div className="heading">
                <span className="highlight">Hello World!</span>
            </div> */}
            <RotatingWords></RotatingWords>
        </div>
    );
}

export default Landing;
