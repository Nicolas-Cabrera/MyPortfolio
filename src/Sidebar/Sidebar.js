import React from 'react';
import './Sidebar.css';
import MobileToggle from '../MobileToggle/MobileToggle.js'

const Sidebar = props => (
    <header className='sidebar'>
            <nav className='sidebar-nav'>
                <div className='sidebar-Toggle-Button'>
                    <MobileToggle click={props.drawerClickHandler} />
                </div>
                <div className='sidebar-items'>
                <div className='logo'><a href=''>Nicolas Cabrera</a></div>
                    <ul>
                        <li><a href='/'>Home</a></li>
                        <li><a href='/'>About</a></li>
                        <li><a href='/'>Skills</a></li>
                        <li><a href='/'>Projects</a></li>
                        <li><a href='/'>Contact</a></li>
                    </ul>
                </div>
            </nav>
        </header>
);

export default Sidebar;