import Home from "../Home/Home";
import Navbar from "../Navbar/Navbar";
import { BrowserRouter, Link, Route, Routes, Navigate } from "react-router-dom";
import Create from "../Create/Create";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
