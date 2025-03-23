import React, { useState } from "react";
import { useSearchStore } from "../stores/searchStore";

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const setSearchQuery = useSearchStore((state) => state.setSearchQuery);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchQuery(query); // Updates the Zustand store

    // Form validation to prevent empty string input.
    if (query.trim() === "") {
      alert("Please enter a valid address.");
      return;
    }
  };

  return (
    <div className="searchbar-container">
      <form className="searchbar-form" onSubmit={handleSubmit}>
        <input
          placeholder="Enter your location..."
          className="searchbar-input"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="search-submit-btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
