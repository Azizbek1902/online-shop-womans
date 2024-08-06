import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../views/Home";
import Cart from "../views/Cart";
import Likes from "../views/Likes";
import Login from "../views/Profile/Login";
import Orders from "../views/Profile/Orders";
import Profile from "../views/Profile/index";
import Registration from "../views/Profile/Registration";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Router() {
  return (
    <div>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/likes" element={<Likes />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/order" element={<Orders />} />
        </Routes>
        <Footer />
      </>
    </div>
  );
}

export default Router;
