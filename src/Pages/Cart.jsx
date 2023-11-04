import { useLoaderData } from "react-router-dom";
import AddCart from "./AddCart";

const Cart = () => {
    const product = useLoaderData();
    console.log(product);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-3/4 mx-auto">
            
            {
                product?.map(data =><AddCart key={data._id} data={data}></AddCart>)
            }

        </div>
    );
};

export default Cart;