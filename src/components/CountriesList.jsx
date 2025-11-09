import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function CountriesList() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://restcountries.com/v3.1/all?fields=name,flags,papulation,region,capital"
    )
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
        setLoading(false);
      });
  }, []);

  if (loading)
    return <p className="text-center text-gray-500"> Loading ... </p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {countries.map((country) => (
        <div
          key={country.index}
          className="bg-white shadow hover:shadow-lg transition rounded-xl overflow-hidden">
          <img
            src={country.flags.svg}
            alt={country.name.common}
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h2 className="font-semibold text-lg mb-1">
              {country.name.common}
            </h2>
            <p className="text-gray-500 text-sm mb-3"> {country.region}</p>
            <Link to={`/country/${country.name.common}`}>
              <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
                Batafsil
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CountriesList;
