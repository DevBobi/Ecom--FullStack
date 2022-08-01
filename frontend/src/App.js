import './App.css';
import Header from "./components/layout/Header.js";
import {
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Header />
      </Routes>
    </Router>
  );
}

export default App;
