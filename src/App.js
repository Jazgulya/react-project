import React from 'react';

import Routing from './Routing';
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"

import "./App.css"
import ProductsContextProvider from './contexts/productsContext';

const App = () => {
  return (
    <ProductsContextProvider>
      <Header />
      <Routing />
      <Footer />

    </ProductsContextProvider>
  );
};

export default App;
