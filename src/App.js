import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import BestCrafts from "./Pages/BestCrafts";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bestcrafts" element={<BestCrafts />} />
      </Routes>
    </Router>
  )
}

export default App;
