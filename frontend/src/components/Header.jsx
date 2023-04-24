import React from 'react';
import Background from '../assets/home.png';

const Header = () => {
    return (
        <header
            className="bg-cover bg-center h-screen relative pt-4"
            style={{ backgroundImage: `url("${Background}")` }}
        >
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center">
                    <div className="text-white font-bold text-2xl">
                        <a href="/">Интерьер.</a>
                    </div>
                </div>
                <form>
                    <input
                        type="text"
                        placeholder="Поиск"
                        className="placeholder-white rounded-full bg-transparent text-white w-[280px] border-2 border-white py-2 px-5 focus:outline-none"
                    />
                </form>
                <div className="flex items-center">
                    <button className="text-white font-medium mr-4">Каталог</button>
                    <button className="text-white font-medium">Корзина</button>
                </div>
            </div>
            <hr className="container mx-auto border-t border-white mt-5" />
            <div className="container mx-auto flex flex-col items-start justify-start text-left mt-12">
                <h1 className="text-8xl font-bold text-white mb-4 pt-12">
                    Всё, чего
                    <br /> заслуживает ваш дом
                </h1>
                <p className="text-2xl text-white mb-4">Наша мебель — ваше отражение</p>
                <a href="" className="text-white underline">
                    Перейти в каталог
                </a>
            </div>
        </header>
    );
};

export default Header;
