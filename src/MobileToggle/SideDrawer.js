import React from 'react'
import './SideDrawer.css'

const SideDrawer = props => {
    let drawerClasses = 'sidedrawer';
    if(props.show) {
        drawerClasses = 'sidedrawer open';
    }
    return (
        <nav className={drawerClasses}>
            <ul>
                <li><a href='/#home'>Home</a></li>
                <li><a href='/#about'>About</a></li>
                <li><a href='/#skills'>Skills</a></li>
                <li><a href='/#projects'>Projects</a></li>
                <li><a href='/#contact'>Contact</a></li>
            </ul>
        </nav>
    );
};

export default SideDrawer;