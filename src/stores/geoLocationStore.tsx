import { create } from "zustand";

type GeoLocationStore = {
  lng: number;
  lat: number;
  fetchLocationDataAsync: (query: string) => Promise<void>;
};

export const useGeoLocationStore = create<GeoLocationStore>((set) => ({

    lng: 0,
    lat: 0,

  fetchLocationDataAsync: async (query) => {
    const api_key = "0446888e31c3f0f934343d993bca85e5";
    const api_url: string = `https://geokeo.com/geocode/v1/search.php?q=${query}&api=${api_key}`;

    try {
      const response = await fetch(api_url);
      const locationData = await response.json();

      set ({lng: locationData.results[0].geometry.location.lng})
      set ({lat: locationData.results[0].geometry.location.lat})

    } catch (error) {
      console.log("Could not fetch data from API" + "-" + error);
    }
  },
}));
