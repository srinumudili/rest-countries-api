import React, { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import CountryListShimmer from "./CountryListShimmer";

const CountryList = ({ query }) => {
  const [countriesData, setCountriesData] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setCountriesData(data);
      });
  }, []);
  return !countriesData.length ? (
    <CountryListShimmer />
  ) : (
    <div className="countries-container">
      {countriesData
        .filter(
          (country) =>
            country.name.common.toLocaleLowerCase().includes(query) ||
            country.region.toLocaleLowerCase().includes(query)
        )
        .map((country) => {
          return (
            <CountryCard
              key={country.name.common}
              name={country.name.common}
              flag={country.flags.svg}
              population={country.population.toLocaleString("en-IN")}
              region={country.region}
              capital={country.capital}
              data={country}
            />
          );
        })}
    </div>
  );
};

export default CountryList;
