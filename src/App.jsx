import "./App.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
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
import Products from "./pages/Products/Products";
import Dashboard from "./pages/Dashboard/Dashboard";
import { useEffect } from "react";
import { checkAuthentication } from "./store/Actions/userActions";
import { PrivateAdminRoute } from "./components/PrivateRoutes/PrivateAdminRoute";
import DisplayProduct from "./pages/DisplayProduct/DisplayProduct";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuthentication());
    const user = localStorage.getItem("user");
    if (user) {
      dispatch({ type: "FETCH_USER_SUCCESS", payload: JSON.parse(user) });
    }
  }, [dispatch]);

  return (
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
        <Route path="/collection" element={<Products />} />
        <Route path="/product/:id" element={<DisplayProduct />} />
        <Route element={<PrivateAdminRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
      <Shipping />
      <Footer />
    </div>
  );
}

export default App;
