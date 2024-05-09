import "./App.css";
import Header from "./components/Header";
import SelectedService from "./components/SelectedService";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Home from "./components/Home";

function App() {
  return (
    <div>
      {/* <Header /> */}
      <Home />
      <SelectedService />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
