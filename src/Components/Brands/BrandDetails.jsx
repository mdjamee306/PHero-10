import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Details from './Details';
import Slide from '../../Pages/Slide';

const BrandDetails = () => {
    const { brand } = useParams();
    console.log(brand);
    const [datas, setDatas] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Fetch data when the component mounts
        fetch(`https://b8a10-brandshop-server-side-mdjamee306.vercel.app/product`)
            .then((response) => response.json())
            .then((data) => {
                // Filter data based on the brand
                const filteredData = data.filter((item) => item.brand === brand);
                setDatas(filteredData);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setIsLoading(false);
            });
    }, [brand]);

    if (isLoading) {
        return <p className=''>NO Data Available</p>;
    }

    if (datas.length === 0) {
        return (
            <div className='md:mt-8 mb-8'>
                <div className="h-[60vh] mb-8">
                    <Slide></Slide>
                </div>
                <p className='text-3xl text-center'>No Data Available for {brand}</p>
            </div>
        );
    }

    return (
        <div className='md:mt-8 mb-8'>
            <div className="h-[60vh] mb-8">
                <Slide></Slide>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-3/4 mx-auto'>
                {

                    datas.map((data) => (
                        <Details key={data._id} data={data} />
                    ))
                }
            </div>
        </div>
    );
};

export default BrandDetails;
