import Header from '../components/Header';

import Background from '../assets/cart.png';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ProductBox from '../components/ProductBox';

const CartPage = () => {
    const [cartItems, setcartItems] = useState([]);
    const [total, setTotal] = useState(0);
    const [isSticky, setIsSticky] = useState(false);

    const handleScroll = () => {
        if (window.pageYOffset > 0) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
    };

    window.addEventListener('scroll', handleScroll);

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('cartItems')) || [];
        setcartItems(items);
    }, []);

    const getTotalPrice = () => {
        let totalPrice = 0;
        for (let i = 0; i < cartItems.length; i++) {
            totalPrice += cartItems[i].price * cartItems[i].quantity;
        }
        setTotal(totalPrice);
    };

    useEffect(() => {
        getTotalPrice();
    }, [cartItems]);

    const removeFromCart = (product) => {
        const newCartItems = [...cartItems];
        const index = newCartItems.findIndex((item) => item._id === product._id);
        if (index !== -1) {
            newCartItems.splice(index, 1);
            setcartItems(newCartItems);
            localStorage.setItem('cartItems', JSON.stringify(newCartItems));
        }
    };

    const updateCartItemQuantity = (itemId, newQuantity) => {
        const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
        const itemIndex = cartItems.findIndex((item) => item._id === itemId);

        if (itemIndex !== -1) {
            cartItems[itemIndex].quantity = newQuantity;
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
        }
    };

    return (
        <>
            <header
                className="bg-cover bg-center relative pt-4 h-[400px] mb-16"
                style={{
                    backgroundImage: `url("${Background}")`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <Header header={{ __html: 'Корзина' }} />
            </header>

            <section className="flex container mx-auto">
                <div className="w-2/3 pr-4">
                    <div className="flex justify-between font-bold mb-4">
                        <p className="font-normal">Товар</p>
                        <p className="font-normal">Кол-во</p>
                    </div>
                    <hr className="border-0 border-b-2 border-gray-200 mb-6" />
                    {cartItems.length === 0 ? (
                        <p>В корзине нет товаров</p>
                    ) : (
                        <>
                            {cartItems.map((item) => (
                                <div key={item._id}>
                                    <div className="flex justify-between items-center mb-4">
                                        <div className="flex">
                                            <img src={item.imageSrc} className="w-48 h-48 object-cover mr-8" />
                                            <div>
                                                <h3 className="text-2xl font-semibold mb-3">{item.name}</h3>
                                                <p className="text-gray-500 text-md w-1/2 mb-3">{item.desc}</p>
                                                <p className="text-xl font-semibold mb-3">{item.price} руб.</p>
                                                <div className="flex items-center">
                                                    <button
                                                        className="text-black text-sm mr-2 underline"
                                                        onClick={() => removeFromCart(item)}
                                                    >
                                                        Удалить
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <input
                                                type="number"
                                                min="1"
                                                max="99"
                                                defaultValue={item.quantity}
                                                className="py-3 pl-5 rounded-lg font-semibold bg-[#F7F6F6]"
                                                onChange={(e) => {
                                                    console.log('changed');
                                                    updateCartItemQuantity(item._id, e.target.value);
                                                    item.quantity = e.target.value;
                                                    setcartItems([...cartItems]);
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <hr className="border-0 border-b-2 border-gray-200 my-6" />
                                </div>
                            ))}
                            <div className="flex justify-start mt-6">
                                <button
                                    className="bg-white border-2 hover:border-white border-black text-gray-900 hover:bg-black hover:text-white text-md py-2 rounded-full mt-2 w-60"
                                    onClick={() => {
                                        setcartItems([]);
                                        localStorage.removeItem('cartItems');
                                    }}
                                >
                                    Очистить корзину
                                </button>
                                <Link to="/catalog">
                                    <button className="bg-white hover:border-white border-2 border-black text-gray-900 hover:bg-black hover:text-white text-md py-2 rounded-full mt-2 w-60 ml-4">
                                        Продолжить покупки
                                    </button>
                                </Link>
                            </div>
                        </>
                    )}
                </div>
                <div className={`w-1/3 h-[720px] bg-[#F7F6F6] p-8 rounded-3xl ${isSticky ? 'sticky top-5' : ''}`}>
                    <form>
                        <h2 className="text-2xl font-bold mb-4 text-center">Оформление заказа</h2>
                        <div className="mb-8">
                            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                                Имя Фамилия
                            </label>
                            <input
                                placeholder="Зубенко Михаил Петрович"
                                type="text"
                                name="name"
                                id="name"
                                className="shadow-sm bg-transparent focus:outline-none border-b-2 border-[#CACDD8] w-full text-lg"
                                required
                            />
                        </div>
                        <div className="mb-8">
                            <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                                Номер телефона
                            </label>
                            <input
                                placeholder="+77051112233"
                                type="tel"
                                name="phone"
                                id="phone"
                                className="shadow-sm bg-transparent focus:outline-none border-b-2 border-[#CACDD8] w-full text-lg"
                                required
                            />
                        </div>
                        <div className="mb-8">
                            <label htmlFor="address" className="block text-gray-700 font-medium mb-2">
                                Адрес доставки
                            </label>
                            <input
                                placeholder="пр. Достык 108"
                                type="text"
                                name="address"
                                id="address"
                                className="shadow-sm bg-transparent focus:outline-none border-b-2 border-[#CACDD8] w-full text-lg"
                                required
                            />
                        </div>
                        <div className="flex flex-col justify-center items-center mt-72">
                            <span className="text-2xl font-semibold">Итого: {total} руб.</span>
                            <button className="bg-transparent border-2 border-black hover:border-white text-gray-900 hover:bg-black hover:text-white text-lg py-2 rounded-full mt-2 w-80 ml-4">
                                Оформить заказ
                            </button>
                        </div>
                    </form>
                </div>
            </section>
            <ProductBox />
            <div className="container mx-auto mb-14">
                <Link to="/catalog" className="underline hover:no-underline hover:text-[#888888]">
                    Перейти в каталог
                </Link>
            </div>

            <Footer />
        </>
    );
};

export default CartPage;
