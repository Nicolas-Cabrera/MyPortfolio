import React from 'react';
import './Projects.css';
import kodflix from '../images/kodflix.JPG';
import footapp from '../images/footapp.JPG';
import ludo from '../images/ludo.jpg';
import weatherapp from '../images/weatherapp.jpg';
import calculator from '../images/calculator.jpg';
import bookingSystem from '../images/bookingsystem.jpg';


const Projects = () => {
    return (
        <div>
            <div className='section' id='projects'>
                <h1 className='title'>Projects</h1>
                <div className='project-sec'>
                    <div className='proj-item'>
						<h2>Kodflix</h2>
						<img src={kodflix} alt='kodflix' />
                    </div>
					<div className='proj-item'>
						<h2>Footapp</h2>
                        <img src={footapp} alt='Footapp' />
                    </div>
                    <div className='proj-item'>
						<h2>Calculator</h2>
						<img src={calculator} alt='Calculator' />
                    </div>
                </div>
                <div className='project-sec'>
                    <div className='proj-item'>
						<h2>Weather App</h2>
						<img src={weatherapp} alt='WeatherApp' />
                    </div>
                    <div className='proj-item'>
						<h2>Booking System</h2>
						<img src={bookingSystem} alt='BookingSystem' />
                    </div>
                    <div className='proj-item'>
						<h2>Ludo Game</h2>
						<img src={ludo} alt='Ludo' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;