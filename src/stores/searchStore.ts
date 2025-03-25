import { create } from "zustand";
import { fetchCoordinates } from "../services/geoLocationApi";

interface SearchState {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  coordinates: {lat: number, lng: number} | null;
  setCoordinates: (lat: number, lng: number) => void;
}

export const useSearchStore = create<SearchState>((set) => ({
  searchQuery: "",
  coordinates: null,

  setSearchQuery: async (query) => {
    set({ searchQuery: query });

    try {
      console.log("Fetching coordinates for:", query);
      const coords = await fetchCoordinates(query);
      console.log("Coordinates fetched:", coords);
      set({coordinates: null});
    } catch (error) {
      console.error("Error fetching coordinates:", error);
      set({coordinates: null})
    }
  },
  setCoordinates: (lat, lng) => set({coordinates: {lat, lng}}),
}));
