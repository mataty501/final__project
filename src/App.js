import Nav from './components/Nav';
import Filter from './components/Filter';
import Products from './components/Products';
import Footer from './components/Footer'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Filter/>
      <Products/>
      <Footer/>
    </div>
  );
}

export default App;
