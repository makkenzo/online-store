import axios from 'axios';
import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';

const Header = ({ header, desc, button }) => {
    const [query, setQuery] = useState('');
    const [queryResults, setQueryResults] = useState([]);
    const [isSearchActive, setIsSearchActive] = useState(false);

    const handleSearch = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.get(`http://localhost:3000/api/products/search?q=${query}`);
            setQueryResults(response.data);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <>
            <div className="container mx-auto flex items-center justify-between">
                {!isSearchActive && (
                    <div className="flex items-center">
                        <div className="text-white font-bold text-2xl">
                            <a href="/">Интерьер.</a>
                        </div>
                    </div>
                )}
                <form onChange={handleSearch} className={`${isSearchActive ? 'w-11/12 mx-auto' : ''}`}>
                    <input
                        type="text"
                        placeholder="Поиск"
                        className={`placeholder-white rounded-full bg-transparent text-white ${
                            isSearchActive ? 'w-full' : 'w-[280px]'
                        } border-2 border-white py-2 px-5 focus:outline-none`}
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onFocus={() => setIsSearchActive(true)}
                        onBlur={() => setIsSearchActive(false)}
                    />
                </form>
                {!isSearchActive && (
                    <div className="flex items-center">
                        <Link to="/catalog" className="text-white font-medium mr-4">
                            Каталог
                        </Link>
                        <Link to="/cart" className="text-white font-medium">
                            Корзина
                        </Link>
                    </div>
                )}
            </div>
            {isSearchActive && (
                <div className="flex flex-col mx-auto bg-white w-3/4 pt-5 pl-5 rounded-lg mt-5 shadow-lg">
                    {queryResults.map((item) => (
                        <div key={item._id}>
                            <div className="flex justify-between items-center mb-4">
                                <div className="flex">
                                    <img src={item.imageSrc} className="w-48 h-48 object-cover mr-8" />
                                    <div>
                                        <h3 className="text-2xl font-semibold mb-3">{item.name}</h3>
                                        <p className="text-gray-500 text-md w-1/2 mb-3">{item.desc}</p>
                                        <p className="text-xl font-semibold mb-3">{item.price} руб.</p>
                                    </div>
                                </div>
                            </div>
                            <hr className="border-0 border-b-2 border-gray-200 my-6" />
                        </div>
                    ))}
                </div>
            )}
            {!isSearchActive && (
                <>
                    <hr className="container mx-auto border-t border-white mt-5" />
                    <div className="container mx-auto flex flex-col items-start justify-start text-left mt-12">
                        <h1 className="text-8xl font-bold text-white mb-4 pt-12" dangerouslySetInnerHTML={header} />
                        <p className="text-2xl text-white mb-4">{desc}</p>
                        {button && (
                            <Link
                                to="/catalog"
                                className="text-white underline hover:no-underline hover:text-[#f0f0f0]"
                            >
                                Перейти в каталог
                            </Link>
                        )}
                    </div>
                </>
            )}
        </>
    );
};

export default Header;
