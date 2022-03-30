import "./App.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import WeatherListing from "./components/WeatherListing";
import MainPage from "./pages/mainPage";
import { Appbar } from "./components/Appbar";

const App = () => {
  return (
    <div>
      <Appbar />
      <MainPage />
    </div>
  );
}

export default App;
