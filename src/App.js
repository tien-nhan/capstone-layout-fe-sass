import { Route, Router, Routes } from "react-router-dom";
import "./App.scss";
import ComponentMove from "./components/ComponentMove/ComponentMove";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { Switch } from "@mui/material";
import DetailFilm from "./components/DetailFilm/DetailFilm";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <div class="jss14"></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/phim/:maPhim" element={<DetailFilm />} />
      </Routes>
      <Footer />
      <ComponentMove />
    </div>
  );
}

export default App;
