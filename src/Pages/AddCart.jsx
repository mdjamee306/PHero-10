// /* eslint-disable react/prop-types */
// import { useState } from 'react';
// import Swal from 'sweetalert2';

// const AddCart = ({ datas }) => {

//     // Use 'datas' as the initial state of 'product'
//     const [product, setProduct] = useState(datas);

//     const handleDelete = (_id) => {
//         console.log("delete", _id);
//         fetch(`http://localhost:5000/cart/${_id}`, {
//             method: "DELETE",
//         })
//             .then((res) => res.json())
//             .then((data) => {
//                 console.log(data);
//                 if (data.deletedCount > 0) {
//                     Swal.fire({
//                         title: 'Deleted!',
//                         text: 'Your product has been deleted.',
//                         icon: 'success',
//                     });

//                     // Remove the deleted product from the state
//                     const remaining = product.filter((item) => item._id !== _id);
//                     setProduct(remaining);
//                 } else {
//                     Swal.fire({
//                         title: 'Error',
//                         text: 'Failed to delete the product.',
//                         icon: 'error',
//                     });
//                 }
//             })
//             .catch((error) => {
//                 console.error('Error deleting product:', error);
//             });
//     };
//     return (
//         <div className='md:my-8 my-4'>
//             <div className="cursor-pointer relative flex flex-col shadow-2xl rounded-xl bg-clip-border bg-slate-300 hover:bg-gray-500">
//                 <div className="relative mx-4 mt-4 overflow-hidden bg-white rounded-xl bg-clip-border">
//                     <img
//                         src={product.image}
//                         className="object-contain w-11/12 h-60 mx-auto "
//                     />
//                 </div>
//                 <div className="p-6 space-y-2">
//                     <h5 className="text-xl text-black">Brand: <span className="text-sm font-extrabold text-black">{product.brand}</span></h5>
//                     <span className="block font-sans text-xl antialiased font-extrabold text-purple-900">{product.name}</span>

//                     <h3 className="text-black p-1 rounded-full border-black border-2 text-center">Rating: <span>{product.rating}</span></h3>
//                     <p className="text-xs h-[100px]">{product.description}</p>
//                     <p className="text-xl text-black">Price: $<span className="text-sm font-extrabold text-black">{product.price}</span></p>
//                 </div>
//                 <div className='text-center my-4'>
//                     <button onClick={() => handleDelete(product._id)} className='btn w-11/12 mx-auto hover:bg-slate-300
//                 hover:text-black'>Delete</button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AddCart;