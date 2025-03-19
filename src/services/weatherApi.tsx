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
