import Home from "../Home/Home";
import Navbar from "../Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Create from "../Create/Create";
import BlogDetails from "../BlogDetails/BlogDetails";
import NotFound from "../../NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs/:id" element={<BlogDetails />} />
            <Route path="/create" element={<Create />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
