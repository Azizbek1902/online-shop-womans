import React from "react";
import { Route, Routes } from "react-router-dom";
import Registration from "../views/Registration";
import Home from "../views/Home";
import Cart from "../views/Cart";
import Likes from "../views/Likes";
import Profile from "../views/Profile";
import Navbar from "../components/Navbar";

function Router() {
  const token = "null";
  return (
    <div>
      {token ? (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/likes" element={<Likes />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </>
      ) : (
        <Routes>
          <Route path="/" element={<Registration />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      )}
    </div>
  );
}

export default Router;
