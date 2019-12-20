import React from 'react';
import './Projects.css';
import kodflix from '../images/kodflix.JPG';
import footapp from '../images/footapp.JPG';

const Projects = () => {
    return (
        <>
            <div className='section' id='projects'>
                <h1 className='title'>Projects</h1>
                <div className='project-sec'>
                    <div className='proj-item'>
                        {/* <img classname='image' src={kodflix} alt='Kodflix'/> */}
                        <h2>Kodflix</h2>
                    </div>
                    <div className='proj-item'>
                        {/* <img classname='image' src={footapp} alt='Footapp'/> */}
                        <h2>Footapp</h2>
                    </div>
                    <div className='proj-item'>
                        <h2>Calculator</h2>
                    </div>
                </div>
                <div className='project-sec'>
                    <div className='proj-item'>
                        <h2>Weather App</h2>
                    </div>
                    <div className='proj-item'>
                        <h2>Booking System</h2>
                    </div>
                    <div className='proj-item'>
                        <h2>Ludo Game</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects;