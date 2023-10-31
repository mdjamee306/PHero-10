import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Details from './Details';

const BrandDetails = () => {
    const [brand, setBrand] = useState()

    const { id } = useParams();
    const datas = useLoaderData();

    useEffect(() => {

        const findBrandId = datas.find(data => data.id == id)
        setBrand(findBrandId);

    }, [id, datas])
    return (
        <div>
            <Details brand={brand}></Details>
        </div>
    );
};

export default BrandDetails;