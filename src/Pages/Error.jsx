import React from 'react';

const Error = () => {
    return (
        <div>
            <div className='flex justify-center items-center h-[40vh]'>
                <div className='text-center font-bold  mt-6'>
                    <h1 className='text-red-500 text-7xl'>404</h1>
                    <h3 className='text-red-500'>Not found</h3>
                    <p className='text-sm'>Oops! It seems you've ventured into uncharted territory. The page you're looking for may have taken a detour, encountered a glitch, or simply doesn't exist in this digital realm</p>
                </div>
            </div>
        </div>
    );
};

export default Error;