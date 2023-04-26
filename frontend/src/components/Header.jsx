import axios from 'axios';
import React, { useState } from 'react';

import { Link } from 'react-router-dom';

const Header = ({ header, desc, button }) => {
    const [query, setQuery] = useState('');
    const [queryResults, setQueryResults] = useState([]);

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
                <div className="flex items-center">
                    <div className="text-white font-bold text-2xl">
                        <a href="/">Интерьер.</a>
                    </div>
                </div>
                <form onChange={handleSearch}>
                    <input
                        type="text"
                        placeholder="Поиск"
                        className="placeholder-white rounded-full bg-transparent text-white w-[280px] border-2 border-white py-2 px-5 focus:outline-none"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </form>
                <div className="flex items-center">
                    <Link to="/catalog" className="text-white font-medium mr-4">
                        Каталог
                    </Link>
                    <Link to="/cart" className="text-white font-medium">
                        Корзина
                    </Link>
                </div>
            </div>
            <hr className="container mx-auto border-t border-white mt-5" />
            <div className="container mx-auto flex flex-col items-start justify-start text-left mt-12">
                <h1 className="text-8xl font-bold text-white mb-4 pt-12" dangerouslySetInnerHTML={header} />
                <p className="text-2xl text-white mb-4">{desc}</p>
                {button && (
                    <Link to="/catalog" className="text-white underline hover:no-underline hover:text-[#f0f0f0]">
                        Перейти в каталог
                    </Link>
                )}
            </div>
        </>
    );
};

export default Header;
