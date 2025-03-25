import { create } from "zustand";

//define the type of thestore
interface Situation {
  id: string;
  description: string;
  type: string;
}

interface SituationState {
  situations: Situation[];
  setSituations: (situations: Situation[]) => void;
}

//create the store
export const useSituationsStore = create<SituationState>((set) => ({
  situations: [],
  setSituations: (situations) => set({situations}),

}));
