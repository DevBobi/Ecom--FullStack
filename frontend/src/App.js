import './App.css';
import Header from "./components/layout/Header.js";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Header />} />

      </Routes>
    </Router>
  );
}

export default App;
