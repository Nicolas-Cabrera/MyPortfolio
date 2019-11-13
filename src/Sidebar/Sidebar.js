import React from 'react';
import './Sidebar.css';
import MobileToggle from '../MobileToggle/MobileToggle.js'

const Sidebar = props => (
    <header className='sideBar'>
        <nav className='sidebar-nav'>
            <div className='sidebar-Toggle-Button'>
                <MobileToggle click={props.drawerClickHandler} />
            </div>
            <div className='sidebar-items'>
                <ul>
                    <li><a href='/#home'>Home</a></li>
                    <li><a href='/#about'>About</a></li>
                    <li><a href='/#skills'>Skills</a></li>
                    <li><a href='/#projects'>Projects</a></li>
                    <li><a href='/#contact'>Contact</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default Sidebar;