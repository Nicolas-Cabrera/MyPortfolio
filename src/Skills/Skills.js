import './Skills.css';
import React from 'react';
import js from '../images/js.png';
import react from '../images/react.png';
import node from '../images/node.png';
import github from '../images/github.png';
import html from '../images/html.png';
import css from '../images/css.png';

const Skills = () => {
    return (
        <>
            <div className='section' id='skills'>
                <h1 className='title'>Skills</h1>
                <div className=''>
                    <div className='skills-row'>
                        <img className='skill-item' src={js} alt='js' />
                        <img className='skill-item' src={react} alt='react' />
                        <img className='skill-item' src={node} alt='node' />
                    </div>
                    <div className='skills-row'>
                        <img className='skill-item' src={github} alt='github' />
                        <img className='skill-item' src={html} alt='html' />
                        <img className='skill-item' src={css} alt='css' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills;