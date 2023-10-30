import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

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
            
        </div>
    );
};

export default BrandDetails;