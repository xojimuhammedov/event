import "./App.css";
import Header from "./components/Header";
import SelectedService from "./components/SelectedService";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import ServiceAbout from "./page/ServiceAbout";
import AboutUs from "./page/AboutUs";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <SelectedService />
              <Main />
            </>
          }
        />
        <Route path="*" element={<h1>404 Not Found</h1>} />
        <Route
          path="/services/:id"
          element={
            <>
              <Header />
              <Home />
              <ServiceAbout />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Header />
              <Home />
              <AboutUs />
            </>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
