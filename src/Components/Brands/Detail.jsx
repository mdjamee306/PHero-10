import  { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailCard from "./DetailCard";

const Detail = () => {
    const { _id } = useParams();
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Fetch data when the component mounts
        fetch(`http://localhost:5000/product`)
            .then((response) => response.json())
            .then((data) => {
                // Find the item with the matching _id
                const filteredData = data.find((item) => item._id == _id);
                setData(filteredData);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setIsLoading(false);
            });
    }, [_id]);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (!data) {
        return <p>Data not found</p>;
    }

    return (
        <DetailCard data={data}></DetailCard>
    );
};

export default Detail;
