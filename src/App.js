import React from "react";

import Routing from "./Routing";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import "./App.css";
import ProductsContextProvider from "./contexts/productsContext";
import AuthContextProvider from "./contexts/authContext";

const App = () => {
  return (
    <AuthContextProvider>
      <ProductsContextProvider>
        <Header />
        <Routing />
        <Footer />
      </ProductsContextProvider>
    </AuthContextProvider>
  );
};

export default App;
