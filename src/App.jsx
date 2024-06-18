import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Carousel } from "./components/Carousel/Carousel";

function App() {
  return (
    <>
      <div className="App">
        <Carousel />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
