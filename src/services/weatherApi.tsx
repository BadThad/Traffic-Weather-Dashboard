const fetchWeather = async (lat: number, lng: number): Promise<void> => {
  const API_KEY = "236c8493b510ce5fe230adb590f7438f";

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${API_KEY}`
    );

    if (!response.ok) throw new Error("Failed to fetch weather data");

    const data = await response.json();
    console.log("Weather Data:", data.main.temp, data.weather[0].description);
  } catch (err) {
    console.error("Error fetching weather data:", err);
  }
};

fetchWeather(56.044198399806945, 12.704068399999999);
