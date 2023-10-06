import React from 'react'
import './Styles.css'
import bg from '../assets/images/proj.jpg'

import weather from '../assets/images/earth-earthday.gif'
import shoes from '../assets/images/shoes.gif'
import jim from '../assets/images/jim.gif'
import bird from '../assets/images/fbird.gif'
import calculator from '../assets/images/calc.gif'

export const Projects = () => {
    return (
        <div className='projects'>
            <div>
                <div className='overProject' ></div>
                <img className='projectBg' src={bg} alt="" />
                <h1 className='project' >PROJECTS</h1>
            </div>
            <div className="pContainer">
                <div className="pCard">
                    <div className='pName'>
                        <h3 className='pTitle'>
                            Weather App
                        </h3>
                        <p className='pDesc'>
                            A web application built using ReactJS which interacts with the users and fetches the weather information and displays it on the screen for the user. <br /> <br /> Ps.  Fully responsive website and works on every device.
                        </p>
                        <br /><br /><br />
                        <a style={{ color: 'inherit', textDecoration: 'inherit' }} href="https://herumbnagpal.github.io/Weather-App/" target='_blank' rel="noopener noreferrer">Click here for the demo. </a>
                    </div>
                    <div className="pScreenshot">
                        <img src={weather} height="300px" alt="" />
                    </div>
                </div>

                <div className="pCard">
                    <div className='pName'>
                        <h3 className='pTitle'>
                            Sneaker Website
                        </h3>
                        <p className='pDesc'>
                            A web application built using ReactJS which is basically made for sneakerheads to add new shoes to their collection. <br /> <br /> Ps. not a responsive website. Works best on PC only but in the future it will be fully responsive.
                        </p>
                        <br /><br /><br />
                        <a style={{ color: 'inherit', textDecoration: 'inherit' }} href="https://herumbnagpal.github.io/sneaker/" target='_blank' rel="noopener noreferrer">Click here for the demo. </a>

                    </div>
                    <div className="pScreenshot">
                        <img src={shoes} height="300px" alt="" />
                    </div>
                </div>

                <div className="pCard">
                    <div className='pName'>
                        <h3 className='pTitle'>
                            Gym Website
                        </h3>
                        <p className='pDesc'>
                            A web application built for a gym. The website shows all the training programs and the membership details for a new member wanting to join the community. <br /> <br /> Fully responsive webite and works on every device.
                        </p>
                        <br /><br /><br />
                        <a style={{ color: 'inherit', textDecoration: 'inherit' }} href="https://herumbnagpal.github.io/jim/" target='_blank' rel="noopener noreferrer">Click here for the demo. </a>

                    </div>
                    <div className="pScreenshot">
                        <img src={jim} height="300px" width="300px" alt="" />
                    </div>
                </div>
                <div className="pCard">
                    <div className='pName'>
                        <h3 className='pTitle'>
                            Flappy Bird
                        </h3>
                        <p className='pDesc'>
                            An arcade game built using C++ library called raylib. The user can control the movement of the character and aims to increase the score . <br /><br /> Ps. I am still trying to figure out a way to deploy this game on a webite
                        </p>
                        <br /><br /><br />
                        <a style={{ color: 'inherit', textDecoration: 'inherit' }} href="https://github.com/HerumbNagpal/Flappy-Bird" target='_blank' rel="noopener noreferrer">Click here for the source file. </a>

                    </div>
                    <div className="pScreenshot">
                        <img src={bird} height="300px" width="300px" alt="" />
                    </div>
                </div>
                <div className="pCard">
                    <div className='pName'>
                        <h3 className='pTitle'>
                            Calculator App
                        </h3>
                        <p className='pDesc'>
                            A mobile application which can be used to perform mathematical calulations. <br/> The app was developed in React-Native framework along with Redux.
                        </p>
                        <br /><br /><br />
                        <a style={{ color: 'inherit', textDecoration: 'inherit' }} href="/apk/myCalculator.apk"  download='myCalculator.apk'>Click here to download and install the apk . </a>
                    </div>
                    <div className="pScreenshot">
                        <img src={calculator} height="300px" width="300px" alt="" />
                    </div>
                </div>
                <h2> More to come....</h2>
            </div>
        </div>
    )
}
