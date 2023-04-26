import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import CatalogPage from './pages/CatalogPage';
import CartPage from './pages/CartPage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalog" element={<CatalogPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
};

export default App;
