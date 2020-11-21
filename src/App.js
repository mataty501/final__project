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


function App() {
  return (
    <>
      <Link to="/Admin">Admin</Link>
      <Switch>
        <Route exact path="/">
          <div className="App">
            {/*<Nav />*/}
            <Filter />
            <Products />
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
