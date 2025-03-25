import { create } from "zustand";
import { fetchCoordinates } from "../services/geoLocationApi";

interface SearchState {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  coordinates: {lat: number | null, lng: number | null};
  setCoordinates: (lat: number, lng: number) => void;
}

export const useSearchStore = create<SearchState>((set) => ({
  searchQuery: "",
  coordinates: {lat: null, lng: null},

  setSearchQuery: async (query) => {
    set({ searchQuery: query });

    try {
      console.log("Fetching coordinates for:", query);
      const coords = await fetchCoordinates(query);
      console.log("Coordinates fetched:", coords);
      set({coordinates: {lat: coords.lat, lng: coords.lng}});
    } catch (error) {
      console.error("Error fetching coordinates:", error);
      set({coordinates: {lat: null, lng: null}})
    }
  },
  setCoordinates: (lat, lng) => set({coordinates: {lat, lng}}),
}));
