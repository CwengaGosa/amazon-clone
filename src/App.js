import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import Header from "./components/layout/Header";
import ProductDetails from "./components/ProductDetails";
import Login from "./components/Login";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          {/* create path that redirects to home page */}
          <Route path="/home">
            <Home />
          </Route>
          {/* create path that redirects to products page */}
          <Route path="/products" exact>
            <Products />
          </Route>
          {/* path to product details */}
          <Route path="/products/:id">
            <ProductDetails />
          </Route>
          {/* path to login */}
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
