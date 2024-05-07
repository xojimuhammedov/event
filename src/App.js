import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import SelectedService from './components/SelectedService';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div>
     <Header/>
     <SelectedService/>
     <Main/>
     <Footer/>
    </div>
  );
}

export default App;
