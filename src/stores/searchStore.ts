import { create } from "zustand";

interface SearchState {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  coordinates: {lat: number; lng: number} | null;
  setCoordinates: (lat: number, lng: number) => void;
}

export const useSearchStore = create<SearchState>((set) => ({
  searchQuery: "",
  setSearchQuery: (query) => set({ searchQuery: query }),
  coordinates: null,
  setCoordinates: (lat, lng) => set({coordinates: {lat, lng}}),
}));
