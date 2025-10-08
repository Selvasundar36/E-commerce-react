
import './App.css';
import Navbar from './component/navbar/navbar.jsx';
import{BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';
import Product from './pages/Product';
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import Footer from './component/Footer/Footer.jsx';
import men_banner from './component/assets/banner_mens.png'
import women_banner from './component/assets/banner_women.png'
import kids_banner from './component/assets/banner_kids.png'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginSignup />} />
       <Route path="/product/:productId" element={<Product />} />

        <Route path='/' element={<Shop />} />
        <Route path="/mens" element={<ShopCategory banner={men_banner} category="men" />} />
        <Route path="/womens" element={<ShopCategory banner={women_banner} category="women" />} />
        <Route path="/kids" element={<ShopCategory banner={kids_banner} category="kid" />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

    

export default App;
