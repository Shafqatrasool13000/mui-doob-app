import React from 'react'
import About from './About';
import Blog from './Blog';
import ContactUs from './ContactUs';
import Header from './Header';
import Navbar from './Navbar';
import Portfolio from './Portfolio';
import Services from './Services'
import Footer from './Footer'
const Home = () => {
    return (
        <>
            <Navbar />
            <Header/>
            <Services />
            <About />
            <Portfolio />
            <Blog />
            <ContactUs />
            <Footer />
        </>
    )
}

export default Home
