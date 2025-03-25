import { useEffect, useState } from "react";
import { useSearchStore } from "../stores/searchStore";
import { useWeatherStore } from "../stores/weatherStore";
import { fetchWeather } from "../services/weatherApi";

const WeatherSearchBox: React.FC = () => {
  const coordinates = useSearchStore((state) => state.coordinates);
  const setWeather = useWeatherStore((state) => state.setWeather);
  const weather = useWeatherStore((state) => state.weather);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!coordinates) return;

    const getWeather = async () => {
      setLoading(true);
      setError(null);

      try {
        const weatherData = await fetchWeather(
          coordinates.lat,
          coordinates.lng
        );
        setWeather(weather);
      } catch (err: any) {
        setError(err.message);
        setWeather(null);
      } finally {
        setLoading(false);
      }
    };

    getWeather();
  }, [coordinates, setWeather]);

  return (
    <div>
      {loading && <p>Loading weather data...</p>}
      {error && <p>Error: {error}</p>}
      {weather?.temp !== null && weather?.condition && (
        <div>
          <p>Temperature: {weather?.temp}°C</p>
          <p>Condition: {weather?.condition}</p>
          <p>Description: {weather?.description}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherSearchBox;
