import React from 'react'
import './HeroSection.css'
import '../App.css'

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='video1.mp4' autoPlay loop muted />
            <div className='desc-container'>
                <h1 id='name'>Hello, I am Negar</h1>
                <p id='desc'>Front-end Web Developer</p>
            </div>
            
        </div>
    )
}

export default HeroSection
