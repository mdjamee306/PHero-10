/* eslint-disable react/prop-types */
import BrandCards from './BrandCards';

import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Aos from 'aos';

    
const Brands = ({ brands }) => {

    useEffect(() => {
        Aos.init();
    }, [])
    
    console.log(brands);
    return (
        <div>
            <div>
                <h1 data-aos="zoom-in" className='text-center text-3xl md:text-5xl text-yellow-700 font-bold mt-3 mb-3 md:mt-8 md:mb-8'>Our Brands</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-3/4 mx-auto'>
                {
                    brands?.map(brand => <BrandCards
                        brand={brand} key={brand.id}
                    ></BrandCards>)
                }
            </div>
        </div>
    );
};

export default Brands;