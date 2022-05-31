import React from 'react';

import Routing from './Routing';
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"

import "./App.css"

const App = () => {
  return (
    <div>
      <Header />
      <Routing />
      <Footer />

    </div>
  );
};

export default App;
