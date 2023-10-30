import React from 'react';
import Banner from '../Components/Banner';
import Brands from '../Components/Brands/Brands';
import { useLoaderData } from 'react-router-dom';
import Contact from './Contact';
import Service from './Service';

const Home = () => {
    const brands = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <Brands 
            brands={brands}
            ></Brands>
            <Service></Service>
        </div>
    );
};

export default Home;