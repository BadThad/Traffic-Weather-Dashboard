import { create } from "zustand";

interface WeatherState {
  temperature: number | null;
  condition: string | null;
  loading: boolean;
  error: string | null;
  fetchWeather: (latitude: number, longitude: number) => Promise<void>;
}

const useWeatherStore = create<WeatherState>((set) => ({
  temperature: null,
  condition: null,
  loading: false,
  error: null,
  fetchWeather: async (latitude, longitude) => {
    const API_KEY = "236c8493b510ce5fe230adb590f7438f";
    set({ loading: true, error: null });

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`
      );

      if (!response.ok) throw new Error("Failed to fetch weather data");

      const data = await response.json();
      set({
        temperature: data.main.temp,
        condition: data.weather[0].description,
        loading: false,
      });
    } catch (err: any) {
      set({ error: err.message, loading: false });
    }
  },
}));

const WeatherComponent = () => {
  const { temperature, condition, loading, error, fetchWeather } =
    useWeatherStore();

  return (
    <div>
      <button onClick={() => fetchWeather(41.7128, -74.006)}>
        Get Weather
      </button>

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

export default WeatherComponent;
