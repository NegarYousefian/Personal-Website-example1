import React, {useState} from 'react'
import './Cards.css'
import CardItem from './CardItem'
import '../App.css'
import Portal from './Portal.js'
import SimpleSlider from './SimpleSlider.js'

function Cards() {
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    return (
        <>
        <div className='cards'>
            <h1 className='hdr'>Projects</h1>
        
            <div className='cards-container'>
                <ul className='cards-list'>
                    <CardItem src='images/project1-1.png'
                    text='This is a project for a personal website.'
                    label='Project 1' onClick={() => setIsOpen1(true)}/>
                    <CardItem src='images/project2-1.jpg'
                    text='This is a personal diary website.'
                    label='Project 2' onClick={() => setIsOpen2(true)}/>
                    <Portal>
                        {isOpen1 && 
                        <div className='portal-background'>
                            
                            <div className='portal-container'>
                                <i className='fa fa-times' onClick={() => setIsOpen1(false)}></i>
                                <div className='portal-pics'>
                                    <SimpleSlider>
                                        <div>
                                            <img src='/images/project1-1.png' alt='not found' />
                                        </div>
                                        <div>
                                            <img src='/images/project1-2.png' alt='not found' />
                                        </div>
                                        <div>
                                            <img src='/images/project1-3.png' alt='not found' />
                                        </div>
                                        <div>
                                            <img src='/images/project1-4.png' alt='not found' />
                                        </div>
                                    </SimpleSlider>
    
                                </div>
                            </div>
                        </div>}

                        {isOpen2 && 
                        <div className='portal-background'>
                            
                            <div className='portal-container'>
                                <i className='fa fa-times' onClick={() => setIsOpen2(false)}></i>
                                <div className='portal-pics'>
                                    <SimpleSlider>
                                        <div>
                                            <img src='/images/project2-1.jpg' alt='not found' />
                                        </div>
                                        <div>
                                            <img src='/images/project2-2.jpg' alt='not found' />
                                        </div>
                                    </SimpleSlider>
                                            
                                </div>
                            </div>
                        </div>}

                    </Portal>

                    {/*<CardItem src='images/2.jpg'
                    text='This is project2'
                    label='Project 2'
                    path='/project2' />

                    <CardItem src='images/3.jpg'
                    text='This is project3'
                    label='Project 3'
                    path='/project3' />

                    <CardItem src='images/4.jpg'
                    text='This is project4'
                    label='Project 4'
                    path='/project4' />

                    <CardItem src='images/5.jpg'
                    text='This is project5'
                    label='Project 5'
                    path='/project5' />

                    <CardItem src='images/6.jpg'
                    text='This is project6'
                    label='Project 6'
                    path='/project6' />

                    <CardItem src='images/7.jpg'
                    text='This is project7'
                    label='Project 7'
                    path='/project7' />

                    <CardItem src='images/8.jpg'
                    text='This is project8'
                    label='Project 8'
                    path='/project8' />*/}
                    
                </ul>
                
            </div>
        </div>
        </>
    )
}

export default Cards
