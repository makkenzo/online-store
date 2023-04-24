import chandelier from '../assets/special_offers/chandelier.png';
import sofa from '../assets/special_offers/sofa.png';
import dresser from '../assets/special_offers/dresser.png';

import ProductCard from './ProductCard';

const ProductBox = () => {
    const products = [
        {
            id: 1,
            imageSrc: chandelier,
            name: 'Люстра VODA',
            desc: 'Основание из полированной нержавеющей стали, придает оригинальный парящий эффект.',
            price: 45000,
            oldPrice: 67000,
        },
        {
            id: 2,
            imageSrc: sofa,
            name: 'Диван RONALD',
            desc: 'Модель отличается простотой линий и форм, отсутствием броского декора.',
            price: 156000,
            oldPrice: 198000,
        },
        {
            id: 3,
            imageSrc: dresser,
            name: 'Комод VENT',
            desc: 'Европейский дуб - отличается особой прочностью и стабильностью.',
            price: 34000,
            oldPrice: 45000,
        },
    ];

    return (
        <section className="py-12 container mx-auto">
            <h2 className="text-4xl font-bold mb-8">Специальные предложения</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <ProductCard product={products[0]} />
                <ProductCard product={products[1]} />
                <ProductCard product={products[2]} />
            </div>
        </section>
    );
};

export default ProductBox;
