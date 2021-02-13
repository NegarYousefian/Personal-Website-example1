import React from 'react'
import './AboutSection.css'
import { Link } from 'react-router-dom'
function AboutSection() {
    return (
        <>
            <div className='about-container'>
                <h1 className='hdr'>About Me</h1>
                <div className='about-info-container'>
                    <div className='about-text'>
                    Negar Yousefian is currently an undergraduate student at K.N. Toosi University of
                    Technology in Iran. Negar graduated from Farzanegan High School in 2017 with the highest marks.
                    Her research interests are mainly "Web Development and Design" and "User Interface and User Experience Design".
                    She completed several courses about Graphic Design, UI-UX Design, and Front-end Web Development to strengthen her interests and develop herself in her approach.
                    <br/><br/>
                           
                    </div>
                    <div className='about-skills'>
                        <div className='about-skill-item ht' data-label='HTML'></div>
                        <div className='about-skill-item cs' data-label='CSS'></div>
                        <div className='about-skill-item jv' data-label='JavaScript'></div>
                        <div className='about-skill-item rct' data-label='React'></div>
                        <div className='about-skill-item pt' data-label='PhotoShop'></div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default AboutSection
