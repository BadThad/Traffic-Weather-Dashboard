// import { useEffect } from "react";

// const API_KEY: string = "236c8493b510ce5fe230adb590f7438f";
// const BASE_URL: string = "https://api.openweathermap.org/data/2.5/weather";

// const fetchWeather = async (): Promise<void> => {
//   const location = "New York"; // Location for testing
//   try {
//     const response = await fetch(`${BASE_URL}?q=${location}&appid=${API_KEY}&units=metric`);
//     const data = await response.json();
//     console.log("Weather Data:", data);
//   } catch (error) {
//     console.error("Error fetching weather data:", error);
//   }
// };

// const WeatherService: React.FC = () => {
//   useEffect(() => {
//     fetchWeather();
//   }, []);

//   return null;
// };

// export default WeatherService;

/*const fetchWeather = async (
  latitude: number,
  longitude: number,
): Promise<void> => {
  const API_KEY = "236c8493b510ce5fe230adb590f7438f";
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`
    );

    if (!response.ok) throw new Error("Failed to fetch weather data");

    const data = await response.json();
    console.log("Weather Data:", data);
  } catch (err) {
    console.error("Error fetching weather data:", err);
  }
};
*/

/*navigator.geolocation.getCurrentPosition(
  ({ coords: { latitude, longitude } }) => fetchWeather(latitude, longitude),
  () => console.error("Geolocation permission denied")
);
*/

const fetchWeather = async (
  latitude: number,
  longitude: number
): Promise<void> => {
  const API_KEY = "YOUR_OPENWEATHER_API_KEY";

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`
    );

    if (!response.ok) throw new Error("Failed to fetch weather data");

    const data = await response.json();
    console.log("Weather Data:", data);
  } catch (err) {
    console.error("Error fetching weather data:", err);
  }
};

fetchWeather(40.7128, -74.006);
