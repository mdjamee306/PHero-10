/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

const BrandCards = ({ brand }) => {
    return (
        <div>
            <Link to={`/brands/${brand.id}`}>
                <div className="relative flex flex-col shadow-2xl rounded-xl bg-clip-border">
                    <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white rounded-xl bg-clip-border">
                        <img
                            src={brand.image}
                            className="object-cover w-full h-full"
                        />
                    </div>
                    <div className="p-6">
                        <div className="flex items-center justify-between mb-2">
                            <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                                {brand.title}
                            </p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default BrandCards;