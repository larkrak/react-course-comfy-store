import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";

import {
  Home,
  SingleProduct,
  Cart,
  Checkout,
  Error,
  About,
  Products,
  PrivateRoute,
} from "./pages";
import AuthWrapper from "./pages/AuthWrapper";

function App() {
  return (
    <AuthWrapper>
      <Router>
        <Navbar></Navbar>
        <Sidebar></Sidebar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/cart" element={<Cart></Cart>}></Route>
          <Route path="/products" element={<Products></Products>}></Route>
          <Route
            path="/product/:id"
            element={<SingleProduct></SingleProduct>}
          ></Route>
          <Route
            path="/checkout"
            element={
              <PrivateRoute>
                <Checkout></Checkout>
              </PrivateRoute>
            }
          ></Route>
          <Route path="*" element={<Error></Error>}></Route>
        </Routes>
        <Footer></Footer>
      </Router>
    </AuthWrapper>
  );
}

export default App;
