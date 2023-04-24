import ProductCard from './ProductCard';

const Catalog = () => {
    return (
        <section className="py-12 container mx-auto">
            <h2 className="text-4xl font-bold mb-8">Каталог товаров</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">{/* <ProductCard product={} /> */}</div>
        </section>
    );
};

export default Catalog;
