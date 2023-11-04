/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Aos from 'aos';


const BrandCards = ({ brand }) => {

    useEffect(() => {
        Aos.init();
    }, [])

    return (
        <div data-aos="zoom-in">
            <Link to={`/brands/${brand.brand}`}>
                <div className="relative flex flex-col shadow-2xl rounded-xl bg-clip-border bg-slate-300 hover:bg-gray-500">
                    <div className="relative mx-4 mt-4 overflow-hidden bg-white rounded-xl bg-clip-border">
                        <img
                            src={brand.image}
                            className="object-contain w-11/12 h-60 mx-auto "
                        />
                    </div>
                    <div className="p-6">
                        <div className="flex items-center justify-between mb-2">
                            <p className="block font-sans text-xl antialiased font-extrabold leading-relaxed text-purple-900">
                                {brand.brand}
                            </p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default BrandCards;