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
    <div className="p-4 border rounded shadow-lg w-96 mx-auto mt-5">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Enter an address"
        className="border p-2 w-full rounded mb-2"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white px-4 py-2 rounded w-full"
      >
        Search
      </button>
      {searchError && <p className="text-red-500 mt-2">{searchError}</p>}
      {loading && <p className="mt-2">Loading...</p>}
      {error && <p className="text-red-500 mt-2">Error: {error}</p>}
      {temperature !== null && condition && (
        <div className="mt-4 p-3 bg-gray-100 rounded">
          <p className="text-lg font-semibold">Temperature: {temperature}°C</p>
          <p>Condition: {condition}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherSearchBox;
