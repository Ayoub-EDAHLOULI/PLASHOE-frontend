import "./App.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import Carousel from "./components/Carousel/Carousel";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Login from "./pages/Auth/Login/Login";
import Register from "./pages/Auth/Register/Register";
import RecoverPassword from "./pages/Auth/Recover password/RecoverPassword";
import About from "./pages/About/About";
import Shipping from "./components/Shipping/Shipping";
import ContactUs from "./pages/ContactUs/ContactUs";
import DisplayProducts from "./pages/DisplayProducts/DisplayProducts";
import Products from "./pages/Products/Products";

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
          <Route path="/forgot-password" element={<RecoverPassword />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/collection" element={<DisplayProducts />} />
          <Route path="/products" element={<Products />} />
        </Routes>
        <Shipping />
        <Footer />
      </div>
    </>
  );
}

export default App;
