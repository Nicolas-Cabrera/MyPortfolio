import React from 'react';
import './Home.css'
import Typewriter from 'typewriter-effect';

const Home = () => {
    return (
        <div className='content' id='home'>
            <h1>Nicolas Cabrera</h1>
            <h1>
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter.typeString('London based Full-Stack Developer!')
                            .callFunction(() => {
                                console.log('String typed out!');
                            })
                            .pauseFor(2000)
                            .callFunction(() => {
                                console.log('All strings were deleted');
                            })
                            .start();
                    }}
                />
            </h1>
        </div>
    );
}
export default Home;