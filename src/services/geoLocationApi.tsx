const api_key = "0446888e31c3f0f934343d993bca85e5";

export const fetchCoordinates = async (query: string) => {
  const response = await fetch(
    `https://geokeo.com/geocode/v1/search.php?q=${encodeURIComponent(query)}&api=${api_key}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch geolocation data.");
  }

  const data = await response.json();
  if (data.result.lenght === 0) {
    throw new Error("No results found.");
  }

  return {
    lat: data.results[0].geometry.location.lat,
    lng: data.results[0].geometry.location.lng,
  };
};
