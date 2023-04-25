import CategoryCard from './CategoryCard';
import { Link } from 'react-router-dom';

import relax from '../assets/for_cards/RELAX.jpg';
import work from '../assets/for_cards/WORK.jpg';
import kitchen from '../assets/for_cards/KITCHEN.jpg';
import baby_room from '../assets/for_cards/BABY-ROOM.jpg';
import bathroom from '../assets/for_cards/BATHROOM.jpg';

const SectionFor = () => {
    return (
        <section className="py-12 container mx-auto">
            <div className="mb-8">
                <h2 className="text-4xl font-bold">Мебель для ...</h2>
            </div>
            <div className="grid md:grid-cols-6 grid-cols-1 gap-4">
                <div className="md:col-span-3 col-span-1">
                    <Link to="/categories/relax">
                        <CategoryCard title="ОТДЫХА" image={relax} />
                    </Link>
                </div>
                <div className="md:col-span-3 col-span-1">
                    <Link to="/categories/work">
                        <CategoryCard title="РАБОТЫ" image={work} />
                    </Link>
                </div>
                <div className="md:col-span-2 col-span-1">
                    <Link to="/categories/kitchen">
                        <CategoryCard title="КУХНИ" image={kitchen} />
                    </Link>
                </div>
                <div className="md:col-span-2 col-span-1">
                    <Link to="/categories/children">
                        <CategoryCard title="ДЕТСКОЙ" image={baby_room} />
                    </Link>
                </div>
                <div className="md:col-span-2 col-span-1">
                    <Link to="/categories/bathroom">
                        <CategoryCard title="ВАННОЙ" image={bathroom} />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default SectionFor;
