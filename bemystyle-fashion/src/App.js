import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/index';
import SignIn from './pages/signin';
import Product from './pages/products';
import Magazine from './pages/magazine';
import Contact from './pages/contact';
import DataProvider from './Data/DataProvider';
import Details from './components/Details/Details';
import Navbar from './components/Navbar/Navbar';
import Cart from './pages/cart';

import Payment from './components/Payment/Payment';
import Confirm from './components/Confirmation/Confirm';

function App() {
  return (
    <>
    <DataProvider>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact={true}  />
          <Route path="/signin" component={SignIn} />
          <Route path="/products" component={Product} />
          <Route exact path="/product/:id" component={Details } />
          <Route path="/magazine" component={Magazine} />
          <Route path="/contact-us" component={Contact} />
          <Route path="/cart" component={Cart}/>
          <Route path="/payment" component={Payment}/>
          <Route path="/confirm" component={Confirm}/>
        </Switch>
      </Router>
    </DataProvider>
    </>
    
  );
}

export default App;
