import React, { useContext } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import AddProductForm from "./components/AddProductForm/AddProductForm";
import EditProductForm from "./components/EditProductForm/EditProductForm";
import LoginForm from "./components/LoginForm/LoginForm";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import ProductsList from "./components/ProductsList/ProductsList";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import { authContext } from "./contexts/authContext";
import NotFound from "./components/NotFound/NotFound";

const Routing = () => {
  const { isAdmin } = useContext(authContext);
  // console.log(isAdmin);
  return (
    <Routes>
      <Route path="/login" element={<LoginForm />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route
        path="/add-product"
        element={isAdmin ? <AddProductForm /> : <Navigate replace to="*" />}
      />
      <Route path="/products" element={<ProductsList />} />
      <Route path="/products/:id" element={<ProductDetails />} />
      <Route
        path="/edit/:id"
        element={isAdmin ? <EditProductForm /> : <Navigate replace to="*" />}
      />
      <Route path="/cart" element={<Cart />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routing;
