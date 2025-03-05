import React, { JSX, useState } from "react";

function inputField(): JSX.Element {
  const [address, setAdress] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Form validation to prevent empty string input.
    if(address.trim() === "") {
        alert("Please enter a valid address.")
        return
    }
    console.log(address);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={address}
          onChange={(e) => setAdress(e.target.value)}
        />
      </form>
      <button type="submit">Submit</button>
    </div>
  );
}

export default inputField;