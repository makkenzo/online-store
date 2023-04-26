import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { PuffLoader } from 'react-spinners';
import { Link } from 'react-router-dom';
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
        return (
            <div className="container mx-auto flex justify-center mb-10">
                <PuffLoader color="#bcbcbc" size={100} />
            </div>
        );
    }

    return (
        <section className="py-12 container mx-auto">
            <h2 className="text-4xl font-bold mb-8">Каталог товаров</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                {data.slice(0, 6).map((product) => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
            <Link to="/catalog" className="underline hover:no-underline hover:text-[#888888]">
                Перейти в каталог
            </Link>
        </section>
    );
};

export default Catalog;
