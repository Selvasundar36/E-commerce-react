
import './App.css';
import Navbar from './component/navbar/navbar.jsx';
import{BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';
import Product from './pages/Product';
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/product" element={<Product />} />
        <Route path=':productId' element={<Product />} />
        <Route path='/' element={<Shop />} />
        <Route path="/mens" element={<ShopCategory category="mens" />} />
        <Route path="/womens" element={<ShopCategory category="womens" />} />
        <Route path="/kids" element={<ShopCategory category="kids" />} />
      </Routes>
    </Router>
  );
}

    

export default App;
