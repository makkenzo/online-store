import { IoBagAddOutline } from 'react-icons/io5';
import { MdOutlineFavoriteBorder } from 'react-icons/md';

import { useSpring, animated } from '@react-spring/web';

const ProductCard = ({ product }) => {
    const [cartButtonProps, setCartButtonProps] = useSpring(() => ({ scale: 1 }));
    const [favoritesButtonProps, setFavoritesButtonProps] = useSpring(() => ({ scale: 1 }));

    const handleAddToCart = () => {
        setCartButtonProps({ scale: 1.4 });
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
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-500 mb-4">{product.desc}</p>
                <div className="flex justify-between items-center">
                    <p className="text-xl font-bold text-gray-900">{product.price} руб.</p>
                    <p className="text-xl text-gray-500">
                        <del>{product.oldPrice} руб.</del>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
