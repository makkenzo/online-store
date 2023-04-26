
import Header from '../components/Header';
import SectionFor from '../components/SectionFor';
import ProductBox from '../components/ProductBox';
import Catalog from '../components/Catalog';
import Footer from '../components/Footer';

import Background from '../assets/home.png';

const Home = () => {
    return (
        <>
            <header
                className="bg-cover bg-center h-screen relative pt-4"
                style={{ backgroundImage: `url("${Background}")` }}
            >
                <Header header={{ __html: 'Всё, чего <br /> заслуживает ваш дом' }} desc="Наша мебель — ваше отражение" button={true} />
            </header>
            <SectionFor />
            <ProductBox />
            <Catalog />
            <Footer />
        </>
    );
};

export default Home;
