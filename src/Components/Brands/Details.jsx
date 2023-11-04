/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Details = ({ data }) => {
    console.log(data);
    const { brand, image, description, name, price, rating, type } = data;
    return (
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
            <div className="flex justify-between w-11/12 mx-auto pb-4">
                <Link to={`/brand/${data._id}`}><button className="btn btn-primary">Details</button></Link>
                <button className="btn btn-primary">Update</button>
            </div>
        </div>
    );
};

export default Details;