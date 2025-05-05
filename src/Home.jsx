import React from 'react'
import Hero from './components/Hero';
import Teams from './components/Teams';
import Steps from './components/Steps';
import Footer from './components/Footer';

const Home = () => {
    return (
        <div className='flex flex-col bg-black'>
            <Hero />
            <Teams />
            <Steps />
            <Footer />
        </div>
    )
};

export default Home;