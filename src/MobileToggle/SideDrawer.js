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
                <li><a href='/'>Home</a></li>
                <li><a href='/'>About</a></li>
                <li><a href='/'>Skills</a></li>
                <li><a href='/'>Projects</a></li>
                <li><a href='/'>Contact</a></li>
            </ul>
        </nav>
    );
};

export default SideDrawer;