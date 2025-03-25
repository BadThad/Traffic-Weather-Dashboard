import { Coordinates } from "../types";

const api_key = "0446888e31c3f0f934343d993bca85e5";

export const fetchCoordinates = async (query: string): Promise<Coordinates> => {
  try {
    const response = await fetch(
      `https://geokeo.com/geocode/v1/search.php?q=${encodeURIComponent(query)}&api=${api_key}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch geolocation data.");
    }

    const data = await response.json();
    const location = data.results?.[0]?.geometry?.location;
    if (!location) {
      throw new Error("Location not found.");
    }

    return {
      latitude: location.lat,
      longitude: location.lng,
    };
  } catch (error) {
    throw new Error(error.message);
  }
};
