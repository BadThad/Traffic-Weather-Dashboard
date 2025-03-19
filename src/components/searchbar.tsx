import React, { JSX, useState } from "react";

export function SearchBar(): JSX.Element {
  const [location, setLocation] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

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