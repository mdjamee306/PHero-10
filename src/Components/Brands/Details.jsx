/* eslint-disable react/prop-types */

const Details = ({ brand }) => {
    return (
        <div>
            {/* slides */}
            <div className='mt-4 h-[80vh] bg-slate-400'>

            </div>
            {/* cards */}
            <div className="w-3/4 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4 md:mt-8 mb-4 md:mb-8">

                <div className="relative flex flex-col shadow-2xl rounded-xl bg-clip-border bg-slate-300 hover:bg-white">
                    <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white rounded-xl bg-clip-border">
                        <img
                            src={brand?.image}
                            className="object-cover w-full h-full"
                        />
                    </div>
                    <div className="p-6">
                        <div className="flex items-center justify-between mb-2">
                            <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                                {brand?.title}
                            </p>
                        </div>
                        <div>
                            <button className="btn btn-active btn-primary">Details</button>
                            <button className="btn btn-active btn-primary">Update</button>
                        </div>
                    </div>
                </div>

                <div className="relative flex flex-col shadow-2xl rounded-xl bg-clip-border bg-slate-300 hover:bg-white">
                    <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white rounded-xl bg-clip-border">
                        <img
                            src={brand?.image}
                            className="object-cover w-full h-full"
                        />
                    </div>
                    <div className="p-6">
                        <div className="flex items-center justify-between mb-2">
                            <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                                {brand?.title}
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Details;