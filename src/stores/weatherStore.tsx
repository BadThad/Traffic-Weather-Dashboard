import { create } from "zustand";

interface WeatherData {
  temp: number;
  condition: string;
  description: string;
}

interface WeatherState {
  weather: WeatherData | null;
  setWeather: (weather: WeatherData | null) => void;
}

export const useWeatherStore = create<WeatherState>((set) => ({
  weather: null,
  setWeather: (weather) => set({ weather }),
}));
