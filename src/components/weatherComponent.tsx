import React, { useState } from "react";
import { useSearchStore } from "../stores/searchStore";
import { useWeatherStore } from "../stores/weatherStore";
import { fetchCoordinates } from "../services/geoLocationApi";

const WeatherSearchBox: React.FC = () => {
  const { searchQuery, setSearchQuery, setCoordinates } = useSearchStore();
  const { temperature, condition, loading, error, fetchWeather } =
    useWeatherStore();
  const [searchError, setSearchError] = useState<string | null>(null);

  const handleSearch = async () => {
    setSearchError(null);
    try {
      const { lat, lng } = await fetchCoordinates(searchQuery);
      setCoordinates(lat, lng);
      fetchWeather(lat, lng);
    } catch (err: any) {
      setSearchError(err.message);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Enter an address"
      />
      <button onClick={handleSearch}>Search</button>
      {searchError && <p>{searchError}</p>}
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {temperature !== null && condition && (
        <div>
          <p>Temperature: {temperature}°C</p>
          <p>Condition: {condition}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherSearchBox;
