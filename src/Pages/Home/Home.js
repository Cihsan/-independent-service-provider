import React from 'react';
import Service from '../../Pages/Home/Services';
import Banner from '../../Pages/Home/Banner';
import Footer from '../Shared/Footer';

const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <div className='container'>
            <Service></Service>
            <Footer></Footer>

            </div>
        </div>
    );
};

export default Home;