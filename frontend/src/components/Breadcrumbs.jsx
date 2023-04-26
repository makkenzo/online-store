import { Link } from 'react-router-dom';

const Breadcrumbs = ({ pathnames }) => {
    return (
        <nav className="flex">
            <ol className="list-none p-0 inline-flex">
                <li className="flex items-center">
                    <Link to="/" className="text-xl text-blue-600 hover:text-blue-950">
                        home
                    </Link>
                    <span className="mx-2 text-gray-600 text-xl">/</span>
                </li>
                {pathnames.map((name, index) => {
                    const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                    const isList = index === pathnames.length - 1;

                    return isList ? (
                        <li className="text-gray-500 text-xl" key={routeTo}>
                            {name}
                        </li>
                    ) : (
                        <li key={routeTo}>
                            <Link to={routeTo} className="text-gray-400 hover:text-gray-500 text-xl">
                                {name}
                            </Link>
                            <span className="mx-2 text-gray-300 text-xl">/</span>
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};

export default Breadcrumbs;
