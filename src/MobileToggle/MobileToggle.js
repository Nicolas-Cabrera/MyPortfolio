import React from 'react';
import './MobileToggle.css'


const MobileToggle = props => (
    <button className='toggle-button' onClick={props.click}>
        <div className='toggle-button-line' />
        <div className='toggle-button-line' />
        <div className='toggle-button-line' />
    </button>
);

export default MobileToggle;