import "./App.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import WeatherListing from "./components/WeatherListing";

function App() {
  return (
    <div className="App">
      <WeatherListing />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<WeatherListing />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route>Not found </Route>
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
