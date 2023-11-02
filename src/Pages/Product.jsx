
const Product = () => {
    return (
        <div className="bg-slate-300 p-24">
            <h1 className='text-3xl md:text-5xl text-yellow-700 font-bold text-center mt-4'>Add A New Product</h1>
            <form>
                {/* form row 1 */}
                <div className='flex mb-8 '>
                    <div className="form-control md:w-1/2">
                        <label className="label ">
                            <span className="label-text text-black">Name</span>
                        </label>
                        <label className="input-group">
                            <input name="name" type="text" placeholder="Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text text-black">Brand Name</span>
                        </label>
                        <label className="input-group">
                            <input name="brand" type="text" placeholder="Brand Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form row 2 */}
                <div className='flex mb-8'>
                    <div className="form-control md:w-1/2">
                        <label className="label ">
                            <span className="label-text text-black">Type</span>
                        </label>
                        <label className="input-group">
                            <input name="type" type="text" placeholder="Type" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text text-black">Short Description</span>
                        </label>
                        <label className="input-group">
                            <input name="description" type="text" placeholder="Short Description" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form row 3 */}
                <div className='flex mb-8'>
                    <div className="form-control md:w-1/2">
                        <label className="label ">
                            <span className="label-text text-black">Price</span>
                        </label>
                        <label className="input-group">
                            <input name="price" type="text" placeholder="price" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text text-black">Rating</span>
                        </label>
                        <label className="input-group">
                            <input name="rating" type="text" placeholder="rating" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form row 4*/}
                <div className=' mb-8'>
                    <div className="form-control md:w-full">
                        <label className="label ">
                            <span className="label-text text-black">Image</span>
                        </label>
                        <label className="input-group">
                            <input name="image" type="text" placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Add Product" className="btn btn-block bg-slate-400 text-white" />
            </form>
        </div>
    );
};

export default Product;