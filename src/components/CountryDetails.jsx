import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function CountryDetails() {
  const { code } = useParams();
  const navigate = useNavigate();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${code}`)
      .then((res) => res.json())
      .then((data) => {
        setCountry(data[0]);
      });
  }, [code]);

  if (!country) return null;

  const { name, flags, capital, population, area, region, languages } = country;

  return (
    <div className="bg-white shadow-lg rounded-xl p-6">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-2 rounded-md">
        Orqaga
      </button>

      <h2 className="text-2xl font-bold mb-3">{name.common}</h2>
      <img
        src={flags.svg}
        alt={name.common}
        className="w-64 h-auto rounded-lg mb-4"
      />

      <div className="space-y-2 text-gray-700">
        <p>
          <strong>Rasmiy nom:</strong> {name.official}
        </p>
        <p>
          <strong>Hudud:</strong> {region}
        </p>
        <p>
          <strong>Poytaxt:</strong> {capital.join(", ")}
        </p>
        <p>
          <strong>Aholi:</strong> {population.toLocaleString()}
        </p>
        <p>
          <strong>Maydon:</strong> {area.toLocaleString()} km²
        </p>
        <p>
          <strong>Til: </strong>
          {Object.values(languages).join(", ")}
        </p>
      </div>
    </div>
  );
}

export default CountryDetails;
