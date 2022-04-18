import React from 'react';
import Service from '../../component/Service';
import Banner from '../../component/Banner';

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