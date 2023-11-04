import React from 'react';

const AddCart = ({ data }) => {
    const { name, _id, brand, type, description, price, rating, image } = data;
    return (
        <div className='md:my-8 my-4'>
            <div className="cursor-pointer relative flex flex-col shadow-2xl rounded-xl bg-clip-border bg-slate-300 hover:bg-gray-500">
            <div className="relative mx-4 mt-4 overflow-hidden bg-white rounded-xl bg-clip-border">
                <img
                    src={image}
                    className="object-contain w-11/12 h-60 mx-auto "
                />
            </div>
            <div className="p-6 space-y-2">
                <h5 className="text-xl text-black">Brand: <span className="text-sm font-extrabold text-black">{brand}</span></h5>
                <span className="block font-sans text-xl antialiased font-extrabold text-purple-900">{name}</span>
                
                <h3 className="text-black p-1 rounded-full border-black border-2 text-center">Rating: <span>{rating}</span></h3>
                <p className="text-xs h-[100px]">{description}</p>
                <p className="text-xl text-black">Price: $<span className="text-sm font-extrabold text-black">{price}</span></p>
            </div>
            <div className='text-center'>
                <button className='btn'>Delete</button>
            </div>
        </div>
        </div>
    );
};

export default AddCart;