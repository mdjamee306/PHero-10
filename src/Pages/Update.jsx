import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2'

import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Aos from 'aos';


const Update = () => {

    useEffect(() => {
        Aos.init();
    }, [])
    
    const product = useLoaderData();
    const { name, _id, brand, type, description, price, rating, image } = product;

    const handleUpdateProduct = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const description = form.description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const image = form.image.value;

        const UpdateProduct = { name, brand, type, description, price, rating, image }
        console.log(UpdateProduct);

        // send data to the server

        fetch(`http://localhost:5000/product/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(UpdateProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount >0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product Updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })

    }
    return (
        <div className="bg-slate-300 mt-4 px-12 md:px-24 py-4 md:py-8">
            <h1 data-aos="fade-up" className='text-xl md:text-3xl text-black font-normal md:font-bold text-center mb-4'>Update Product : <span className='text-yellow-700 md:tex-3xl '>{name}</span></h1>
            <form onSubmit={handleUpdateProduct}>
                {/* form row 1 */}
                <div className='flex mb-8 '>
                    <div data-aos="fade-right" className="form-control md:w-1/2">
                        <label className="label ">
                            <span className="label-text text-black">Product Name</span>
                        </label>
                        <label className="input-group">
                            <input defaultValue={name} name="name" type="text" placeholder="Name" className="input input-bordered w-full text-white" />
                        </label>
                    </div>
                    <div data-aos="fade-left" className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text text-black">Brand Name</span>
                        </label>
                        <label className="input-group">
                            <input defaultValue={brand} name="brand" type="text" placeholder="Brand Name" className="input input-bordered w-full text-white" />
                        </label>
                    </div>
                </div>
                {/* form row 2 */}
                <div className='flex mb-8'>
                    <div data-aos="fade-right" className="form-control md:w-1/2">
                        <label className="label ">
                            <span className="label-text text-black">Type</span>
                        </label>
                        <label className="input-group">
                            <input defaultValue={type}  name="type" type="text" placeholder="Type" className="input input-bordered w-full text-white" />
                        </label>
                    </div>
                    <div data-aos="fade-left" className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text text-black">Short Description</span>
                        </label>
                        <label className="input-group">
                            <input defaultValue={description} name="description" type="text" placeholder="Short Description" className="input input-bordered w-full text-white" />
                        </label>
                    </div>
                </div>
                {/* form row 3 */}
                <div className='flex mb-8'>
                    <div data-aos="fade-right" className="form-control md:w-1/2">
                        <label className="label ">
                            <span className="label-text text-black">Price</span>
                        </label>
                        <label className="input-group">
                            <input defaultValue={price} name="price" type="text" placeholder="price" className="input input-bordered w-full text-white" />
                        </label>
                    </div>
                    <div data-aos="fade-left" className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text text-black">Rating</span>
                        </label>
                        <label className="input-group">
                            <input defaultValue={rating} name="rating" type="text" placeholder="rating" className="input input-bordered w-full text-white" />
                        </label>
                    </div>
                </div>
                {/* form row 4*/}
                <div className=' mb-8'>
                    <div data-aos="zoom-in" className="form-control md:w-full">
                        <label className="label ">
                            <span className="label-text text-black">Image</span>
                        </label>
                        <label className="input-group">
                            <input defaultValue={image} name="image" type="text" placeholder="Photo URL" className="input input-bordered w-full text-white" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Add Product" className="btn btn-block bg-slate-400 text-white" />
            </form>
        </div>
    );
};

export default Update;