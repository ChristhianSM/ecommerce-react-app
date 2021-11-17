import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Login } from "./components/auth/Login";
import { Register } from "./components/auth/Register";

import { ItemDetailContainer } from "./components/ecommerce/ItemDetailContainer";
import { ItemListContainer } from "./components/ecommerce/ItemListContainer";
import { NavBar } from "./components/ui/NavBar";


function App() {
  return (
    <Router>
      {/* <NavBar /> */}
      <Switch>
        <Route exact path = "/register" component = {Register}/>
        <Route exact path = "/login" component = {Login}/>
        <Route exact path = "/" component = {ItemListContainer}/>
        <Route exact path = "/category/:categoryId" component = {ItemListContainer}/>
        <Route exact path = "/item/:id" component = {ItemDetailContainer}/>
      </Switch>
    </Router>
  );
}

export default App;
