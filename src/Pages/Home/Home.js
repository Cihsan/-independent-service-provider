import React from 'react';
import Service from '../../Pages/Home/Services';
import Banner from '../../Pages/Home/Banner';


const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <div className='container'>
            <Service></Service>
            
            </div>
        </div>
    );
};

export default Home;