import "./App.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import Carousel from "./components/Carousel/Carousel";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <div className="App">
        <Carousel />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
