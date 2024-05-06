import React, { useContext, useState } from "react";
import SearchBar from "./SearchBar";
import "../../App.css";
import SelectMenu from "./SelectMenu";
import CountryList from "./CountryList";
import { ThemeContext } from "../../contexts/ThemeContext";

const Home = () => {
  const [query, setQuery] = useState("");
  const [isDark] = useContext(ThemeContext);

  return (
    <main className={`${isDark ? "dark" : ""}`}>
      <div className="search-filter-container">
        <SearchBar setQuery={setQuery} />
        <SelectMenu setQuery={setQuery} />
      </div>
      <CountryList query={query} />
    </main>
  );
};

export default Home;
