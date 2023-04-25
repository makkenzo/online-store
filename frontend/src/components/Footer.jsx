import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';

import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-[#F7F6F6] text-white py-8">
            <div className="container mx-auto flex flex-col justify-between items-center md:flex-row">
                <div className="text-4xl font-bold text-black">Интерьер.</div>
                <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-12">
                    <div>
                        <h3 className="mb-2 text-black text-3xl">Меню</h3>
                        <ul>
                            <li className="py-1">
                                <Link to="/" className="text-[#888888]" href="">
                                    Главная
                                </Link>
                            </li>
                            <li className="py-1">
                                <Link to="/catalog" className="text-[#888888]" href="">
                                    Каталог
                                </Link>
                            </li>
                            <li className="py-1">
                                <Link to="/cart" className="text-[#888888]" href="">
                                    Корзина
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-2 text-black text-3xl">Контакты</h3>
                        <ul>
                            <li className="py-1">
                                <a className="text-[#888888]" href="tel:+79088008080">
                                    +7 908 800 80 80
                                </a>
                            </li>
                            <li className="py-1">
                                <a className="text-[#888888]" href="mailto:help@interier.com">
                                    help@interier.com
                                </a>
                            </li>
                            <li>
                                <div className="flex space-x-2">
                                    <a href="" className="text-gray-400 hover:text-black">
                                        <AiFillInstagram size={36} />
                                    </a>
                                    <a href="" className="text-gray-400 hover:text-black">
                                        <AiOutlineTwitter size={36} />
                                    </a>
                                    <a href="" className="text-gray-400 hover:text-black">
                                        <FaFacebookF size={30} />
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <p className="mr-4 text-sm text-black pb-2">Получайте наши новости и обновления </p>
                    <form className="flex flex-col items-center w-full">
                        <input
                            type="email"
                            placeholder="Email address"
                            className="bg-white border-2 border-gray focus:outline-none focus:border-gray-500 py-4 px-4 rounded-full text-black w-full"
                        />
                        <button
                            type="submit"
                            className="bg-[#DED7D7] border-2 border-white text-gray-900 hover:bg-black hover:text-white text-lg py-3 rounded-full mt-2 w-full"
                        >
                            Подписаться
                        </button>
                    </form>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
