import ProductCard from './ProductCard';
import { useEffect, useState } from 'react';
import axios from 'axios';

const ProductBox = () => {
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

    const sortedProducts = data.sort((a, b) => {
        const diffA = a.oldPrice - a.price;
        const diffB = b.oldPrice - b.price;
        return diffB - diffA;
    });

    const displayedProducts = sortedProducts.slice(0, 3);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <section className="py-12 container mx-auto">
            <h2 className="text-4xl font-bold mb-8">Специальные предложения</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {displayedProducts.map((product) => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </section>
    );
};

export default ProductBox;
