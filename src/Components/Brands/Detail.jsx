import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Detail = () => {
    const cart = useLoaderData();
    const { name, brand, description, price, rating, image } = cart;

    const addToCart = () => {

        fetch('https://b8a10-brandshop-server-side-mdjamee306.vercel.app/cart', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(cart)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    // Show a "Good Job" message using Swal
                    Swal.fire({
                        title: "Good Job!",
                        text: `${cart.name} has been added to your cart.`,
                        icon: "success",
                    })
                }
            })
    }


    return (
        <div className="md:my-8 my-3">
            <div className="relative flex flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border flex justify-center items-center">
                    <img
                        src={image}
                        alt="image"
                        className="object-cover mx-auto"
                    />
                </div>
                <div className="p-6 space-y-2">
                    <h5 className="text-xl text-black">Brand: <span className="text-sm font-extrabold text-black">{brand}</span></h5>
                    <span className="block font-sans text-xl antialiased font-extrabold text-purple-900">{name}</span>

                    <h3 className="text-black p-1 rounded-full border-black border-2 text-center">Rating: <span>{rating}</span></h3>
                    <p className="text-xs">{description}</p>
                    <p className="text-xl text-black">Price: $<span className="text-sm font-extrabold text-black">{price}</span></p>
                    <div>
                        <button onClick={addToCart} className="btn">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detail;
