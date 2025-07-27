import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Donate from "./components/Donate";
import Volunteer from "./components/Volunteer";
import Login from "./components/Login";
import Register from "./components/Register";
import AdminDashboard from "./components/AdminDashboard";

function App() {
  return (
    <>
      <header className="bg-white shadow-md px-4 py-3 flex flex-col sm:flex-row items-center justify-between">
  <div className="flex items-center gap-4">
    <span className="text-2xl font-bold text-green-700">HopeBridge</span>
  </div>
  <nav className="mt-2 sm:mt-0 flex flex-col sm:flex-row gap-4 sm:gap-8">
    <Link
      to="/"
      className="px-4 py-2 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600 transition-transform duration-300 transform hover:scale-105"
    >
      Home
    </Link>
    <Link
      to="/about"
      className="px-4 py-2 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600 transition-transform duration-300 transform hover:scale-105"
    >
      About NGO
    </Link>
    <Link
      to="/donate"
      className="px-4 py-2 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600 transition-transform duration-300 transform hover:scale-105"
    >
      Donate
    </Link>
    <Link
      to="/volunteer"
      className="px-4 py-2 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600 transition-transform duration-300 transform hover:scale-105"
    >
      Volunteer
    </Link>
    <Link
      to="/login"
      className="px-4 py-2 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600 transition-transform duration-300 transform hover:scale-105"
    >
      Login
    </Link>
    <Link
      to="/register"
      className="px-4 py-2 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600 transition-transform duration-300 transform hover:scale-105"
    >
      Register
    </Link>
    <Link
      to="/admin"
      className="px-4 py-2 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600 transition-transform duration-300 transform hover:scale-105"
    >
      Admin
    </Link>
  </nav>
</header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </>
  );
}

export default App;