import React from "react";
import Intro from "./componensts/intro/Intro";
import About from "./componensts/about/About";
import ProductList from "./componensts/productList/ProductList";
import Contact from "./componensts/contact/Contact";
import Toggle from "./componensts/toggle/Toggle";

function App() {
  return (
    <div className="App">
      <Intro />
      <About />
      <ProductList />
      <Contact />
      {/* <Toggle /> */}
    </div>
  );
}

export default App;
