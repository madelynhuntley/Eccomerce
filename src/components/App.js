import { BrowserRouter, Switch, Route } from "react-router-dom";

import icons from "../helper/icon";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Navbar from "./navigation/Navbar";
import Footer from "./navigation/Footer";
import ContextProvider from "./context/ContextProvider";

icons();

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ContextProvider>
          <Navbar />
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route exact path="/" component={Home} />
            <Route exact path="/products" component={Products} />
            <Route path="/products/:id" component={Product} />
            <Route path="/cart" component={Cart} />
          </Switch>
          <Footer />
        </ContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
