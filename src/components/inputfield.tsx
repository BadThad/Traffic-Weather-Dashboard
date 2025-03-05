import React, { JSX, useState } from "react";

function inputField(): JSX.Element {
  const [address, setAdress] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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