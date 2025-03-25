import { Coordinates } from "../types";

export const fetchCoordinates = async (query: string): Promise<Coordinates> => {
  try {

    const apiKey = import.meta.env.VITE_GEOKEO_API_KEY;

    if(!apiKey) throw new Error("API key is missing.");

    const response = await fetch(
      `/api/v1/search.php?q=${encodeURIComponent(query)}&api=${apiKey}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch geolocation data.");
    }

    const data = await response.json();

    if (!data.results || data.results.length === 0) {
      throw new Error("Location not found.");
    }

    const {lat, lng} = data.results[0].geometry.location;
    const formattedAddress = data.results[0].formatted;

    console.log("Fetched coordinates:", { lat, lng, address: formattedAddress });

    return { lat, lng, address: formattedAddress };

  } catch (error) {
    console.error("Geolocation fetch error:", error)
    throw new Error("Unable to retrieve geolocation data.");
  }
};


