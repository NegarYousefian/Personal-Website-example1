import React from 'react'
import HeroSection from '../HeroSection'
import Cards from '../Cards'
import About from './About';
import ContactSection from '../ContactSection';
import FooterSection from '../FooterSection';
function Home() {
    return (
        <>
            <HeroSection />
            <About />
            <Cards />
            <ContactSection />
            <FooterSection />
        </>
    );
}

export default Home
