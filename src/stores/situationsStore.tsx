import { create } from "zustand";

//define the type of thestore
type SituationsStore = {
  where: string | null;
  what: string | null;
  why: string | null;
};

//create the store
export const useSituationsStore = create<SituationsStore>((set) => ({
  where: "here",
  what: "olycka",
  why: "nothing",
}));
