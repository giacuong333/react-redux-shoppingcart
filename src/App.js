import React from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-full h-screen">
      <div className="">
        <Header />
        <ProductList />
        <Footer />
      </div>
    </div>
  );
}

export default App;
