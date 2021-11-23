import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Login } from "./components/auth/Login";
import { Register } from "./components/auth/Register";

import { ItemDetailContainer } from "./components/ecommerce/ItemDetailContainer";
import { ItemListContainer } from "./components/ecommerce/ItemListContainer";
import { ShoppingCart } from "./components/ecommerce/ShoppingCart";
import CartContextProvider from "./context/CartContext";


function App() {
  return (

    <CartContextProvider>
      <Router>
        <Switch>
          <Route exact path = "/register" component = {Register}/>
          <Route exact path = "/login" component = {Login}/>
          <Route exact path = "/" component = {ItemListContainer}/>
          <Route exact path = "/category/:categoryId" component = {ItemListContainer}/>
          <Route exact path = "/item/:id" component = {ItemDetailContainer}/>
          <Route exact path = "/cart" component = {ShoppingCart}/>
        </Switch>
      </Router>
    </CartContextProvider>
  );
}

export default App;
