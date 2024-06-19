import "./App.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import Carousel from "./components/Carousel/Carousel";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Login from "./pages/Auth/Login/Login";
import Register from "./pages/Auth/Register/Register";

function App() {
  return (
    <>
      <div className="App">
        <Carousel />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
