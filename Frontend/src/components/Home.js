import React from "react";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-green-200 flex flex-col items-center justify-center px-4">
      <div className="max-w-2xl w-full bg-white rounded-xl shadow-2xl p-8 text-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/616/616494.png"
          alt="HopeBridge Logo"
          className="mx-auto mb-4 w-24 h-24 animate-bounce"
        />
        <h1 className="text-5xl font-extrabold text-green-700 mb-4">
          Join HopeBridge
        </h1>
        <p className="text-xl text-gray-700 mb-6 font-medium">
          <span className="text-yellow-600">Be the change</span> you want to see! <br />
          Your <span className="text-green-600 font-semibold">donation</span> or <span className="text-blue-600 font-semibold">volunteer effort</span> can transform lives and build a brighter future.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <a
            href="/donate"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition transform hover:scale-105"
          >
            Donate Now
          </a>
          <a
            href="/volunteer"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition transform hover:scale-105"
          >
            Become a Volunteer
          </a>
        </div>
        <div className="mt-4 text-lg text-gray-500 italic">
          Every small act of kindness creates a ripple of hope.
        </div>
      </div>
      <footer className="mt-8 text-gray-400 text-xs text-center">
        &copy; {new Date().getFullYear()} HopeBridge. Together, we rise.
      </footer>
    </div>
  );
};

export default Home;