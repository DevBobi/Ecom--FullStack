import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from './screens/Home/Home';
import Layout from './components/Layout/Layout';
import ProductDetails from './components/Product/ProductDetails';
import Products from './components/Product/Products';
import Search from './components/Product/Search';


function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          {/* <Route path="/product/:keyword" element={<Products />} /> */}
          <Route path="/search" element={<Search />} />
          <Route path="/search/product/:id" element={<ProductDetails />} />
        </Routes>
      </Layout>

    </Router>
  );
}

export default App;
