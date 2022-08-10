import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from './screens/Home/Home';
import Layout from './components/Layout/Layout';
import ProductDetails from './components/Product/ProductDetails';


function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </Layout>

    </Router>
  );
}

export default App;
