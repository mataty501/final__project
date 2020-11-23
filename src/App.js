import Nav from './components/Nav';
import Filter from './components/Filter';
import Products from './components/Products';
import Footer from './components/Footer'
import './App.css';
import './App-mediaQueries.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Admin from './admin/Admin';
import axios from 'axios';
import { useState, useEffect } from 'react'

function App() {
  const [products, setProducts] = useState()
  useEffect(() => {
    const getProducts = async () => {
      const Data = await axios.get('http://localhost:5000/getProducts')
      console.log('data below')
      setProducts(Data.data)
    }
    getProducts()
  }, [])
  return (
    <>
      <Link to="/Admin">Admin</Link>
      <Switch>
        <Route exact path="/">
          <div className="App">
            {/*<Nav />*/}
            <Filter />
            <Products data={products ? products : ""} />
            <Footer />
          </div>
        </Route>
        <Route path="/Admin">
          <Admin />
        </Route>
      </Switch>
    </>
  );
}

export default App;
