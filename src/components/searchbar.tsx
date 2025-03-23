import React, { JSX, useState } from "react";
import { useSearchStore } from "../stores/searchStore";

export function SearchBar(): JSX.Element {
  const [location, setLocation] = useState<string>("");
  const setSearchQuery = useSearchStore((state) => state.setSearchQuery)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchQuery(location);

    // Form validation to prevent empty string input.
    if(location.trim() === "") {
        alert("Please enter a valid address.")
        return
    }
    console.log(location);
  };

  return (
    <div className="searchbar-container">
      <form className="searchbar-form" onSubmit={handleSubmit}>
        <input
          placeholder="Enter your location..."
          className="searchbar-input"
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button className="search-submit-btn" type="submit">Submit</button>
      </form>      
    </div>
  );
};