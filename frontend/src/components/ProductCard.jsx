import { IoBagAddOutline } from 'react-icons/io5';
import { MdOutlineFavoriteBorder } from 'react-icons/md';

import { useSpring, animated } from '@react-spring/web';
import { useEffect, useState } from 'react';

const ProductCard = ({ product }) => {
    const [cartButtonProps, setCartButtonProps] = useSpring(() => ({ scale: 1 }));
    const [favoritesButtonProps, setFavoritesButtonProps] = useSpring(() => ({ scale: 1 }));

    const [oldPriceShow, setOldPriceShow] = useState(false);

    useEffect(() => {
        if (product.price !== product.oldPrice) {
            setOldPriceShow(true);
        }
    }, []);

    const handleAddToCart = () => {
        setCartButtonProps({ scale: 1.4 });

        const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');

        const existingProductIndex = cartItems.findIndex((item) => item._id === product._id);

        if (existingProductIndex !== -1) {
            cartItems[existingProductIndex].quantity += 1;
        } else {
            cartItems.push({ ...product, quantity: 1 });
        }

        localStorage.setItem('cartItems', JSON.stringify(cartItems));

        setTimeout(() => {
            setCartButtonProps({ scale: 1.0 });
        }, 600);
    };

    const handleAddToFavorites = () => {
        setFavoritesButtonProps({ scale: 1.4 });
        setTimeout(() => {
            setFavoritesButtonProps({ scale: 1.0 });
        }, 600);
    };

    return (
        <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-lg relative">
            <div className="relative">
                <img src={product.imageSrc} alt={product.name} className="w-full h-64 object-cover" />
                <div className="absolute top-0 right-0 flex space-x-2 p-2">
                    <button className="p-2" onClick={handleAddToCart}>
                        <animated.div style={cartButtonProps}>
                            <IoBagAddOutline color="white" size={24} />
                        </animated.div>
                    </button>
                    <button className="p-2 rounded-full" onClick={handleAddToFavorites}>
                        <animated.div style={favoritesButtonProps}>
                            <MdOutlineFavoriteBorder color="white" size={24} />
                        </animated.div>
                    </button>
                </div>
            </div>
            <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-500 mb-4 text-md">{product.desc}</p>
                <div className="flex justify-between items-center">
                    <p className="text-2xl font-bold text-gray-900">{product.price} руб.</p>
                    {oldPriceShow && (
                        <p className="text-2xl text-gray-500">
                            <del>{product.oldPrice} руб.</del>
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
