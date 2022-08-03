import './App.css';
import Header from "./components/layout/Header/Header";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Footer from './components/layout/Footer/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
