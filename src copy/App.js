import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import CarsPage from "./components/OurCars";
import LoginPage from "./components/RegistrationForm";
import CartPage from "./components/Cart";

function App() {
  return (
    <Router>
      <div>
        <NavigationMenu />
        <Switch>
          <Route path="/" exact component={Navigation} />
          <Route path="/products" component={CarsPage} />
          <Route path="/login" component={CartPage} />
          <Route path="/registration" component={LoginPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
