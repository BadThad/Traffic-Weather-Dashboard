import { useEffect } from "react";

const API_KEY: string = "236c8493b510ce5fe230adb590f7438f";
const BASE_URL: string = "https://api.openweathermap.org/data/2.5/weather";

const fetchWeather = async (): Promise<void> => {
  const location = "New York"; // Location for testing
  try {
    const response = await fetch(`${BASE_URL}?q=${location}&appid=${API_KEY}&units=metric`);
    const data = await response.json();
    console.log("Weather Data:", data);
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
};

const WeatherService: React.FC = () => {
  useEffect(() => {
    fetchWeather();
  }, []);

  return null;
};

export default WeatherService;