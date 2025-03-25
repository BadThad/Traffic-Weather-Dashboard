export const fetchWeather = async (lat: number | null, lng: number |null) => {
  const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${API_KEY}`
    );

    if (!response.ok) throw new Error("Failed to fetch weather data");

    const data = await response.json();
    console.log("Weather Data:", data.main.temp, data.weather[0].main, data.weather[0].description);

    return{
      temperature: data.main?.temp ?? 0,
      conditions: data.weather?.[0]?.main ?? "Unknown",
      description: data.weather?.[0]?.description ?? "No description available",
    };

  } catch (err) {
    console.error("Error fetching weather data:", err);

    return {
      temperature: 0,
      conditions: "Unavailable",
      description: "Could not retrieve weather data.",
    }
  }
};