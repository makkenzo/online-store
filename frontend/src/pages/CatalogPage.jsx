import Header from '../components/Header';
import ProductCard from '../components/ProductCard';

import Background from '../assets/catalog.png';
import Footer from '../components/Footer';
import { Link, useLocation } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';

import axios from 'axios';
import { useEffect, useState } from 'react';

const CatalogPage = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [shownData, setShownData] = useState([]);
    const [numToShow, setNumToShow] = useState(12);
    const [sortBy, setSortBy] = useState('default');

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

    useEffect(() => {
        if (data.length > 0) {
            setShownData(data.slice(0, numToShow));
        }
    }, [data, numToShow]);

    const handleShowMore = () => {
        setNumToShow(numToShow + 12);
    };

    const handleSortBy = (e) => {
        const selectedValue = e.target.value;

        let sortedData = [];

        switch (selectedValue) {
            case 'priceAsc':
                sortedData = [...data].sort((a, b) => a.price - b.price);
                break;
            case 'priceDesc':
                sortedData = [...data].sort((a, b) => b.price - a.price);
                break;
            default:
                sortedData = data;
                break;
        }

        setData(sortedData);
        setShownData(sortedData.slice(0, numToShow));
        setSortBy(selectedValue);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <header
                className="bg-cover bg-center relative pt-4 h-[400px]"
                style={{
                    backgroundImage: `url("${Background}")`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <Header header={{ __html: 'Каталог' }} />
            </header>

            <section className="container mx-auto py-12">
                <div className="flex items-center mb-6 justify-between">
                    <Breadcrumbs pathnames={pathnames} />
                    <select
                        className="border border-gray-300 rounded-md py-1 px-2"
                        onChange={handleSortBy}
                        value={sortBy}
                    >
                        <option value="default">Выберите порядок</option>
                        <option value="priceAsc">Порядок: цена по возрастанию</option>
                        <option value="priceDesc">Порядок: цена по убыванию</option>
                    </select>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                    {shownData.map((product) => (
                        <ProductCard key={product._id} product={product} />
                    ))}
                </div>
                {numToShow < data.length && (
                    <button className="underline hover:no-underline hover:text-[#888888]" onClick={handleShowMore}>
                        Показать еще
                    </button>
                )}
            </section>

            <Footer />
        </>
    );
};

export default CatalogPage;
