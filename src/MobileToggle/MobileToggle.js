import React from 'react';
import arrowButton from '../images/toggle.png';
import './MobileToggle.css'


const MobileToggle = props => (
    <button className='toggle-button' onClick={props.click}>
        <img src={arrowButton} alt='Arrow button'></img>
    </button>
);

export default MobileToggle;