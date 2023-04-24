import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

import axios from 'axios';

const Catalog = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/products');
                setData(response.data);
                setLoading(false);
            } catch (err) {
                console.error(err);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <section className="py-12 container mx-auto">
            <h2 className="text-4xl font-bold mb-8">Каталог товаров</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <ProductCard product={data[0]} />
            </div>
        </section>
    );
};

export default Catalog;
