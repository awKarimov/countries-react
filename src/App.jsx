import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails";

function App() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-blue-600"> Davlatlar</h1>
        <Link
          to="/"
          className="text-blue-500 hover:text-blue-700 font-medium transition">
          Bosh sahifa
        </Link>
      </header>

      <Routes>
        <Route path="/" element={<CountriesList />} />
        <Route path="/country/:code" element={<CountryDetails />} />
      </Routes>
    </div>
  );
}

export default App;
