import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

import Login from "./pages/Login";

import Signup from "./pages/Signup";
import Discover from "./pages/Discover";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
<<<<<<< HEAD
<<<<<<< HEAD
        <Route path="/login" element={<Login />} />
=======
=======
>>>>>>> a0b49ce75d61c4dd2afadbe0ef28d94aa586a388

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Signup />} />
        <Route path="/discover" element={<Discover />} />

<<<<<<< HEAD
>>>>>>> a0b49ce75d61c4dd2afadbe0ef28d94aa586a388
=======
>>>>>>> a0b49ce75d61c4dd2afadbe0ef28d94aa586a388
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
